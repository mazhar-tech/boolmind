'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import Image from 'next/image';
import {
  EVOLUTION,
  EVOLUTION_BEFORE,
  EVOLUTION_AFTER,
  EVOLUTION_HINTS,
} from '@/constants';
import { FlipIcon } from '@/public/assets/svgs';

/** Position 0 = all Before, 100 = all After. Handle moves left–right over the image. */
const INITIAL_POSITION = 80;

/** Evolution section: Before/After comparison slider — handle image ke upar left/right move, drag se reveal. */
export const EvolutionSection = (props: { className?: string }) => {
  const [position, setPosition] = useState(INITIAL_POSITION);
  const sliderRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const className = props.className ?? '';

  const updatePositionFromClientX = useCallback((clientX: number) => {
    const el = sliderRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPosition(pct);
  }, []);

  const onHandlePointerDown = useCallback(
    (e: React.PointerEvent) => {
      e.currentTarget.setPointerCapture(e.pointerId);
      isDragging.current = true;
      updatePositionFromClientX(e.clientX);
    },
    [updatePositionFromClientX]
  );

  useEffect(() => {
    const onPointerMove = (e: PointerEvent) => {
      if (!isDragging.current) return;
      updatePositionFromClientX(e.clientX);
    };
    const onPointerUp = () => {
      isDragging.current = false;
    };
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);
    return () => {
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
    };
  }, [updatePositionFromClientX]);

  return (
    <section
      className={`relative flex flex-col items-center overflow-hidden px-4 md:px-[80px]  ${className}`.trim()}
      style={{ minHeight: 916 }}
      aria-labelledby="evolution-title"
    >
      {/* Lights layer (1440x750 centered) */}
      <div
          className="pointer-events-none absolute inset-0"
          aria-hidden
        >
         
        </div>
      {/* Title + Description */}
      <div className="relative z-10 flex max-w-[700px] flex-col items-center gap-6 text-center">
        <span className="font-tags text-sm font-medium uppercase tracking-[1px] text-brand">
          {EVOLUTION.tag}
        </span>
        <div className="flex flex-col items-center gap-2.5">
          <h2
            id="evolution-title"
            className="font-title text-[32px] font-medium capitalize leading-tight text-gray-50 md:text-[48px] xl:text-[60px] xl:leading-[72px]"
          >
            {EVOLUTION.title}
          </h2>
          <p className="max-w-[700px] font-sans text-lg font-light leading-[26px] text-nav-text">
            {EVOLUTION.description}
          </p>
        </div>
      </div>

      {/* Content row: left title | comparison slider (images + handle) | right title */}
      <div className="relative z-10 mx-auto grid w-full  grid-cols-1 gap-8 pt-12 md:min-h-[584px] md:grid-cols-[1fr_1fr_1fr] md:items-start md:gap-6 md:pt-16 xl:grid-cols-[413px_1fr_413px] xl:gap-8">
        {/* Left block — Before: brand when slider left (position ≤ 50) */}
        <div className="flex flex-col items-start gap-6 md:order-1">
          <span
            className={`font-tags text-lg font-medium uppercase tracking-[1px] ${position <= 50 ? 'text-nav-muted' : ' text-brand'}`}
          >
            {EVOLUTION_BEFORE.tag}
          </span>
          <h3
            className={`font-title text-2xl font-medium capitalize leading-[30px] `}
          >
            {EVOLUTION_BEFORE.headline}
          </h3>
        </div>

        {/* Comparison slider: After (base) + Before (overlay) — handle moves left–right */}
        <div
          ref={sliderRef}
          className="relative flex w-full items-center justify-center md:order-2 md:min-h-[384px] xl:min-h-[584px]"
        >
          {/* Wrapper without overflow so handle is never clipped */}
          <div className="relative h-[320px] w-full min-w-0 max-w-[min(100%,520px)] md:h-[384px] md:max-w-[min(100%,600px)] xl:h-[584px] xl:max-w-[min(100%,700px)]">
            {/* Image box: overflow only for images, not handle */}
            <div className="absolute inset-0 overflow-hidden rounded-lg">
              {/* Base: After (full width, no crop) */}
              <div className="absolute inset-0">
                <Image
                  src="/assets/svgs/After.svg"
                  alt={EVOLUTION_AFTER.headline}
                  fill
                  className="object-contain object-center"
                  priority={false}
                  unoptimized
                />
              </div>
              {/* Overlay: Before clipped by position% from left */}
              <div
                className="absolute left-0 top-0 h-full overflow-hidden"
                style={{ width: `${position}%` }}
              >
                <div
                  className="relative h-full"
                  style={{ width: position > 0 ? `${(100 / position) * 100}%` : '100%' }}
                >
                  <Image
                    src="/assets/svgs/Before.svg"
                    alt={EVOLUTION_BEFORE.headline}
                    fill
                    className="object-contain object-left"
                    priority={false}
                    unoptimized
                  />
                </div>
              </div>
            </div>
            {/* Handle outside overflow layer so it never gets cut */}
            <div
              className="absolute top-0 bottom-0 z-20 flex w-8 cursor-ew-resize items-center justify-center md:w-12"
              style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
              role="slider"
              aria-valuenow={position}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label="Compare before and after"
            >
              <button
                type="button"
                className="cursor-on-brand cursor-grab touch-none select-none active:cursor-grabbing"
                onPointerDown={onHandlePointerDown}
                aria-hidden
              >
                <FlipIcon className="h-full w-full" />
              </button>
            </div>
          </div>
        </div>

        {/* Right block — After: brand when slider right (position > 50) */}
        <div className="flex flex-col items-end gap-6 text-right md:order-3">
          <span
            className={`font-tags text-lg font-medium uppercase tracking-[1px] ${position > 50 ? 'text-nav-muted' : 'text-brand'}`}
          >
            {EVOLUTION_AFTER.tag}
          </span>
          <h3
            className={`font-title text-2xl font-medium capitalize leading-[30px]`}
          >
            {EVOLUTION_AFTER.headline}
          </h3>
        </div>
      </div>

      {/* Hint row */}
      <div className="relative z-10 mt-12 flex w-full max-w-[1440px] flex-col gap-6 px-0 md:mt-16 md:flex-row md:items-center md:justify-center md:gap-5 md:px-[80px]">
        {EVOLUTION_HINTS.map(hint => (
          <div
            key={hint.id}
            className="flex flex-row items-center gap-5"
          >
            <div className="relative h-[60px] w-[60px] shrink-0 overflow-hidden rounded-lg ">
              <Image
                src={hint.icon}
                alt=""
                fill
                className="object-contain p-1"
                unoptimized
              />
            </div>
            <p className="min-w-0 flex-1 font-sans text-sm font-light leading-[22px] text-nav-muted">
              {hint.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
