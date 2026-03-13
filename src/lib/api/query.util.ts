export interface Query {
  after?: string; // iso date
  user_exclude?: number[]; // user ids
  users?: number[]; // user ids
  before?: string; // iso date
  categories?: number[];
  include?: number[]; // post itds to include
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

export function toParams(params: Query): string {
  const searchParams = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value = value.join(',');
    }

    searchParams.append(key, value);
  });

  return searchParams.toString();
}
