import React from 'react';
import Candle from './Candle';
import Circle from './Circle';
import Gift from './Gift';

function Cake({ gift }: { gift: boolean }) {
  return (
    <div className='flex flex-col justify-center items-center mt-10'>
      {gift ? <Gift /> : <Candle />}
      <div className='w-[300px] h-[120px] bg-gray-100 overflow-hidden relative rounded-sm'>
        <Circle count={6} />
      </div>
      <div className='w-[400px] h-[120px] bg-gray-100 overflow-hidden relative rounded-sm'>
        <Circle count={8} />
      </div>
      <div className='w-[500px] h-[120px] bg-gray-100 overflow-hidden relative rounded-sm'>
        <Circle count={10} />
      </div>
    </div>
  );
}

export default Cake;
