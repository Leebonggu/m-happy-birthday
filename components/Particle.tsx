import React, { useEffect, useRef, useState } from 'react';
import useWindowSize from '../lib/hooks/useWindowSize';
import useCanvas from '../lib/hooks/useCanvas';

const randomNumBetween = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};

function getParticle(
  ctx: CanvasRenderingContext2D | null,
  x: number,
  y: number,
) {
  ctx?.beginPath();
  ctx?.arc(x, y, 10, 0, Math.PI * 2);
  ctx?.fill();
  if (ctx) {
    ctx.fillStyle = '#fff';
  }
  ctx?.closePath();
}

function Particle() {
  const canvas = useRef<HTMLCanvasElement>(null);
  const fps = 60;
  const interval = 1000 / fps;

  const [now, setNow] = useState(0);
  const [delta, setDelta] = useState(0);
  const [then, setThen] = useState(Date.now());
  const [x, setX] = useState(randomNumBetween(10, 1000));
  const [y, setY] = useState(randomNumBetween(10, 1000));

  const [canvasWidth, canvasHeight] = useWindowSize();

  const update = () => {
    setX(randomNumBetween(10, 1000));
    setY(randomNumBetween(10, 1000));
  };

  useEffect(() => {
    const render = () => {
      requestAnimationFrame(render);

      setNow(Date.now());
      setDelta(now - then);
      if (delta < interval) return;

      setThen(now - (delta % interval));
    };

    if (canvas.current) {
      const ctx = canvas.current.getContext('2d');
      const dpr = window?.devicePixelRatio;

      canvas.current.width = canvasWidth * dpr;
      canvas.current.height = canvasHeight * dpr;

      ctx?.scale(dpr, dpr);

      canvas.current.style.width = canvasWidth + 'px';
      canvas.current.style.height = canvasHeight + 'px';

      render();

      if (ctx) {
        ctx.fillStyle = 'red';
        ctx.fillRect(0, 0, canvasWidth, canvasHeight);
      }

      update();
    }
  }, [canvasHeight, canvasWidth, delta, interval, now, then, x, y]);

  return <canvas ref={canvas}>Particle</canvas>;
}

export default Particle;
