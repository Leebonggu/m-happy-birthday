import { useState, useEffect, useCallback } from 'react';

function useScroll() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeScroll, setActiveScroll] = useState(false);

  const handler = useCallback(() => {
    setScrollPosition(window.pageYOffset);
  }, []);

  const activeHandler = useCallback(() => {
    setActiveScroll(true);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handler);
    window.addEventListener('scroll', activeHandler);
    return () => {
      window.removeEventListener('scroll', handler);
      window.removeEventListener('scroll', activeHandler);
    };
  }, [handler, activeHandler]);

  return {
    scrollPosition,
    activeScroll,
  };
}

export default useScroll;
