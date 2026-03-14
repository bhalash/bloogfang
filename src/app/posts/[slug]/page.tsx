import Head from 'next/head';
import { FullPost, PostTags, UserInfo } from '@/lib/components';
import { Metadata } from 'next';
import { Post, fetchPostBySlug } from '@/lib/api';
import { notFound } from 'next/navigation';

interface Props {
  params: Promise<{ slug: string; }>;
}

export async function generateMetadata({ params }: Props ): Promise<Metadata> {
  const { slug } = await params;
  const post: Post | undefined = await fetchPostBySlug(slug);

  return {
    title: post?.title.rendered,
    description: post?.excerpt.rendered,
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;

  const post: Post | undefined = await fetchPostBySlug(slug);

  if (!post) {
    return notFound();
  }

  return (
    <>
      <Head>
        <title>{post.title.rendered}</title>
      </Head>
      <FullPost post={post} />
      <UserInfo post={post} />
      <PostTags post={post} />
    </>
  );
}
