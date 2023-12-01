'use client';

import { useState } from 'react';
import Image from 'next/image';

type TProps = React.FC<{
  startPosition?: number;
  images?: [{ src: string; alt: string }, { src: string; alt: string }];
}>;

export const ImageComparison: TProps = ({ startPosition = 50, images }) => {
  const [sliderPosition, setSliderPosition] = useState(startPosition);
  const [isDragging, setIsDragging] = useState(false);

  const minValue = 2;
  const maxValue = 98;

  const clamp = (value: number) => Math.max(minValue, Math.min(value, maxValue));

  const handleMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!isDragging) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(event.clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPosition(clamp(percent));
  };
  const handleTouchMoveCapture = (event: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const touch = event.changedTouches[0];

    const x = Math.max(0, Math.min(touch.clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPosition(clamp(percent));
  };

  const handleMouseDown = (event: any) => {
    setIsDragging(true);
  };
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      style={{
        touchAction: 'none',
      }}
      className="relative h-full w-full"
      onMouseUp={handleMouseUp}
    >
      <div
        className="relative m-auto h-full w-full select-none overflow-hidden"
        onMouseMove={handleMove}
        onTouchStart={handleMouseDown}
        onTouchMoveCapture={handleTouchMoveCapture}
        onMouseDown={handleMouseDown}
      >
        {/*<Image alt="" fill priority src={''} />*/}
        <div className={'h-full w-full bg-zinc-400'} />
        <div
          className="absolute left-0 right-0 top-0 m-auto h-full w-full max-w-[700px] select-none overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <div className={'h-full w-full bg-zinc-200'} />
          {/*<Image fill priority alt="" src={''} />*/}
        </div>
        <div
          className="absolute bottom-0 top-0 w-[5px] cursor-ew-resize bg-zinc-50"
          style={{
            left: `calc(${sliderPosition}% - 1px)`,
          }}
        >
          <div className="absolute -left-1 top-[calc(50%-5px)] h-3 w-3 rounded-full bg-zinc-50" />
        </div>
      </div>
    </div>
  );
};
