import React from 'react';
import Candle from './Candle';
import Circle from './Circle';
import Gift from './Gift';
import { useInfiniteSpring } from '../lib/hooks';
// import { animated } from '@react-spring/web';
import Image from 'next/image';

function Cake({ gift }: { gift?: boolean; message?: string }) {
  const { props } = useInfiniteSpring();

  return (
    <div className='flex flex-col justify-center items-center mt-10'>
      {gift ? <Gift /> : <Candle />}
      <div className='w-[250px] h-[100px] bg-gray-100 overflow-hidden relative rounded-sm'>
        <Circle count={6} />
      </div>
      <div className='w-[350px] h-[100px] bg-gray-100 overflow-hidden relative rounded-sm'>
        <Circle count={8} />
        <div className='w-full flex justify-center mt-6'>
          <Image src='/ceo2.png' width={80} height={80} alt='ceo' />
        </div>
      </div>
      <div className='w-[450px] h-[100px] bg-gray-100 overflow-hidden relative rounded-sm'>
        <Circle count={10} />
      </div>
      {/* <animated.div style={props} className='text-2xl pt-10'>
        마우스를 내리면서 초를 부세요~
      </animated.div> */}
    </div>
  );
}

export default Cake;
