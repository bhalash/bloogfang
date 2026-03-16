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
      <section className='flex flex-col gap-8 max-w-5xl'>
        {posts.map((post) => <ShortPost key={post.slug} post={post} />)}
      </section>
      <Pagination page={page} />
    </>
  );
}
