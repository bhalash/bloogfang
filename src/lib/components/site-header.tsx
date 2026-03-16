import Link from 'next/link';
import { SiteMeta, fetchSiteMeta } from '@/lib/api';

import '@/styles/header.css';

export async function SiteHeader() {
  const meta: SiteMeta = await fetchSiteMeta();

  return (
    <header className='text-center'>
      <h1 className='font-bold text-4xl'>
        <Link className='block skew-drop pt-20 pb-20' href='/'>
          {meta.name}
        </Link>
      </h1>
    </header>
  );
}
