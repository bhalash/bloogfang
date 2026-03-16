import { Query, toParams } from './query.util';
import { redirect } from 'next/navigation';

/**
 * Posts
 * -----------------------------------------------------------------------------
 * @see https://developer.wordpress.org/rest-api/reference/posts/
 */

const endpoint = `${process.env.BLOG_URL!}/wp/v2`;

export interface Post {
  id: number;
  slug: string;
  date: string;
  modified: string;
  author: number; // id of user
  link: string;
  class_list: string[]; // seems like tags rendered as classes
  categories: number[]; // ids of tags
  tags: number[]; // ids of tags

  comment_status: string; // 'open' - enum
  ping_status: string; // 'open' - enum

  title: {
    rendered: string;
  };

  content: {
    rendered: string;
    protected: boolean;
  };

  excerpt: {
    rendered: string;
    protected: boolean;
  };
}

export interface PostQuery extends Query {}

export async function fetchPosts(query: PostQuery = {}): Promise<Post[]> {
  const res = await fetch(`${endpoint}/posts?${toParams(query)}`);

  if (res.ok) {
    return res.json();
  } else {
    return [];
  }
}

export async function fetchPost(id: number): Promise<Post | undefined> {
  const res = await fetch(`${endpoint}/posts/${id}`);

  if (res.ok) {
    return res.json();
  } else {
    return undefined; // 404
  }
}

/**
 * Find WP post by ID or slug: id will be fully numeric, while slugs will have
 * other alphanumeric characters.
 *
 * TODO(mark 2026-03-16): I'm unhappy with the redirect here as an impure
 * side-effect. Find a better home for it!
 */
export async function findPost(idOrSlug: string): Promise<Post | undefined> {
  if (/^[0-9]+$/.test(idOrSlug)) {
    const post = await fetchPost(Number(idOrSlug));

    if (post) {
      redirect(`/posts/${post.slug}`);
    }
  }

  const [post] = await fetchPosts({ slug: idOrSlug });
  return post;
}
