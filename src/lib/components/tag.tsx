import Link from 'next/link';
import { Tag, Post, queryTags } from '@/lib/api';

export async function PostTags({ post }: { post: Post }) {
  const tags: Tag[] = await queryTags({ include: post.tags });

  if (!tags.length) {
    return null;
  }

  return (
    <section>
      <h4 className="font-bold text-2xl">
        Post Tags:
      </h4>

      <ul>
        {
          tags.map((tag) => (
            <li key={tag.id}>
              <Link href={`/tags/${tag.slug}`}>
                {tag.name}
              </Link>
            </li>
          ))
        }
      </ul>
    </section>
  );
}
