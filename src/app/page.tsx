import { Pagination, ShortPost } from '@/lib/components';
import { Post, queryPosts } from '@/lib/api';

export default async function Home() {
  const posts: Post[] = await queryPosts();

  return (
    <>
      <section className='flex flex-col gap-6 max-w-5xl'>
        {posts.map((post) => <ShortPost key={post.slug} post={post} />)}
      </section>
      <Pagination />
    </>
  );
}
