import { Pagination } from '@/lib/components';
import { Post, queryPosts } from '@/lib/api';
import { ShortPost } from '@/lib/components/posts';

interface Props {
  params: Promise<{ page: string; }>;
}

export default async function PostPage({ params }: Props) {
  const props = await params;
  const page = Number(props?.page || 1);
  const posts: Post[] = await queryPosts({ page });

  return (
    <>
      <section className='flex flex-col gap-8 max-w-5xl'>
        {posts.map((post) => <ShortPost key={post.slug} post={post} />)}
      </section>
      <Pagination page={page} />
    </>
  );
}
