import { useState } from 'react';
import Button from '../components/Button';
import Cake from '../components/Cake';
import Card from '../components/Card';

export default function Home({ data }: any) {
  const [gift, setGift] = useState(false);
  const handleGift = () => {
    setGift(true);
  };
  return (
    <div className='w-full h-screen flex justify-center items-center bg-navy-100'>
      <div className='flex flex-col'>
        <Card name={data.name} message={data.message} />
        <Cake gift={gift} />
        {!gift ? <Button onClick={handleGift} /> : null}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(
    'https://6iwnip9feh.execute-api.ap-northeast-2.amazonaws.com/hodeug',
  );
  const { data } = await res.json();
  return {
    props: { data }, // will be passed to the page component as props
  };
}
