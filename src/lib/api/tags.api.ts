import { Query, toParams } from './query.util';

/**
 * Tags
 * -----------------------------------------------------------------------------
 * @see https://developer.wordpress.org/rest-api/reference/tags/
 */

export interface Tag {
  id: number;
  count: number;
  link: string;
  name: string;
  slug: string;
  taxonomgy: string; // seems like enum
  meta: unknown[];
}

export interface TagQuery extends Query {}

const endpoint = process.env.BLOG_URL!;

export async function fetchTags(query: TagQuery = {}): Promise<Tag[]> {
  const res = await fetch(`${endpoint}/tags?${toParams(query)}`);

  if (res.ok) {
    return res.json();
  }

  return [];
}
