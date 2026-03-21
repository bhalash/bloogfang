import { Metadata } from 'next';
import { Post, SiteMeta, Tag, fetchSiteMeta, findPost, queryTags } from '@/lib/api';
import { PostArticle } from '@/lib/components/posts';
import { notFound } from 'next/navigation';

interface Props {
  params: Promise<{ slug: string; }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post: Post | undefined = await findPost(slug);

  if (!post) {
    notFound();
  }

  const meta: SiteMeta = await fetchSiteMeta();
  const tags: Tag[] = await queryTags({ include: post.tags });
  const keywords = tags.map(({ name }) => name);

  return {
    title: post.title.rendered,
    description: post.excerpt.rendered,
    keywords,
    openGraph: {
      title: post.title.rendered,
      description: post.excerpt.rendered,
      siteName: meta.name,
      type: 'article',
    }
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post: Post | undefined = await findPost(slug);

  if (!post) {
    return notFound();
  }

  return (
    <PostArticle post={post} />
  );
}
