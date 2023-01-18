import React from 'react';
import Candle from './Candle';
import Circle from './Circle';
import Gift from './Gift';
import { useInfiniteSpring } from '../lib/hooks';
import { animated } from '@react-spring/web';

function Cake({ gift }: { gift?: boolean; message?: string }) {
  const { props } = useInfiniteSpring();

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
      <animated.div style={props} className='text-2xl pt-10'>
        마우스를 내리면서 초를 부세요~
      </animated.div>
    </div>
  );
}

export default Cake;
