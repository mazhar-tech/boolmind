'use client';

import type { HeroCardItem } from '@/constants';
import { useEffect, useRef, useState } from 'react';
import { SchemeCard } from '@/components/CaseSection/SchemeCard';
import { SchemeCard2 } from '@/components/CaseSection/SchemeCard2';
import { SchemeCard3 } from '@/components/CaseSection/SchemeCard3';
import { FeatureCard } from '@/components/FeatureCard/FeatureCard';
import { HeroCards } from '@/components/Hero/HeroCards';
import { Navbar } from '@/components/Navbar';
import { HERO_CARDS, HERO_INTRO, HERO_TITLE } from '@/constants';
import { Link } from '@/libs/I18nNavigation';
import AiButton from '@/public/assets/svgs/header/AiButton';
import LeftPathEffect from '@/public/assets/svgs/header/LeftPathEffect';
import RightPathEffect from '@/public/assets/svgs/header/RightPathEffect';
import { BankingIcon, HealthcareIcon, RetailIcon } from '@/public/assets/svgs/hero-cards';

const HERO_CARD_ICONS: Record<HeroCardItem['id'], React.ReactNode> = {
  banking: <BankingIcon />,
  retail: <RetailIcon />,
  healthcare: <HealthcareIcon />,
};

/**
 * Hero section with navbar, title, intro, cards, AI assistant block, and What You Get.
 * @param root0 - The props object.
 * @param root0.hideAiButton - Whether to hide the AI Assistant button.
 */
export const Hero = ({ hideAiButton = false }: { hideAiButton?: boolean }) => {
  const [displayCenterCardId, setDisplayCenterCardId] = useState<HeroCardItem['id']>('healthcare');
  const [nextCenterCardId, setNextCenterCardId] = useState<HeroCardItem['id'] | null>(null);
  const [isSchemeExiting, setIsSchemeExiting] = useState(false);
  const featureCardRef = useRef<HTMLDivElement>(null);
  const [schemeScale, setSchemeScale] = useState(0.62);

  useEffect(() => {
    const el = featureCardRef.current;
    if (!el) {
      return;
    }
    const updateScale = () => {
      const w = el.getBoundingClientRect().width;
      if (w <= 0) {
        return;
      }
      setSchemeScale(Math.min(1, Math.max(0.5, w / 475)));
    };
    updateScale();
    const ro = new ResizeObserver(updateScale);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const handleCenterCardChange = (newId: HeroCardItem['id']) => {
    if (newId === displayCenterCardId && !nextCenterCardId) {
      return;
    }
    setNextCenterCardId(newId);
    if (newId !== displayCenterCardId) {
      setIsSchemeExiting(true);
    }
  };

  useEffect(() => {
    if (!isSchemeExiting || nextCenterCardId === null) {
      return;
    }
    const id = setTimeout(() => {
      setDisplayCenterCardId(nextCenterCardId);
      setNextCenterCardId(null);
      setIsSchemeExiting(false);
    }, 1250);
    return () => clearTimeout(id);
  }, [isSchemeExiting, nextCenterCardId]);

  return (
    <section
      className="relative grid h-[748px] w-full min-w-full grid-cols-1 bg-[url('/assets/images/HeroBg.png')] bg-cover bg-center bg-no-repeat px-4 md:grid-cols-12 xl:px-8"
      aria-labelledby="hero-title"
    >
      <div className="relative min-h-full md:col-span-12">
        <Navbar />
        <div className="flex flex-col items-center gap-6 pt-9 text-center md:col-span-12">
          <h1
            id="hero-title"
            className="font-title text-4xl leading-tight font-medium text-white md:text-5xl xl:text-[60px]"
          >
            {HERO_TITLE.main}
            {' '}
            <br />
            {HERO_TITLE.highlight}
          </h1>
          <p className={`max-w-[696px] text-base leading-relaxed font-light text-nav-text md:text-lg ${hideAiButton ? 'hidden md:block' : ''}`}>
            {HERO_INTRO}
          </p>
          <HeroCards
            icons={HERO_CARD_ICONS}
            onCenterCardChange={handleCenterCardChange}
            variant="absolute"
            isAiMode={hideAiButton}
          />
          {!hideAiButton && (
            <Link
              href="/ai-assistant"
              className="cursor-pointer pt-[2vh] pr-12 min-[375px]:pt-[10vh] min-[425px]:pt-[15vh] min-[2550px]:!pt-[7vh] md:pt-[17vh] lg:pt-[14vh] xl:pt-[10vh] 2xl:pt-[13vh]"
            >
              <AiButton />
              <p className="rotate-[3.15deg] pt-10 text-center font-sans text-base leading-[1.4] font-light tracking-normal text-[#DBDAEC]">
                Ask AI Assistant
              </p>
            </Link>
          )}

        </div>
        {/* Mobile & tablet: one feature card + one scheme card; scheme scale = feature card width / 475; md: max-width so both stay equal */}
        <div className="mt-16 flex w-full flex-col items-stretch gap-6 md:mx-auto md:max-w-[420px] lg:hidden">
          {/* PROBLEM heading + feature card */}
          <div className="flex w-full flex-col gap-3">
            <h2 className="font-tags text-left text-sm leading-4 font-medium tracking-[1px] text-[#7A7994] uppercase">
              Problem
            </h2>
            <div ref={featureCardRef} className="w-full min-w-0">
              {/* One feature card at a time – exit right, next enters from left */}
              <div className="relative min-h-[100px] w-full overflow-hidden">
                {isSchemeExiting && nextCenterCardId && (
                  <div
                    className="hero-scheme-card-exit-right absolute inset-0 flex justify-center"
                    style={{ transformOrigin: 'top center' }}
                    aria-hidden
                  >
                    {HERO_CARDS.filter(c => c.id === displayCenterCardId).map(card => (
                      <FeatureCard
                        key={card.id}
                        title={card.title}
                        description={card.description}
                        icon={HERO_CARD_ICONS[card.id]}
                        className="w-full max-w-full!"
                      />
                    ))}
                  </div>
                )}
                <div
                  className={`absolute inset-0 flex justify-center ${isSchemeExiting && nextCenterCardId ? 'hero-scheme-card-enter-from-left z-10' : ''}`}
                  style={{ transformOrigin: 'top center' }}
                >
                  {HERO_CARDS.filter(c => c.id === (isSchemeExiting && nextCenterCardId ? nextCenterCardId : displayCenterCardId)).map(card => (
                    <FeatureCard
                      key={card.id}
                      title={card.title}
                      description={card.description}
                      icon={HERO_CARD_ICONS[card.id]}
                      className="w-full max-w-full!"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* SOLUTION heading + scheme card */}
          <div className="flex w-full flex-col gap-3">
            <h2 className="font-tags text-left text-sm leading-4 font-medium tracking-[1px] text-[#7A7994] uppercase">
              Solution
            </h2>
            {/* Scheme card: scale = container width / 475 so it matches feature card width exactly */}
            <div className="flex w-full min-w-0 justify-center overflow-x-hidden">
              <div className="relative aspect-475/533 w-full shrink-0 overflow-hidden">
                {/* Exiting card */}
                {isSchemeExiting && nextCenterCardId && (
                  <div
                    className="hero-scheme-card-exit-right absolute inset-0"
                    style={{ transformOrigin: 'top center' }}
                    aria-hidden
                  >
                    <div
                      className="absolute top-0 left-1/2 h-[533px] w-[475px] origin-top -translate-x-1/2"
                      style={{ transform: `translateX(-50%) scale(${schemeScale})` }}
                    >
                      {displayCenterCardId === 'healthcare' && <SchemeCard className="origin-top" />}
                      {displayCenterCardId === 'banking' && <SchemeCard2 className="origin-top" />}
                      {displayCenterCardId === 'retail' && <SchemeCard3 className="origin-top" />}
                    </div>
                  </div>
                )}
                {/* Current or entering card */}
                <div
                  className={`absolute inset-0 z-10 ${isSchemeExiting && nextCenterCardId ? 'hero-scheme-card-enter-from-left' : ''}`}
                  style={{ transformOrigin: 'top center' }}
                >
                  <div
                    className="absolute top-0 left-1/2 h-[533px] w-[475px] origin-top"
                    style={{ transformOrigin: 'top center', transform: `translateX(-50%) scale(${schemeScale})` }}
                  >
                    {(isSchemeExiting && nextCenterCardId ? nextCenterCardId : displayCenterCardId) === 'healthcare' && (
                      <SchemeCard className="origin-top" />
                    )}
                    {(isSchemeExiting && nextCenterCardId ? nextCenterCardId : displayCenterCardId) === 'banking' && (
                      <SchemeCard2 className="origin-top" />
                    )}
                    {(isSchemeExiting && nextCenterCardId ? nextCenterCardId : displayCenterCardId) === 'retail' && (
                      <SchemeCard3 className="origin-top" />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Right side: two SchemeCards for smooth transition; fixed size 238×267 (scaled from 475×533); 2xl slightly larger */}
        <div className="absolute right-4 z-20 hidden items-center justify-center lg:top-[400px] lg:right-8 lg:flex 2xl:right-36">
          <div className="relative h-[267px] w-[238px] shrink-0 2xl:h-[320px] 2xl:w-[285px]">
            {/* Exiting card */}
            {isSchemeExiting && nextCenterCardId && (
              <div
                className="hero-scheme-card-exit-right absolute top-0 right-0 origin-top-right scale-[0.5] 2xl:scale-[0.6]"
                style={{ transformOrigin: 'top right' }}
                aria-hidden
              >
                {displayCenterCardId === 'healthcare' && <SchemeCard className="origin-top" />}
                {displayCenterCardId === 'banking' && <SchemeCard2 className="origin-top" />}
                {displayCenterCardId === 'retail' && <SchemeCard3 className="origin-top" />}
              </div>
            )}
            {/* Current or entering card */}
            <div
              className={`absolute top-0 right-0 origin-top-right scale-[0.5] 2xl:scale-[0.6] ${isSchemeExiting && nextCenterCardId ? 'hero-scheme-card-enter-from-left z-10' : ''}`}
              style={{ transformOrigin: 'top right' }}
            >
              {(isSchemeExiting && nextCenterCardId ? nextCenterCardId : displayCenterCardId) === 'healthcare' && (
                <SchemeCard className="origin-top" />
              )}
              {(isSchemeExiting && nextCenterCardId ? nextCenterCardId : displayCenterCardId) === 'banking' && (
                <SchemeCard2 className="origin-top" />
              )}
              {(isSchemeExiting && nextCenterCardId ? nextCenterCardId : displayCenterCardId) === 'retail' && (
                <SchemeCard3 className="origin-top" />
              )}
            </div>
          </div>
        </div>
        {/* Path effects: center-anchored so meeting point stays at 50% on all screen sizes; edges may clip. */}
        <div className="pointer-events-none absolute right-0 bottom-[-2px] left-0 z-10 h-[406px] overflow-x-hidden overflow-y-visible 2xl:bottom-[-20px]">
          <div className="absolute right-1/2 bottom-0 h-[406px] w-[720px] -translate-x-px 2xl:translate-x-[-10px]">
            <div className="absolute inset-0">
              <LeftPathEffect />
            </div>
          </div>
          <div className="absolute bottom-[10px] left-1/2 h-[406px] w-[720px] ">
            <div className="absolute inset-0">
              <RightPathEffect />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
