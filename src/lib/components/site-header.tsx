import Link from 'next/link';
import { SiteMeta, fetchSiteMeta } from '@/lib/api';

import '@/styles/header.css';

export async function SiteHeader() {
  const meta: SiteMeta = await fetchSiteMeta();

  return (
    <h1 className='cool-drop font-bold text-4xl text-center mt-8 mb-12'>
      <Link href='/'>
        {meta.name}
      </Link>
    </h1>
  );
}
