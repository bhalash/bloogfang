import Link from 'next/link';
import { User, Post, fetchUser } from '@/lib/api';

export async function ShortPost({ post }: { post: Post }) {
  const user: User | undefined = await fetchUser(post.author);

  return (
    <article>
      <Link href={`/posts/${post.id}`}>
        <h3 className='font-bold text-3xl'>
          {post.title.rendered}
        </h3>
        {
          user && <>
            <h4>
              by {user.name}
            </h4>
          </>
        }
      </Link>
      <main
        className={post.class_list.join(' ')}
        dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
      />
    </article>
  );
}

export function FullPost({ post }: { post: Post }) {
  return (
    <article>
      <h1 className='font-bold text-5xl'>
        {post.title.rendered}
      </h1>
      <main
        className={post.class_list.join(' ')}
        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
      />
    </article>
  );
}
