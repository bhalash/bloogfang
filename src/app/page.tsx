import { Pagination, ShortPost } from '@/lib/components';
import { Post, fetchPosts } from '@/lib/api';

export default async function Home() {
  const posts: Post[] = await fetchPosts();

  return (
    <>
      <section className='flex flex-col gap-6 max-w-5xl'>
        {posts.map((post) => <ShortPost key={post.slug} post={post} />)}
      </section>
      <Pagination />
    </>
  );
}
