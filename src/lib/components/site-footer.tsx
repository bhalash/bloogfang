import Link from 'next/link';
import { SiteMeta, fetchSiteMeta } from '@/lib/api';

export async function SiteFooter() {
  const meta: SiteMeta = await fetchSiteMeta();

  return (
    <footer className='mb-6 skew-backward rounded-lg' style={{ background: 'black' }}>
      <Link className='block text-center text-sm skew-forward p-6' href='/'>
        {meta.name}
      </Link>
    </footer>
  );
}
