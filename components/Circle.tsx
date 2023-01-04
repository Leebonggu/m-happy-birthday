import React from 'react';

function Circle({ count }: { count: number }) {
  return (
    <div className='absolute top-[-20px] flex'>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className='w-[50px] h-[50px] rounded-full bg-pink-300' />
      ))}
    </div>
  );
}

export default Circle;
