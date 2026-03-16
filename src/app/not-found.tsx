import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404: Not Found :[',
  description: 'Sorrrrryyyy',
};

export default function PageNotFound() {
  return <h1>404: Not Found :[</h1>;
}
