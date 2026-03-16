import Link from 'next/link';

import '@/styles/pagination.css';

interface Props {
  page?: number;
}

export function Pagination({ page = 1 }: Props) {
  const previousPage = Math.min(page - 1, 2);
  const nextPage = page + 1;

  return (
    <nav className='pagination'>
      <Link
        className={page < 2 && 'disabled pagination-item' || 'pagination-item'}
        href='/'
       >
        <span className='material-symbols-outlined'>home</span>
      </Link>

      <Link
        className={page < 2 && 'disabled pagination-item' || 'pagination-item'}
        href={`/page/${previousPage}`}
      >
        <span className='material-symbols-outlined'>arrow_back</span>
      </Link>

      <Link className='pagination-item' href={`/page/${nextPage}`}>
        <span className='material-symbols-outlined'>arrow_forward</span>
      </Link>
    </nav>
  );
}
