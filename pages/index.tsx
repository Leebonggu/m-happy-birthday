import { useState } from 'react';
import Button from '../components/Button';
import Cake from '../components/Cake';
import Card from '../components/Card';

export default function Home() {
  const [gift, setGift] = useState(false);
  const handleGift = () => {
    setGift(true);
  };
  return (
    <div className='w-full h-screen flex justify-center items-center bg-navy-100'>
      <div className='flex flex-col'>
        <Card name='호득' />
        <Cake gift={gift} />
        {!gift ? <Button onClick={handleGift} /> : null}
      </div>
    </div>
  );
}
