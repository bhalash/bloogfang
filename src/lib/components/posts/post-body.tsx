import { Post } from '@/lib/api';
import { parse } from 'node-html-parser';

import '@/styles/post-body.css';

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

export function renderContent(content: string): string {
  return repalceArchiveLinks(stripFigureBreaks(content));
}

export function PostBody({ post }: Props) {
  return (
    <main
      className='clear-both overflow-auto text-lg'
      dangerouslySetInnerHTML={{ __html: renderContent(post.content.rendered) }}
    />
  );
}
