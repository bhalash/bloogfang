import { Post, fetchPosts } from '@/lib/api';
import { Pagination, ShortPost } from '@/lib/components';

export default async function Home() {
  const posts: Post[] = await fetchPosts();

  return (
    <>
      <div className='flex flex-col gap-4 max-w-5xl'>
        {posts.map((post) => <ShortPost key={post.id} post={post} />)}
      </div>
      <Pagination />
    </>
  );
}
