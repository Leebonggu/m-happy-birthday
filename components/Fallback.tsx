import React from 'react';

function Fallback() {
  return (
    <div>
      <div className='bg-black fixed h-screen w-screen opacity-50' />
      <div className='flex justify-center items-center w-screen h-screen fixed z-10 text-white font-bold text-4xl'>
        공사중....
      </div>
    </div>
  );
}

export default Fallback;
