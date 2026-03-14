import { Query, toParams } from './query.util';

/**
 * Posts
 * -----------------------------------------------------------------------------
 * @see https://developer.wordpress.org/rest-api/reference/posts/
 */

const endpoint = process.env.BLOG_URL!;

export interface Post {
  id: number;
  date: string;
  modified: string;
  author: number; // id of user
  link: string;
  class_list: string[]; // seems like tags rendered as classes
  tags: number[]; // ids of tags
  slug: string;

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

export async function fetchPostBySlug(slug: string): Promise<Post | undefined> {
  const res = await fetch(`${endpoint}/posts?${toParams({ slug })}`);

  if (res.ok) {
    const [post] = await res.json();
    return post;
  } else {
    return undefined; // 404
  }
}
