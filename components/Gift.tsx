import React, { memo, useEffect, useState } from 'react';
import { createLottoNumbers } from '../lib';

export function cls(...classnames: string[]) {
  return classnames.join(' ');
}

function Gift() {
  const [giftNumber, setGiftNumber] = useState<number[]>([]);
  const createRandomNumber = () => {
    const index = Math.floor(Math.random() * 10);

    return [
      'bg-red-500',
      'bg-orange-500',
      'bg-emerald-500',
      'bg-teal-500',
      'bg-cyan-500',
      'bg-blue-500',
      'bg-indigo-500',
      'bg-purple-500',
      'bg-pink-500',
      'bg-rose-500',
    ][index];
  };

  useEffect(() => {
    const [numbers] = createLottoNumbers(1);
    setGiftNumber(numbers.sort((a, b) => a - b));
  }, []);

  return (
    <div className='w-full flex flex-col items-center justify-center '>
      {/* <div className='text-2xl font-bold'>부자되세요^^</div> */}
      <div className='w-full flex  items-center justify-center gap-2'>
        {giftNumber.map((number, key) => {
          const randomColor = createRandomNumber();

          return (
            <div
              key={key}
              className={cls(
                `w-16 h-16 text-2xl text-white rounded-full flex justify-center items-center`,
                randomColor,
              )}
            >
              {number}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default memo(Gift);
