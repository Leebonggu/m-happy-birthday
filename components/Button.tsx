import React from 'react';

function Button({ onClick }: { onClick: () => void }) {
  return (
    <div className='mt-10'>
      <button
        onClick={onClick}
        type='button'
        className='flex max-w-sm w-full bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-500 hover:from-indigo-600 hover:via-pink-600 hover:to-red-600 focus:outline-none text-white text-2xl uppercase font-bold shadow-md rounded-lg mx-auto p-5'
      >
        <div className='w-full flex-1 pt-1.5 text-center'>촛불끄기</div>
      </button>
    </div>
  );
}

export default Button;
