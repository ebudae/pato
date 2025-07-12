import React, { useRef, useEffect } from 'react';

const WaveEffect = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width, height;

    function resize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resize);
    resize();

    const startTime = performance.now();

    let animationFrameId;

    function draw() {
      const now = performance.now();
      const t = (now - startTime) / 1000; // tiempo real en segundos

      ctx.fillStyle = '#111';
      ctx.fillRect(0, 0, width, height);

      ctx.strokeStyle = '#0ff';
      ctx.lineWidth = 4;
      ctx.beginPath();

      const visibleWindow = 10; // duración visible (en segundos)
      const scanProgress = (t % 10) / 10; // va de 0 a 1 cada 10 segundos
      const leftPixel = scanProgress * width - width * 0.2;
      const rightPixel = leftPixel + width * 0.4; // franja del 40%

      const samples = 100; // número de puntos para la onda
      const scaleY = 40;
      const yOffset = height / 2;

      for (let i = 0; i <= samples; i++) {
        const px = leftPixel + ((i / samples) * (rightPixel - leftPixel));
        const x = t + ((i / samples) * visibleWindow);
        const y = yOffset + Math.sin(x * 2) * scaleY * Math.sin(x * 0.5);
        if (i === 0) {
          ctx.moveTo(px, y);
        } else {
          ctx.lineTo(px, y);
        }
      }

      ctx.stroke();
      animationFrameId = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, zIndex: -1, display: 'block', margin: 0, overflow: 'hidden', background: '#111' }} />;
};

export default WaveEffect;
