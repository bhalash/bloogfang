/**
 * Users
 *
 * @see https://developer.wordpress.org/rest-api/reference/users/
 */

export interface User {
  id: number;
  name: string;
  description: string;
  url: string;

  avatar_urls: {
    24: string;
    48: string;
    96: string;
  };
}

const endpoint = process.env.BLOG_URL!;

export async function fetchUsers(): Promise<User[]> {
  const res = await fetch(`${endpoint}/users`);
  return res.json();
}

export async function fetchUser(id: number): Promise<User | undefined> {
  const res = await fetch(`${endpoint}/users/${id}`);

  if (res.ok) {
    return res.json();
  }

  return undefined; // 404
}
