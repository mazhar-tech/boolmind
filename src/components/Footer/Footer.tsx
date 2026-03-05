'use client';

import { useLayoutEffect, useRef } from 'react';
import Image from 'next/image';
import { Link } from '@/libs/I18nNavigation';
import {
  FOOTER_CTA,
  FOOTER_PRIMARY_LABEL,
  FOOTER_SECONDARY_LABEL,
  FOOTER_NAV_LINKS,
  FOOTER_SOCIAL,
  FOOTER_COPYRIGHT,
  FOOTER_PRIVACY_LABEL,
  FOOTER_TERMS_LABEL,
  FOOTER_PRIVACY_HREF,
  FOOTER_TERMS_HREF,

} from '@/constants';
import { NAV_LOGO } from '@/constants';
import {
  LinkedInIcon,
  GitHubIcon,
  GitLabIcon,
  BitbucketIcon,
} from '@/public/assets/svgs';

const SOCIAL_ICONS = [
  LinkedInIcon,
  GitHubIcon,
  GitLabIcon,
  BitbucketIcon,
] as const;

/** Parallax strength: max px the background moves with mouse. */
const PARALLAX_STRENGTH = 56;

/**
 * Footer with gradient/blur background, CTA block, logo, social links, nav, and legal row.
 * Background image moves slowly with the mouse (parallax).
 */
export function Footer(props: { className?: string }) {
  const footerRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const footer = footerRef.current;
    const bg = bgRef.current;
    if (!footer || !bg) return;

    const onMouseMove = (e: MouseEvent) => {
      const rect = footer.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      const moveX = (x - 0.5) * 2 * PARALLAX_STRENGTH;
      const moveY = (y - 0.5) * 2 * PARALLAX_STRENGTH;
      bg.style.transform = `translate(${moveX}px, ${moveY}px)`;
    };

    const onMouseLeave = () => {
      bg.style.transform = 'translate(0px, 0px)';
    };

    footer.addEventListener('mousemove', onMouseMove, { capture: true, passive: true });
    footer.addEventListener('mouseleave', onMouseLeave);

    return () => {
      footer.removeEventListener('mousemove', onMouseMove, { capture: true });
      footer.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (
    <footer
      ref={footerRef}
      className={`relative overflow-hidden bg-[#000008] ${props.className ?? ''}`.trim()}
      role="contentinfo"
    >
      {/* Background – moves with cursor inside footer */}
      <div
        ref={bgRef}
        className="pointer-events-none absolute z-0 bg-cover bg-center bg-no-repeat 
             bg-[url('/assets/images/MobileBg.png')] 
             md:bg-[url('/footerbg.png')]"
        style={{
          left: '-10%',
          top: '-10%',
          width: '120%',
          height: '120%',
          willChange: 'transform',
        }}
        aria-hidden
      />

      <div className="relative z-10 flex flex-col items-center gap-16 px-4 pt-16 md:px-10 lg:gap-20 lg:px-20">
        {/* CTA block */}
        <div className="flex max-w-[740px] flex-col items-center gap-6 text-center">
          <span
            className="font-tags text-sm font-medium uppercase tracking-[1px] lg:block hidden"
            style={{
              background: 'linear-gradient(0deg, #FF5B35, #FF5B35), linear-gradient(270deg, #FF5B35 0%, #821E7A 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {FOOTER_CTA.tag}
          </span>
          <div className="flex flex-col gap-2">
            <h2 className="font-title text-3xl font-medium capitalize xl:leading-[72px] text-gray-50 md:text-5xl lg:text-[60px] lg:block hidden">
              {FOOTER_CTA.title}
            </h2>
            <h2 className="font-title text-[32px] font-medium capitalize xl:leading-[72px] text-gray-50 md:text-[40px] lg:text-[60px] block lg:hidden">
              {FOOTER_CTA.mobileTitle}
            </h2>
            <p className="font-sans text-base font-light  leading-[26px] text-nav-text lg:text-lg max-w-[700px] lg:block hidden">
              {FOOTER_CTA.description}
            </p>
          </div>
          <div className="flex flex-row  items-center justify-center gap-2">
            <Link
              href="#get-started"
              className="cursor-on-brand inline-flex h-11 items-center justify-center rounded-full bg-brand px-6 py-3 font-sans md:text-base text-sm font-normal capitalize leading-5 text-[#000008] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] transition-opacity hover:opacity-90"
            >
              {FOOTER_PRIMARY_LABEL}
            </Link>
            <Link
              href="#talk-to-ai"
              className="inline-flex h-11 items-center justify-center rounded-full border border-tabs-divider px-6 py-3 font-sans md:text-base text-sm font-normal capitalize leading-5 text-nav-text transition-opacity hover:opacity-90"
              style={{ background: 'rgba(11, 13, 52, 0.4)' }}
            >
              {FOOTER_SECONDARY_LABEL}
            </Link>
          </div>
        </div>

        {/* Footer rows */}

        <div className="flex w-full flex-col border-t border-tabs-divider/50  ">
          {/* Logo + social */}
          <div className="flex flex-row flex-wrap items-center justify-between gap-6 pt-10">
            <Link
              href="/home"
              className="flex shrink-0"
              aria-label={NAV_LOGO.alt}
            >
              <Image
                src={NAV_LOGO.src}
                alt={NAV_LOGO.alt}
                width={203}
                height={52}
                className=" object-contain object-left h-[52px] w-[203px]"
              />
            </Link>
            <nav
              className="flex flex-row items-center"
              aria-label="Social links"
            >
              {FOOTER_SOCIAL.map((item, i) => {
                const Icon = SOCIAL_ICONS[i];
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"

                    rel="noopener noreferrer"
                    aria-label={item.label}
                  >
                    {Icon ? <Icon className="" /> : null}
                  </a>
                );
              })}
            </nav>
          </div>

          {/* Nav links */}
          <nav
            className=" justify-between flex md:flex-row flex-col  mt-10 mb-[103px] md:mb-0   "
            aria-label="Footer navigation"

          >
            <div className='gap-6 flex flex-col flex-wrap  md:flex-row  '>
              {FOOTER_NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-tags text-lg font-medium uppercase tracking-[1px] text-gray-50 transition-colors hover:text-brand"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className='font-tags text-lg font-medium uppercase tracking-[1px] text-gray-50 transition-colors hover:text-brand mt-[56px] md:mt-0'>
              SITE MAP
            </div>
          </nav>

          {/* Divider */}
          <div className="h-px w-full bg-tabs-divider" />

          {/* Copyright + legal + designed by */}
          <div className="flex flex-row flex-wrap items-start justify-between gap-6 pb-2 my-[10px]">
            <p className="font-tags text-sm font-medium uppercase tracking-[0.02em] text-nav-muted">
              {FOOTER_COPYRIGHT}
            </p>
            <div className="flex flex-row flex-wrap items-center gap-6">
              <Link
                href={FOOTER_PRIVACY_HREF}
                className="font-tags text-sm font-medium uppercase tracking-[0.02em] text-nav-muted transition-colors hover:text-gray-50"
              >
                {FOOTER_PRIVACY_LABEL}
              </Link>
              <Link
                href={FOOTER_TERMS_HREF}
                className="font-tags text-sm font-medium uppercase tracking-[0.02em] text-nav-muted transition-colors hover:text-gray-50"
              >
                {FOOTER_TERMS_LABEL}
              </Link>

            </div>
          </div>
        </div>
      </div>

    </footer>
  );
}
