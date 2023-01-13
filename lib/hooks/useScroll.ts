import { useState, useEffect, useCallback } from 'react';

function useScroll() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handler = useCallback(() => {
    setScrollPosition(window.pageYOffset);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, [handler]);

  return {
    scrollPosition,
  };
}

export default useScroll;
