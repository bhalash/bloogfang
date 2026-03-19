import Link from 'next/link';
import { SiteMeta, fetchSiteMeta } from '@/lib/api';
import { Separator } from '@/lib/components';

export async function SiteFooter() {
  const meta: SiteMeta = await fetchSiteMeta();

  return (
    <footer className='mb-6'>
      <Separator />
      <Link className='block text-center p-6' href='/'>
        {meta.name}
      </Link>
    </footer>
  );
}
