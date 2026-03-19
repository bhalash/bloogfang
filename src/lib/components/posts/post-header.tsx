import { Post } from '@/lib/api';
import { Separator } from '@/lib/components';

import { PostDate } from './post-date';

export type Props = { post: Post };

export async function PostHeader({ post }: Props) {
  return (
    <header className='text-center'>
      <h1
        className='font-bold text-4xl mb-4'
        dangerouslySetInnerHTML={{ __html: post.title.rendered }}
      />
      <Separator />
      <PostDate post={post} />
    </header>
  );
}
