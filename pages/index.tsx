import dynamic from 'next/dynamic';
import Card from '../components/Card';
import Gift from '../components/Gift';
import Cake from '../components/Cake';

const Party = dynamic(() => import('../components/Firework'), {
  ssr: false,
});

export default function Home() {
  return (
    <div className='w-screen flex justify-center items-center'>
      <Party />
      <div className='fixed top-11 text-white flex justify-center items-center flex-col'>
        <Card name='경호' />
        <Gift />
        <Cake />
      </div>
    </div>
  );
}
