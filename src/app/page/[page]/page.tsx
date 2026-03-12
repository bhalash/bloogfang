import { Post, fetchPosts } from '@/lib/api';
import { Pagination, ShortPost } from '@/lib/components';

interface Props {
  params: Promise<{ page: string; }>;
}

export default async function PostPage({ params }: Props) {
  const props = await params;
  const page = Number(props?.page || 1);

  const posts: Post[] = await fetchPosts({ page });

  return (
    <>
      <div className='flex flex-col gap-4 max-w-5xl'>
        {posts.map((post) => <ShortPost key={post.id} post={post} />)}
      </div>
      <Pagination page={page} />
    </>
  );
}
