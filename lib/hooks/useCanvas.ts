import { RefObject, useEffect, useRef } from 'react';

function useCanvas(innerWidth: number, innerHeight: number) {
  const canvasRef: RefObject<HTMLCanvasElement> = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');

    const setCanvas = () => {
      const pixelRatio = window.devicePixelRatio ?? 1;
      if (canvas && ctx) {
        canvas.style.width = innerWidth + 'px';
        canvas.style.height = innerHeight + 'px';

        canvas.width = innerWidth * pixelRatio;
        canvas.height = innerHeight * pixelRatio;

        ctx.scale(pixelRatio, pixelRatio);
      }
      setCanvas();

      if (ctx) {
        ctx.fillStyle = '#000000';
        ctx.fillRect(0, 0, innerWidth, innerHeight);
      }
    };
  }, [innerWidth, innerHeight]);

  return canvasRef;
}

export default useCanvas;
