import Head from 'next/head';
import { Metadata } from 'next';
import { Post, findPost } from '@/lib/api';
import { PostBody, PostFooter, PostHeader } from '@/lib/components/posts';
import { notFound } from 'next/navigation';

interface Props {
  params: Promise<{ slug: string; }>;
}

export async function generateMetadata({ params }: Props ): Promise<Metadata> {
  const { slug } = await params;
  const post: Post | undefined = await findPost(slug);

  return {
    title: post?.title.rendered,
    description: post?.excerpt.rendered,
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post: Post | undefined = await findPost(slug);

  if (!post) {
    return notFound();
  }

  return (
    <>
      <Head>
        <title>{post.title.rendered}</title>
      </Head>
      <article className='post max-w-4xl flex flex-col gap-6 items-center' id={`post-${post.id}`}>
        <PostHeader post={post} />
        <PostBody post={post} />
        <PostFooter post={post} />
      </article>
    </>
  );
}
