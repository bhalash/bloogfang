import Image from 'next/image';
import { User, Post, fetchUser } from '@/lib/api';

export async function UserInfo({ post }: { post: Post }) {
  const user: User | undefined = await fetchUser(post.author);

  if (!user) {
    return null;
  }

  return (
    <div>
      <h4>{user.name}</h4>
      <p>{user.description}</p>
      <Image
        alt={user.name}
        src={user.avatar_urls['48']}
        width={50}
        height={50}
      />
    </div>
  );
}
