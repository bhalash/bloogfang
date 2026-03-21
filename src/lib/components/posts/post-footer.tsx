import Image from 'next/image';
import { User, Post, fetchUser } from '@/lib/api';

export type Props = { post: Post };

export async function PostFooter({ post }: Props) {
  const user: User | undefined = await fetchUser(post.author);

  if (!user) {
    return null;
  }

  const bio = user.description
    .split('\r\n')
    .filter(Boolean)
    .map((text) => <p key={text}>{text}</p>);

  return (
    <footer className='post-footer p-8 mt-4 mb-4 max-w-4xl skew-backward rounded-lg drop-shadow-lg'>
      <div className='flex justify-center gap-4 skew-forward'>
        <figure className='mt-4'>
          <Image
            className='rounded-lg'
            alt={user.name}
            src={user.avatar_urls['96']}
            width={96}
            height={96}
          />
        </figure>
        <div className='gap-3 flex flex-col'>
          <h4 className='font-bold text-3xl'>{user.name}</h4>
          {bio}
        </div>
      </div>
    </footer>
  );
}
