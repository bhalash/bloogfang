import Link from 'next/link';
import { SiteMeta, fetchSiteMeta } from '@/lib/api';

import '@/styles/header.scss';

export async function SiteHeader() {
  const meta: SiteMeta = await fetchSiteMeta();

  return (
    <h1 className='cool-drop font-bold text-4xl text-center mt-4 mb-4'>
      <Link href='/'>
        {meta.name}
      </Link>
    </h1>
  );
}
