import Link from 'next/link';
import { Post } from '@/lib/api';

import { PostDate } from './post-date';

export type Props = { post: Post };

export async function ShortPost({ post }: Props) {
  return (
    <article className={post.class_list.join(' ')} id={`post-${post.id}`}>
      <header className='text-center'>
        <Link href={`/posts/${post.slug}`}>
          <PostDate post={post} />
          <h1
            className='font-bold text-3xl'
            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
          />
        </Link>
      </header>
    </article>
  );
}
