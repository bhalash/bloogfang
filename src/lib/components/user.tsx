import Image from 'next/image';
import { User, Post, fetchUser } from '@/lib/api';

import '@/styles/user.css';

/**
 * Wordpress sends down the bio as a plain block of text. This is a Good Enough
 * ghetto rendering.
 */
export function renderUserBio(bio: string) {
  return bio
    .split('\n')
    .filter(text => !!text.trim())
    .map(text => (
      <p
        key={text} dangerouslySetInnerHTML={{  __html: text }}
      />
    ));
}

export async function UserInfo({ post }: { post: Post }) {
  const user: User | undefined = await fetchUser(post.author);

  if (!user) {
    return null;
  }

  return (
    <footer className='user-footer p-8 mt-4 mb-4 max-w-4xl'>
      <div className='inner flex justify-center gap-4'>
        <figure className='mt-4'>
          <Image
            alt={user.name}
            src={user.avatar_urls['96']}
            width={96}
            height={96}
          />
        </figure>
        <div className='bio gap-3 flex flex-col'>
          <h4 className='font-bold text-3xl'>{user.name}</h4>
          {renderUserBio(user.description)}
        </div>
      </div>
    </footer>
  );
}
