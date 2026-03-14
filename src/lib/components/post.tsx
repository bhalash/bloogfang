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
        className={renderClasses(post)}
        dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
      />
    </article>
  );
}

export function FullPost({ post }: { post: Post }) {
  return (
    <article>
      <h3 className='font-bold text-5xl'>
        {post.title.rendered}
      </h3>
      <main
        className={renderClasses(post)}
        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
      />
    </article>
  );
}
