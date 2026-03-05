'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Link } from '@/libs/I18nNavigation';
import { NAV_LINKS, NAV_CTA, NAV_LOGO } from '@/constants';
import { MobileMenu } from '@/public/assets/svgs';



/** Reusable navbar: full nav on desktop, logo + hamburger on tablet/mobile. */
export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className="flex justify-between items-center  py-2  xl:px-[40px] lg:py-[20px] md:px-4"
      role="banner"
    >
      <Link
        href="/home"
        className="flex h-8 w-[123px] shrink-0 items-center md:h-9 md:w-[135px] lg:h-10 lg:w-[154px] xl:h-11 xl:w-[169px]"
        aria-label={NAV_LOGO.alt}
      >
        <Image
          src={NAV_LOGO.src}
          alt={NAV_LOGO.alt}
          width={169}
          height={44}
          className="h-8 w-[123px] object-contain md:h-9 md:w-[135px] lg:h-10 lg:w-[154px] xl:h-11 xl:w-[169px]"
        />
      </Link>

      <nav
        className="hidden lg:flex shrink-0 flex-row items-center justify-center xl:gap-8 gap-4"
        aria-label="Main navigation"
      >
        {NAV_LINKS.map(link => (
          <Link
            key={link.href}
            href={link.href}
            className="text-sm font-normal capitalize leading-[18px] text-nav-text transition-colors hover:text-white"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="hidden lg:flex shrink-0 items-center gap-4">
        <Link
          href={NAV_CTA.href}
          className="cursor-on-brand btn-cta-gradient-hover flex h-11 w-[154px] shrink-0 flex-row items-center justify-center gap-2.5 rounded-full border border-brand px-6 py-3 text-base font-normal capitalize leading-5 text-nav-text transition-colors hover:text-white"
        >
          {NAV_CTA.label}
        </Link>
      </div>

      <button
        type="button"
        onClick={() => setMobileOpen(!mobileOpen)}
        className="flex  items-center justify-center lg:hidden"
        aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={mobileOpen}
      >
        <MobileMenu/>

      </button>

      {mobileOpen && (
        <div
          className="fixed inset-0 top-[76px] left-0 right-0 z-50 flex flex-col gap-6 bg-[#000008] px-6 py-8 lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile menu"
        >
          <nav className="flex flex-col gap-6" aria-label="Mobile navigation">
            {NAV_LINKS.map(link => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-lg font-normal capitalize text-nav-text transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={NAV_CTA.href}
              onClick={() => setMobileOpen(false)}
              className="cursor-on-brand btn-cta-gradient-hover mt-4 flex h-11 w-full max-w-[200px] flex-row items-center justify-center rounded-full border border-brand px-6 py-3 text-base font-normal capitalize text-nav-text transition-colors hover:text-white"
            >
              {NAV_CTA.label}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};
