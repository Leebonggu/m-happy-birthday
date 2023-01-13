import dynamic from 'next/dynamic';
import { useResize, useScroll } from '../lib/hooks';
import PopupMessage from '../components/PopupMessage';

const Travel = dynamic(() => import('../components/Travel'), { ssr: false });
const ProgressBar = dynamic(() => import('../components/ProgressBar'), {
  ssr: false,
});

export default function Home() {
  const { scrollPosition, activeScroll } = useScroll();
  const { maxScrollValue } = useResize();

  return (
    <>
      {!activeScroll ? <PopupMessage /> : null}
      <ProgressBar scrollPositionRatio={scrollPosition / maxScrollValue} />
      <Travel scrollPositionRatio={scrollPosition / maxScrollValue} />
    </>
  );
}
