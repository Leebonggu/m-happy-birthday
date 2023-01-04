import React from 'react';
import styled, { keyframes } from 'styled-components';

const Flame = styled.div`
  width: 50px;
  aspect-ratio: 1;
  background: radial-gradient(
      100% 100% at 90% 90%,
      #251c27,
      #251c2733 10%,
      #251c2700 50%
    ),
    radial-gradient(farthest-side at 110% 120%, #251c27, #631, #cb6c3b88, #0000),
    radial-gradient(at 100% 100%, #fc08, #cb6c3b, #eebd7600 60%),
    linear-gradient(135deg, #fff0 80%, #ff0);
  background-color: #ffe;
  border-radius: 2% 87% 45% 85%;
  box-shadow: inset 10px 10px 10px -1.5px #f808,
    inset -1px -1px 2px -2px #251c27, inset -1px -1px 3px -1px #251c27,
    inset -1px -1px 2px #fc08, -0.5px -0.5px 1px #ff08, -1px -1px 2px #ce8c47,
    -2px -2px 10px 1px #251c27, -6px -6px 35px 3px #fa06;
  filter: blur(0.1px);
  transform: rotate(45deg);
`;

function Candle() {
  return (
    <div className='w-5 h-40 flex flex-col items-center'>
      <Flame />
      <div className='w-full h-full bg-red-500 flex flex-col justify-evenly'>
        <div className='w-full h-1 bg-white top-2 rotate-45'></div>
        <div className='w-full h-1 bg-white top-2 rotate-45'></div>
        <div className='w-full h-1 bg-white top-2 rotate-45'></div>
        <div className='w-full h-1 bg-white top-2 rotate-45'></div>
      </div>
    </div>
  );
}

export default Candle;
