import Head from 'next/head';
import { FullPost, PostTags, UserInfo } from '@/lib/components';
import { Post, fetchPostBySlug } from '@/lib/api';
import { notFound } from 'next/navigation';

interface Props {
  params: Promise<{ slug: string; }>;
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
