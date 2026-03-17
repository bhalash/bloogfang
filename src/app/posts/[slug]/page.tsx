import Head from 'next/head';
import { FullPost } from '@/lib/components';
import { Metadata } from 'next';
import { Post, findPost } from '@/lib/api';
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
      <FullPost post={post} />
    </>
  );
}
