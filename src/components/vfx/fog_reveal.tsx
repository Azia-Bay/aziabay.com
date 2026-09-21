"use client";

import { useEffect, useRef, useState } from "react";

const BAYER_4X4 = [
  [0, 8, 2, 10],
  [12, 4, 14, 6],
  [3, 11, 1, 9],
  [15, 7, 13, 5],
];

const MAX_THRESHOLD = 16;

type FogRevealProps = {
  children: React.ReactNode;
  cellSize?: number;
  duration?: number;
};

export default function FogReveal({ children, cellSize = 2, duration = 1000 }: FogRevealProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [canvasReady, setCanvasReady] = useState(false);

  useEffect(() => {
    let start: number | null = null;
    let frameId: number;
    
    try {
      const canvas = canvasRef.current;
      const context = canvas?.getContext("2d");

      if (!canvas || !context) {
        setCanvasReady(true);
        return;
      }

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const cols = Math.ceil(canvas.width / cellSize);
      const rows = Math.ceil(canvas.height / cellSize);

      const style = getComputedStyle(document.documentElement);
      const fillColor = style.getPropertyValue("--dark").trim();

      function draw(now: number) {
        if (start === null) start = now;

        const elapsed = now - start;
        
        const progress = Math.min(
          MAX_THRESHOLD,
          (elapsed / duration) * MAX_THRESHOLD
        );

        context!.clearRect(
          0,
          0,
          canvas!.width,
          canvas!.height
        );

        context!.fillStyle = fillColor;

        for (let y = 0; y < rows; y++) {
          for (let x = 0; x < cols; x++) {
            const threshold = BAYER_4X4[y % 4][x % 4];
            
            if (threshold >= progress) {
              context!.fillRect(
                x * cellSize,
                y * cellSize,
                cellSize,
                cellSize
              );
            }
          }
        }

        if (elapsed < duration) {
          frameId = requestAnimationFrame(draw);
        }
      }

      setCanvasReady(true);

      frameId = requestAnimationFrame(draw);
    } catch(error) {
      setCanvasReady(true);
    }

    return () => cancelAnimationFrame(frameId);
  }, [cellSize, duration]);

  return (
    <div>
      {children}

      {!canvasReady &&
        <div
          className="fixed inset-0 z-50 bg-dark" />
      }

      <canvas
        ref={canvasRef}
        className="pointer-events-none fixed inset-0 z-50" />
    </div>
  );
}
