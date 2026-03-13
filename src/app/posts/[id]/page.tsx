import Head from 'next/head';
import { FullPost, PostTags, UserInfo } from '@/lib/components';
import { Post, fetchPost } from '@/lib/api';
import { notFound } from 'next/navigation';

interface Props {
  params: Promise<{ id: number }>;
}

export default async function PostPage({ params }: Props) {
  const { id } = await params;

  const post: Post | undefined = await fetchPost(id);

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
