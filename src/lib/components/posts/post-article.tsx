import { PostBody, } from './post-body';
import { PostFooter } from './post-footer';
import { PostHeader } from './post-header';
import { Post } from '@/lib/api';

export type Props = { post: Post };

export function PostArticle({ post }: Props) {
  return (
    <article className='post max-w-3xl p-4' id={`post-${post.id}`}>
      <PostHeader post={post} />
      <PostBody post={post} />
      <PostFooter post={post} />
    </article>
  );
}
