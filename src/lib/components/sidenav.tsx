import Link from 'next/link';

export interface SidenavItem {
  href: string;
  text: string;
}

export function SidenavItem({ href, text }: SidenavItem) {
  return (
    <Link href={href}>
      {text}
    </Link>
  );
}

export function Sidenav() {
  return (
    <nav className='flex flex-col'>
      <SidenavItem href='/' text='Home' />
    </nav>
  );
}
