import { SiteMeta, fetchSiteMeta } from '@/lib/api';

export async function SiteFooter() {
  const meta: SiteMeta = await fetchSiteMeta();

  return (
    <footer className='text-center p-2'>
      <small>{meta.name}</small>
    </footer>
  );
}
