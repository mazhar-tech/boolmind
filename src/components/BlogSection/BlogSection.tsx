import Link from 'next/link';
import {
  BLOG_HEADER,
  BLOG_POSTS,
  BLOG_READ_MORE_LABEL,
} from '@/constants';
import { BlogCard } from './BlogCard';
import { BlogSectionHeader } from './BlogSectionHeader';

/** Blog section: header (tag, title, description), horizontal cards, Read More button. */
export function BlogSection(props: { className?: string }) {
  return (
    <section
      className={`flex flex-col items-center gap-10 px-4 py-16 ${props.className ?? ''}`.trim()}
      aria-labelledby="blog-section-title"
    >
      <BlogSectionHeader
        tag={BLOG_HEADER.tag}
        title={BLOG_HEADER.title}
        titleId="blog-section-title"
        description={BLOG_HEADER.description}
      />

      {/* <xl: horizontal slider (mobile 1 + peek, md 2, lg 3) */}
      <div className="w-full max-w-[1280px] xl:hidden">
        <div className="-mx-4 overflow-x-auto px-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex snap-x snap-mandatory flex-row gap-5">
            {BLOG_POSTS.map((post) => (
              <div
                key={post.id}
                className="w-[calc(100%-20px)] shrink-0 snap-start md:w-[calc((100%-20px)/2)] lg:w-[calc((100%-40px)/3)]"
              >
                <BlogCard post={post} className="max-w-none" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* xl+: current grid */}
      <div className="hidden w-full max-w-[1280px] flex-wrap items-stretch justify-center gap-5 xl:flex">
        {BLOG_POSTS.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>

      <Link
        href="/blog"
        className="inline-flex items-center justify-center rounded-full border border-tabs-divider px-6 py-3 font-sans text-base font-normal capitalize leading-5 text-nav-text transition-opacity hover:opacity-90"
        style={{ background: 'rgba(11, 13, 52, 0.4)' }}
      >
        {BLOG_READ_MORE_LABEL}
      </Link>
    </section>
  );
}
