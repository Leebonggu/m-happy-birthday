import React, { useEffect, useRef, useState } from 'react';

function Firework() {
  const canvas = useRef<HTMLCanvasElement>(null);
  const fps = 60;
  const interval = 1000 / fps;

  const [now, setNow] = useState(0);
  const [delta, setDelta] = useState(0);
  const [then, setThen] = useState(Date.now());

  const canvasWidth = window?.innerWidth;
  const canvasHeight = window?.innerHeight;

  useEffect(() => {
    function render() {
      requestAnimationFrame(render);
      setNow(Date.now());
      setDelta(now - then);
      if (delta < interval) return;

      setThen(now - (delta % interval));
    }

    if (canvas.current) {
      const ctx = canvas.current.getContext('2d');
      const dpr = window.devicePixelRatio;

      canvas.current.width = canvasWidth * dpr;
      canvas.current.height = canvasHeight * dpr;
      ctx?.scale(dpr, dpr);

      canvas.current.style.width = canvasWidth + 'px';
      canvas.current.style.height = canvasHeight + 'px';

      render();

      ctx?.fillRect(100, 100, 200, 200);
    }
  }, [canvasHeight, canvasWidth, delta, interval, now, then]);

  return <canvas ref={canvas}>Firework</canvas>;
}

export default Firework;
