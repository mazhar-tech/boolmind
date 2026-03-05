'use client';

import Image from 'next/image';
import { useRef } from 'react';
import {
  ABOUT_ACTION_CARDS,
  ABOUT_HEADER,
  ABOUT_RIGHT_TAG,
  ABOUT_STAT,
} from '@/constants';
import { ActionCard } from './ActionCard';

/**
 * About section: header, Spline pyramid, stat block, action cards. On scroll, pyramid animates.
 * @param props - The component props.
 * @param props.className - Extra CSS classes.
 */
export function AboutSection(props: { className?: string }) {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      className={`relative min-h-[750px] w-full overflow-hidden px-4 py-0 md:px-10 lg:px-20 ${props.className ?? ''}`.trim()}
      aria-labelledby="about-section-title"
    >
      {/* Background lights — Ellipse 2014 (orange), Ellipse 2015 (blue) */}

      {/* Block header — tag + row (title | right tag + cert icons) */}
      <header className="relative z-10 flex flex-col gap-6 pt-0">
        <span className="font-tags text-sm font-medium tracking-[1px] text-brand uppercase">
          {ABOUT_HEADER.tag}
        </span>
        <h2
          id="about-section-title"
          className="font-title max-w-[640px] text-3xl leading-tight font-medium text-gray-50 capitalize md:text-4xl xl:text-[60px] xl:leading-[72px]"
        >
          {ABOUT_HEADER.title}
        </h2>
      </header>
      <div className="flex max-w-[413px] flex-col gap-6 pt-6 lg:hidden ">
        <span className="font-sans text-xs leading-4 font-normal text-nav-text capitalize">
          {ABOUT_RIGHT_TAG}
        </span>
        <div className="flex flex-row gap-2.5">
          <div
            className="flex h-[60px] w-[60px] shrink-0 items-center justify-center "
            title="iOS"
          >
            <Image
              src="/assets/svgs/Ios.svg"
              alt="iOS"
              width={40}
              height={40}
              className="h-full w-full object-contain"
            />
          </div>
          <div
            className="flex h-[60px] w-[60px] shrink-0 items-center justify-center "
            title="SOC"
          >
            <Image
              src="/assets/svgs/Soc.svg"
              alt="SOC"
              width={40}
              height={40}
              className="h-full w-full object-contain"
            />
          </div>
        </div>
      </div>
      {/* Pyramid + right stat block */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1280px] flex-col gap-8 lg:flex-row lg:items-start lg:justify-end lg:gap-10 xl:items-center">
        <div className="relative -z-10 flex w-full max-w-[800px] flex-1 flex-col items-center xl:mt-[-180px]">

          {/* Pyramid: Spline 3D scene via official viewer (Play Settings apply) */}
          {/* <div ref={pyramidRef} className="h-[560px] w-full min-h-[560px]">
            <Script
              src={SPLINE_VIEWER_SCRIPT}
              strategy="afterInteractive"
              type="module"
            />
            <spline-viewer
              url={SPLINE_SCENE_URL}
              className="h-full w-full min-h-[400px] block"
            />
          </div> */}
          {/* <div
            ref={pyramidRef}
            className="relative h-[332px] w-full overflow-hidden rounded-lg bg-[#D9D9D9]/10"
            style={{
              transition: 'transform 0.6s ease-out',
              transform: inView ? 'translateY(0) scale(1)' : 'translateY(24px) scale(0.98)',
            }}
          >
            <Spline
              scene={ABOUT_PYRAMID_SCENE_URL}
              className="h-full w-full min-h-[332px]"
            />
          </div>  */}
          {/* Ellipse 2007 — orange glow under pyramid */}
          {/* <div
            className="pointer-events-none absolute left-1/2 top-[calc(39px+332px)] h-5 w-[323px] -translate-x-1/2 rounded-full opacity-40 blur-[50px]"
            style={{ background: '#FF5B35' }}
            aria-hidden
          />
          {/* <Image src="/assets/svgs/Triangle.svg" alt="Pyramid" width={713} height={332} className="w-full h-full" /> */}
        </div>
        {/* Right stat block — Frame 2121455536 */}
        <div className="relative z-10 flex max-w-[413px] flex-col justify-center gap-2.5 pb-8 lg:pb-0 xl:mt-[-180px]">
          <div className=" ml-[-140px] flex flex-col justify-between lg:min-h-[400px] xl:min-h-[530px]">
            <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
              <div className="hidden max-w-[413px] flex-col gap-6 lg:flex ">
                <span className="font-sans text-xs leading-4 font-normal text-nav-text capitalize">
                  {ABOUT_RIGHT_TAG}
                </span>
                <div className="flex flex-row gap-2.5">
                  <div
                    className="flex h-[60px] w-[60px] shrink-0 items-center justify-center "
                    title="iOS"
                  >
                    <Image
                      src="/assets/svgs/Ios.svg"
                      alt="iOS"
                      width={40}
                      height={40}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div
                    className="flex h-[60px] w-[60px] shrink-0 items-center justify-center "
                    title="SOC"
                  >
                    <Image
                      src="/assets/svgs/Soc.svg"
                      alt="SOC"
                      width={40}
                      height={40}
                      className="h-full w-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="ml-[135px] max-w-[413px] lg:ml-0">
              <h3 className="font-sans text-lg leading-6 font-normal text-gray-50 capitalize">
                {ABOUT_STAT.headline}
              </h3>
              <p className="pt-2 font-sans text-sm leading-[22px] font-light text-[#8E8DA8]">
                {ABOUT_STAT.description}
              </p>

            </div>
          </div>

        </div>
      </div>

      {/* Action cards — padding 0 80px, gap 20px, min-h 96px */}
      <div className="relative z-10 mx-auto mt-8 grid  w-full max-w-[1280px]  gap-3 md:grid-cols-2  lg:grid-cols-3 xl:gap-5">
        {ABOUT_ACTION_CARDS.map(card => (
          <ActionCard key={card.id} card={card} />
        ))}
      </div>
    </section>
  );
}
