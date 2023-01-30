import dynamic from 'next/dynamic';
const FireWork = dynamic(() => import('../components/Firework'), { ssr: true });

export default function Home() {
  return (
    <>
      <FireWork />
    </>
  );
}
