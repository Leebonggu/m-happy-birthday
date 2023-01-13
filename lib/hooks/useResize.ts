import { useState, useEffect, useCallback } from 'react';

function useResize() {
  const [maxScrollValue, setMaxScrollValue] = useState(0);

  const handler = useCallback(() => {
    setMaxScrollValue(window.document.body.offsetHeight - window.innerHeight);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, [handler]);

  useEffect(() => {
    setMaxScrollValue(window.document.body.offsetHeight - window.innerHeight);
  }, []);

  return {
    maxScrollValue,
  };
}

export default useResize;
