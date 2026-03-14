import { Metadata } from 'next';
import { Pagination, ShortPost } from '@/lib/components';
import { Post, SiteMeta, fetchPosts, fetchSiteMeta } from '@/lib/api';

export async function generateMetadata(): Promise<Metadata> {
  const meta: SiteMeta = await fetchSiteMeta();

  return {
    title: meta.name,
    description: meta.description,
  };
}

export default async function Home() {
  const meta: SiteMeta = await fetchSiteMeta();
  const posts: Post[] = await fetchPosts();

  return (
    <>
      <h1 className='font-bold text-5xl'>
        {meta.name}
      </h1>
      <h3 className='text-2xl'>
        {meta.description}
      </h3>
      <div className='flex flex-col gap-4 max-w-5xl'>
        {posts.map((post) => <ShortPost key={post.slug} post={post} />)}
      </div>
      <Pagination />
    </>
  );
}
