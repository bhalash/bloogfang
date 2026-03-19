import { Post } from '@/lib/api';
import { formatISO } from 'date-fns';

export type Props = { post: Post };

export function PostDate({ post }: Props) {
  return (
    <time dateTime={post.date}>
      {formatISO(post.date, { representation: 'date' })}
    </time>
  );
}
