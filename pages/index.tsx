import dynamic from 'next/dynamic';
import Card from '../components/Card';
import Gift from '../components/Gift';
import Cake from '../components/Cake';
import CountdownTimer from '../components/ChaClock';

const Party = dynamic(() => import('../components/Firework'), {
  ssr: false,
});

export default function Home() {
  const dev = process.env.NODE_ENV === 'development';
  return (
    <div className='w-screen flex justify-center items-center'>
      {/* {dev ? 'Dev' : 'Prod'}
      <Party />
      <div className='fixed top-11 text-white flex justify-center items-center flex-col'>
        <Card name='경호' />
        <Gift />
        <Cake />
      </div> */}
      <CountdownTimer />
    </div>
  );
}
