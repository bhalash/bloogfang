import { redirect } from 'next/navigation';

export default async function PageIndex() {
  redirect('/page/1');
}
