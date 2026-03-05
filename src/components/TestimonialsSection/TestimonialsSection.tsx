'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { TESTIMONIALS_HEADER, TESTIMONIALS } from '@/constants';
import {
  QuoteIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  PlayIcon,
  NaxeIcon,
} from '@/public/assets/svgs';

const CARD_GAP = 20;

type TestimonialCard = (typeof TESTIMONIALS)[number];

function TestimonialCardItem(props: {
  item: TestimonialCard;
  isActive: boolean;
  widthPx: number;
}) {
  const { item, isActive, widthPx } = props;

  return (
    <article
      className={`relative isolate flex shrink-0 flex-col items-start gap-5 rounded-3xl p-5 transition-opacity duration-300 lg:flex-row xl:gap-20 xl:p-10 ${
        isActive ? 'opacity-100' : 'opacity-40'
      }`}
      style={{
        background: isActive ? '#05061A' : 'rgba(5, 6, 26, 0.3)',
        width: widthPx,
      }}
    >
      {/* Card background blurs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl" aria-hidden>
        <div
          className="absolute left-[-2.99%] right-[74.19%] top-[46.73%] bottom-[30.04%] rounded-full bg-[rgba(0,116,205,0.8)] blur-[200px]"
          style={{
            transform: 'matrix(-0.79, 0.62, -0.7, -0.71, 0, 0)',
          }}
          aria-hidden
        />
        <div
          className="absolute left-[-0.62%] right-[76.66%] top-[1.73%] bottom-[56.91%] rounded-full bg-[rgba(255,91,53,0.8)] blur-[175px]"
          style={{
            transform: 'matrix(0.29, -0.96, 0.97, 0.23, 0, 0)',
          }}
          aria-hidden
        />
      </div>

      {/* Left: tag, solution, media */}
      <div className="relative z-10 flex w-full shrink-0 flex-col justify-between gap-10 lg:h-[470px] lg:w-[360px]">
        <div className="flex flex-col gap-10">
          <span className="font-tags text-lg font-medium uppercase tracking-[1px] text-nav-muted">
            {item.tag}
          </span>
          <h3 className="font-title text-[32px] font-medium capitalize leading-[38px] text-gray-50">
            {item.solution}
          </h3>
        </div>
        <div className="relative h-[202px] w-full overflow-hidden rounded-lg bg-gray-600">
          {item.mediaImage ? (
            <Image
              src={item.mediaImage}
              alt=""
              fill
              className="object-cover"
              sizes="360px"
              unoptimized
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-nav-muted">
              <span className="text-sm">Team</span>
            </div>
          )}
        </div>
      </div>

      {/* Right: quote, author, logo */}
      <div className="relative z-10 flex w-full shrink-0 flex-col justify-between gap-10 lg:w-[580px]">
        <div className="flex flex-col gap-10">
          <QuoteIcon className="h-6 w-6 text-nav-muted" />
          {/* <p className="font-sans text-base font-light leading-[26px] text-gray-50">
            {item.quote}
          </p> */}
        </div>

        {/* Video thumb + play */}
        <div className="relative h-[202px] w-full overflow-hidden rounded-lg bg-gray-600 md:h-[326px]">
          {item.videoThumb ? (
            <Image
              src={item.videoThumb}
              alt=""
              fill
              className="object-cover"
              sizes="580px"
              unoptimized
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-nav-muted">
              <span className="text-sm">Video</span>
            </div>
          )}
          <div className="cursor-on-brand absolute left-1/2 top-1/2 flex  -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-brand">
            <PlayIcon className="" />
          </div>
        </div>

        <div className="flex flex-row items-center justify-between gap-2">
          <div className="flex flex-col">
            <span className="font-sans text-base font-normal capitalize leading-5 text-gray-50">
              {item.authorName}
            </span>
            <span className="font-sans text-xs font-normal capitalize leading-4 text-nav-muted">
              {item.authorRole}
            </span>
          </div>
          <div className="flex h-10 w-[137px] items-center justify-end text-gray-50">
            <NaxeIcon />
          </div>
        </div>
      </div>
    </article>
  );
}

/** Builds infinite slider list: [last, ...items, first] so next from end → clone → jump to start. */
function getSliderItems(): TestimonialCard[] {
  const last = TESTIMONIALS[TESTIMONIALS.length - 1];
  const first = TESTIMONIALS[0];
  if (!last || !first) return [...TESTIMONIALS];
  return [last, ...TESTIMONIALS, first];
}

/** Testimonials section with infinite horizontal slider, prev/next and dots. */
export const TestimonialsSection = (props: { className?: string }) => {
  const className = props.className ?? '';
  const total = TESTIMONIALS.length;
  const sliderItems = getSliderItems();
  const totalSlots = sliderItems.length;

  const [index, setIndex] = useState(1);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const jumpToRef = useRef<number | null>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState(1100);

  const goPrev = useCallback(() => {
    setIndex(i => i - 1);
  }, []);

  const goNext = useCallback(() => {
    setIndex(i => i + 1);
  }, []);

  const handleTransitionEnd = useCallback(() => {
    if (index === 0) {
      jumpToRef.current = total;
      setTransitionEnabled(false);
    } else if (index === totalSlots - 1) {
      jumpToRef.current = 1;
      setTransitionEnabled(false);
    }
  }, [index, total, totalSlots]);

  useEffect(() => {
    if (!transitionEnabled && jumpToRef.current !== null) {
      setIndex(jumpToRef.current);
      jumpToRef.current = null;
      const id = requestAnimationFrame(() => {
        requestAnimationFrame(() => setTransitionEnabled(true));
      });
      return () => cancelAnimationFrame(id);
    }
    return undefined;
  }, [transitionEnabled]);

  const realIndex = ((index - 1 + total) % total + total) % total;

  useEffect(() => {
    const id = setInterval(() => {
      setIndex(i => (i >= totalSlots - 1 ? i : i + 1));
    }, 8000);
    return () => clearInterval(id);
  }, [totalSlots]);

  // XL: keep 1100px and allow side peek. Below XL: make card fill container → only 1 visible.
  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;

    const update = () => {
      const w = el.clientWidth;
      const isXlUp =
        typeof window !== 'undefined' &&
        window.matchMedia &&
        window.matchMedia('(min-width: 1280px)').matches;
      setCardWidth(isXlUp ? 1100 : w);
    };

    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <section
      className={`flex flex-col items-center justify-center gap-10 px-4 py-16 md:gap-[40px] md:py-20 ${className}`.trim()}
      aria-labelledby="testimonials-title"
    >
      {/* Title + Description */}
      <div className="flex max-w-[700px] flex-col items-center gap-6 text-center">
        <span className="font-tags text-sm font-medium uppercase tracking-[1px] text-brand">
          {TESTIMONIALS_HEADER.tag}
        </span>
        <div className="flex flex-col items-center gap-2.5">
          <h2
            id="testimonials-title"
            className="font-title text-[32px] font-medium capitalize leading-tight text-gray-50 md:text-[48px] xl:text-[60px] xl:leading-[72px]"
          >
            {TESTIMONIALS_HEADER.title}
          </h2>
          <p className="max-w-[650px] font-sans text-lg font-light leading-[26px] text-[#A4A2C4]">
            {TESTIMONIALS_HEADER.description}
          </p>
        </div>
      </div>

      {/* Slider: infinite loop — [last, ...items, first]; transition end jumps clone → real */}
      <div ref={viewportRef} className="relative w-full overflow-hidden">
        <div
          className="flex flex-row will-change-transform"
          style={{
            paddingLeft: `calc(50% - ${cardWidth / 2}px)`,
            transform: `translateX(-${index * (cardWidth + CARD_GAP)}px)`,
            transition: transitionEnabled
              ? 'transform 1s cubic-bezier(0.25, 0.1, 0.25, 1)'
              : 'none',
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {sliderItems.map((item, i) => (
            <div
              key={`${item.id}-${i}`}
              className="pr-5 md:pr-[20px]"
              style={{ width: cardWidth + CARD_GAP }}
            >
              <TestimonialCardItem item={item} isActive={i === index} widthPx={cardWidth} />
            </div>
          ))}
        </div>
      </div>

      {/* Pagination: prev, dots, next */}
      <div className="flex w-full max-w-[1280px] flex-row items-center justify-between gap-2 px-4">
        <button
          type="button"
          onClick={goPrev}
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-tabs-divider bg-[rgba(11,13,52,0.4)] text-[#A4A2C4] transition-opacity hover:opacity-90"
          aria-label="Previous testimonial"
        >
          <ChevronLeftIcon className="h-6 w-6" />
        </button>

        <div className="flex flex-row items-center gap-2">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i + 1)}
              className={`rounded-full transition-all ${i === realIndex
                  ? 'h-2 w-2 bg-brand md:h-2 md:w-2'
                  : 'h-1.5 w-1.5 bg-tabs-divider md:h-2 md:w-2'
                }`}
              aria-label={`Go to testimonial ${i + 1}`}
              aria-current={i === realIndex ? 'true' : undefined}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={goNext}
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-tabs-divider bg-[rgba(11,13,52,0.4)] text-[#A4A2C4] transition-opacity hover:opacity-90"
          aria-label="Next testimonial"
        >
          <ChevronRightIcon className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
};
