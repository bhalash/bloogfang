import Link from 'next/link';

interface Props {
  page?: number;
}

export function Pagination({ page = 1 }: Props) {
  const previousPage = Math.min(page - 1, 2);
  const nextPage = page + 1;

  return (
    <>
      {
        page > 1 && <Link href={`/page/${previousPage}`}>Previous</Link>
      }
      <Link href={`/page/${nextPage}`}>
        Next
      </Link>
    </>
  );

}
