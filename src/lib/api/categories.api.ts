import { Query, toParams } from './query.util';

/**
 * Tags
 * -----------------------------------------------------------------------------
 * @see https://developer.wordpress.org/rest-api/reference/categories/
 */

export interface Category {
  id: number;
  count: number;
  link: string;
  name: string;
  slug: string;
  parent: number; // id of parent
  taxonomy: 'category';
  meta: unknown[];
}

export interface CategoryQuery extends Query {}

const endpoint = `${process.env.BLOG_URL!}/wp/v2`;

export async function queryCategories(query: CategoryQuery = {}): Promise<Category[]> {
  const res = await fetch(`${endpoint}/categories?${toParams(query)}`);

  if (res.ok) {
    return res.json();
  }

  return [];
}


export async function fetchCategory(id: number): Promise<Category | undefined> {
  const res = await fetch(`${endpoint}/categories/${id}`);

  if (res.ok) {
    return res.json();
  } else {
    return undefined; // 404
  }
}
