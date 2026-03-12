import { Author, Post } from './api.interface';

const endpoint = process.env.BLOG_URL!;

export function toParams(params: object): string {
  const searchParams = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => searchParams.append(key, value));
  return searchParams.toString();
}

// posts
// -----------------------------------------------------------------------------

export interface PostsQuery {
  after?: string; // iso date
  author_exclude?: number[]; // author ids
  authors?: number[]; // author ids
  before?: string; // iso date
  categories?: number[];
  exclude?: number[]; // post itds to exclude
  offset?: number;
  order?: 'asc' | 'desc';
  orderby?: 'date' | 'relevance' | 'id' | 'include' | 'title' | 'slug';
  page?: number;
  per_page?: number;
  search?: string;
  slug?: string;
  tags?: number[];
}

export async function fetchPosts(query: PostsQuery = {}): Promise<Post[]> {
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

// authors
// -----------------------------------------------------------------------------

export async function fetchAuthors(): Promise<Author[]> {
  const res = await fetch(`${endpoint}/users`);
  return res.json();
}

export async function fetchAuthor(id: number): Promise<Author | undefined> {
  const res = await fetch(`${endpoint}/users/${id}`);

  if (res.ok) {
    return res.json();
  } else {
    return undefined; // 404
  }
}
