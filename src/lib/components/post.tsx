import Link from 'next/link';
import { Post } from '@/lib/api';
import { formatISO } from 'date-fns';
import { parse } from 'node-html-parser';

import '@/styles/post.scss';

export type Props = { post: Post };

/**
 * Strip <br/> tags rendered inside <figure>.
 *
 * As part of its rendereing pass, WordPress inserts <br> tags after standalone
 * inline elements, and these mess up styling. There's a *lot* of legacy
 * content in the target blog which has such elements, so this is needed.
 */
export function stripFigureBreaks(content: string): string {
  const root = parse(content);
  root.querySelectorAll('figure br').forEach((e) => e.remove());
  return root.innerHTML;
}

export function repalceArchiveLinks(content: string): string {
  return content.replace(/\/archives/g, '/posts');
}

export function renderContent({ post }: Props): string {
  return repalceArchiveLinks(stripFigureBreaks(post.content.rendered));
}

export function PostDate({ post }: Props) {
  return (
    <time className='block' dateTime={post.date}>
      {formatISO(post.date, { representation: 'date' })}
    </time>
  );
}

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

export function FullPost({ post }: Props) {
  return (
    <article className={post.class_list.join(' ')} id={`post-${post.id}`}>
      <header className='text-center'>
        <PostDate post={post} />
        <h1
          className='font-bold text-5xl mb-4'
          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
        />
      </header>
      <main dangerouslySetInnerHTML={{ __html: renderContent({ post }) }} />
    </article>
  );
}
