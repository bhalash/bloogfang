import Image from 'next/image';
import { Author, Post, fetchAuthor } from '@/lib/api';

export async function AuthorInfo({ post }: { post: Post }) {
  const author: Author | undefined = await fetchAuthor(post.author);

  if (!author) {
    return null;
  }

  return (
    <div>
      <h4>{author.name}</h4>
      <p>{author.description}</p>
      <Image
        alt={author.name}
        src={author.avatar_urls['48']}
        width={50}
        height={50}
      />
    </div>
  );
}
