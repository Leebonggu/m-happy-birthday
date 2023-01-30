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
      <div
        style={{
          height: '500vh',
          minHeight: '100%',
          background: '#fff000',
        }}
      >
        {!activeScroll ? <PopupMessage /> : null}
        <ProgressBar scrollPositionRatio={scrollPosition / maxScrollValue} />
        <Travel scrollPositionRatio={scrollPosition / maxScrollValue} />
      </div>
    </>
  );
}
