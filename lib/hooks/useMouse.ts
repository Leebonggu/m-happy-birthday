import { useState, useEffect, useCallback } from 'react';

function useMouse() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const handler = useCallback((e: MouseEvent) => {
    const { clientX, clientY } = e;
    const x = -1 + (clientX / window.innerWidth) * 2;
    const y = 1 - (clientY / window.innerHeight) * 2;
    setPosition((prev) => ({ ...prev, x, y }));
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handler);

    return () => window.removeEventListener('mousemove', handler);
  }, [handler]);

  return position;
}

export default useMouse;
