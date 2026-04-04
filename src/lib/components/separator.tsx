import '@/styles/separator.css';

export type Props = {
  skew?: 'forward' | 'backward'
};

export function Separator({ skew = 'forward' }: Props = {}) {
  const skewClass = `skew-${skew}`;
  console.log(skew, skewClass);
  return <hr className={`skew-separator h-1 my-6 w-full ${skewClass}`} />;
}
