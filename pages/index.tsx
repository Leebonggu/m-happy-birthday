import dynamic from 'next/dynamic';
import { useResize, useScroll } from '../lib/hooks';

const Travel = dynamic(() => import('../components/Travel'), { ssr: false });
const ProgressBar = dynamic(() => import('../components/ProgressBar'), {
  ssr: false,
});

export default function Home() {
  const { scrollPosition } = useScroll();
  const { maxScrollValue } = useResize();

  return (
    <>
      <ProgressBar scrollPositionRatio={scrollPosition / maxScrollValue} />
      <Travel scrollPositionRatio={scrollPosition / maxScrollValue} />
    </>
  );
}
