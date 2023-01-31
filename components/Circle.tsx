import React from 'react';
import { cls } from './Gift';
cls;

function Circle({ count, bgImage }: { count: number; bgImage?: boolean }) {
  return (
    <div className='absolute top-[-20px] flex'>
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className={cls('w-[50px] h-[50px] rounded-full bg-pink-300')}
        />
      ))}
    </div>
  );
}

export default Circle;
