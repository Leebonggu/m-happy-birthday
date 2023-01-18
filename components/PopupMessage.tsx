import React from 'react';
import { animated, useSpring } from '@react-spring/web';
import { useInfiniteSpring } from '../lib/hooks';

function PopupMessage() {
  const { props } = useInfiniteSpring();

  return (
    <div className='fixed w-screen h-screen bg-slate-400 flex justify-center items-center z-50 opacity-80'>
      <div className=' w-60 h-80 border-2 bg-black opacity-80 rounded-2xl flex justify-center items-center'>
        <div className='text-white font-bold'>
          <div className='text-center'>Mouse Scroll</div>
          <animated.div style={props} className='text-xl text-center pt-2'>
            ⬇︎
          </animated.div>
        </div>
      </div>
    </div>
  );
}

export default PopupMessage;
