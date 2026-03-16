import Image from 'next/image';
import { User, Post, fetchUser } from '@/lib/api';

import '@/styles/user.css';

export async function UserInfo({ post }: { post: Post }) {
  const user: User | undefined = await fetchUser(post.author);

  if (!user) {
    return null;
  }

  return (
    <footer className='flex user-footer justify-center'>
      <div className='flex user-footer-content gap-4 max-w-4xl'>
        <Image
          alt={user.name}
          src={user.avatar_urls['96']}
          width={150}
          height={150}
        />
        <div className='user-footer-bio flex flex-col'>
          <h4 className='font-bold text-3xl'>{user.name}</h4>
          <p dangerouslySetInnerHTML={{ __html: user.description }} />
        </div>
      </div>
    </footer>
  );
}
