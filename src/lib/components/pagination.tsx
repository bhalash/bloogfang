import Link from 'next/link';

import '@/styles/pagination.css';

interface Props {
  page?: number;
}

export function Pagination({ page = 1 }: Props) {
  const previousPage = Math.min(page - 1, 2);
  const nextPage = page + 1;

  return (
    <footer>
      <nav className='pagination'>
        <Link
          className={page < 2 && 'disabled' || ''}
          href='/'>
          <span className='material-symbols-outlined' style={{ fontSize: 48 }}>home</span>
        </Link>

        <Link
          className={page < 2 && 'disabled' || ''}
          href={`/page/${previousPage}`}
        >
          <span className='material-symbols-outlined' style={{ fontSize: 48 }}>arrow_back</span>
        </Link>

        <Link href={`/page/${nextPage}`}>
          <span className='material-symbols-outlined' style={{ fontSize: 48 }}>arrow_forward</span>
        </Link>
      </nav>
    </footer>
  );
}
