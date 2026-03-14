import Link from 'next/link';
import { User, Post, fetchUser } from '@/lib/api';

export function renderClasses(post: Post): string {
  return post.class_list.join(' ');
}

export async function ShortPost({ post }: { post: Post }) {
  const user: User | undefined = await fetchUser(post.author);

  return (
    <article>
      <Link href={`/posts/${post.slug}`}>
        <h2
          className='font-bold text-3xl'
          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
        />

        {
          user && <>
            <h4>
              by {user.name}
            </h4>
          </>
        }
      </Link>
      <main
        className={renderClasses(post)}
        dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
      />
    </article>
  );
}

export function FullPost({ post }: { post: Post }) {
  return (
    <article>
      <h1
        className='font-bold text-5xl'
        dangerouslySetInnerHTML={{ __html: post.title.rendered }}
      />
      <main
        className={renderClasses(post)}
        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
      />
    </article>
  );
}
