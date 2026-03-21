import { Post } from '@/lib/api';
import { Separator } from '@/lib/components';

import { PostDate } from './post-date';

export type Props = { post: Post };

export function PostHeader({ post }: Props) {
  return (
    <header className='post-header rounded-lg drop-shadow-lg'>
      <div className='skew-forward text-center'>
        <h1
          className='font-bold text-4xl mb-2'
          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
        />
        <PostDate post={post} />
      </div>
      <Separator />
    </header>
  );
}
