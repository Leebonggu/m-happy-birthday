import { useSpring } from '@react-spring/web';
import React from 'react';

function useInfiniteSpring() {
  const [props, api] = useSpring(
    () => ({
      from: { y: 0 },
      to: { y: 5 },
      loop: {
        reverse: true,
      },
    }),
    [],
  );

  return { props, api };
}

export default useInfiniteSpring;
