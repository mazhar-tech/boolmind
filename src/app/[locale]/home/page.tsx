import type { Metadata } from 'next';
import type { HomePageProps } from '@/types';
import { setRequestLocale } from 'next-intl/server';
import { HOME_META } from '@/constants';
import { Hero } from '@/components/Hero';
import { BlockHeader } from '@/components/BlockHeader';
import { HomeTabsWithCaseSection } from '@/components/HomeTabsWithCaseSection';
import { CaseBar } from '@/components/CaseSection/CaseBar';
import { EvolutionSection } from '@/components/EvolutionSection';
import { HowWeWorkSection } from '@/components/HowWeWorkSection';
import { CTASection } from '@/components/CTASection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { BlogSection } from '@/components/BlogSection/BlogSection';
import { Footer } from '@/components/Footer/Footer';
import { AboutSection } from '@/components/AboutSection/AboutSection';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: HOME_META.title,
    description: HOME_META.description,
  };
}

export default async function HomePage(props: HomePageProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <BlockHeader className="xl:mt-[160px] lg:mt-[100px] mt-[540px] min-[375px]:mt-[600px] min-[425px]:mt-[680px] min-[500px]:mt-[700px]" />
      <HomeTabsWithCaseSection />
      <div className="">
        <CaseBar />
      </div>
      <div className="relative overflow-hidden">
        {/* Single blur layer so orange and blue overlap and blend, no divider */}
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden
        >
          <div
            className="absolute -right-[10%] top-[15%] h-[20%] w-[40%] min-h-[600px] min-w-[400px] rounded-full bg-[rgba(255,91,53,0.2)] blur-[1200px]"
            aria-hidden
          />
          <div
            className="absolute bottom-[0%] -left-[20%] h-[20%] min-h-[500px] w-[50%] min-w-[400px] rounded-full bg-[rgba(255,91,53,0.2)] blur-[800px]"
            aria-hidden
          />
          <div
            className="absolute -left-[10%] top-[40%] h-[20%] min-h-[500px] w-[45%] min-w-[350px] rounded-full bg-[rgba(0,30,179,0.2)] blur-[900px] "
            aria-hidden
          />
          <div
            className="absolute -right-[10%] top-[40%] h-[20%] min-h-[500px] w-[45%] min-w-[350px] rounded-full bg-[rgba(0,30,179,0.2)] blur-[900px] "
            aria-hidden
          />
        </div>
        <HowWeWorkSection className="xl:mt-24 mt-10" />
        <EvolutionSection className="my-24" />
      </div>
      <CTASection />
      <TestimonialsSection />
      <div className="relative overflow-hidden">
        {/* Single blur layer so orange and blue overlap and blend, no divider */}
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div
            className="absolute -right-[10%] top-[15%] h-[20%] w-[40%] min-h-[600px] min-w-[400px] rounded-full bg-[rgba(255,91,53,0.2)] blur-[1200px]"
            aria-hidden
          />
          <div
            className="absolute bottom-[0%] -left-[20%] h-[20%] min-h-[500px] w-[50%] min-w-[400px] rounded-full bg-[rgba(255,91,53,0.2)] blur-[800px]"
            aria-hidden
          />
          <div
            className="absolute -left-[10%] top-[40%] h-[20%] min-h-[500px] w-[45%] min-w-[350px] rounded-full bg-[rgba(0,30,179,0.2)] blur-[900px]"
            aria-hidden
          />
          <div
            className="absolute -right-[10%] top-[40%] h-[20%] min-h-[500px] w-[45%] min-w-[350px] rounded-full bg-[rgba(0,30,179,0.2)] blur-[900px]"
            aria-hidden
          />
        </div>
        <AboutSection />
      <BlogSection />
      </div>
      <Footer />
    </>
  );
}
