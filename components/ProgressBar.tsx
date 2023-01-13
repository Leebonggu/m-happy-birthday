import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  z-index: 100;
`;

const Bar = styled.div<{ currentWidth: number }>`
  height: 100%;
  width: ${(props) => `${props.currentWidth}%`};
`;

function ScrollProgressBar({
  scrollPositionRatio,
}: {
  scrollPositionRatio: number;
}) {
  console.log(scrollPositionRatio * 100);

  return (
    <Container className='bg-slate-700 fixed left-0 top-0 w-full h-[5px]'>
      <Bar className='bg-teal-400' currentWidth={scrollPositionRatio * 100} />
    </Container>
  );
}

export default ScrollProgressBar;
