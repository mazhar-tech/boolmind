import Image from 'next/image';
import Link from 'next/link';
import type { BlogPost } from '@/constants';
import { ArrowUpRightIcon } from '@/public/assets/svgs';

/** Single blog post card with image, meta, title, description and author link. */
export function BlogCard(props: { post: BlogPost; className?: string }) {
  const href = props.post.link ?? '#';

  return (
    <article
      className={[
        'relative isolate flex h-full w-full max-w-[413px] shrink-0 flex-col items-start gap-5 rounded-3xl border border-white/9 p-5',
        props.className,
      ]
        .filter(Boolean)
        .join(' ')}
      style={{ background: 'rgba(5, 6, 26, 0.4)' }}
    >
      <div className="relative z-1 h-[209.81px] w-full self-stretch overflow-hidden rounded-lg bg-gray-600">
        {props.post.mediaImage ? (
          <Image
            src={props.post.mediaImage}
            alt=""
            fill
            className="object-cover"
            sizes="373px"
            unoptimized
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-nav-muted">
            <span className="text-sm">Blog</span>
          </div>
        )}
      </div>

      <div className="relative z-2 flex min-h-0 flex-1 flex-col gap-5 self-stretch">
        <div className="flex shrink-0 flex-row items-center  gap-1">
          <span className="font-tags text-sm font-medium uppercase tracking-[1px] text-nav-text">
            / {props.post.category}
          </span>
          <span className="font-tags text-sm font-medium uppercase tracking-[1px] text-brand">
            / {props.post.subcategory}
          </span>
        </div>

        {/* Fixed height for title + description so all cards stay equal (2 lines + 3 lines) */}
        <div className="flex shrink-0 flex-col gap-2" style={{ minHeight: '7.75rem' }}>
          <h3 className="line-clamp-2 font-title text-lg font-normal capitalize leading-6 text-gray-50">
            {props.post.title}
          </h3>
          <p className="line-clamp-3 font-sans text-sm font-light leading-[22px] text-nav-muted">
            {props.post.description}
          </p>
        </div>

        <div className="mt-auto flex shrink-0 flex-row items-center justify-between gap-4">
          <Link
            href={href}
            className="flex flex-row items-center gap-2.5 text-nav-text transition-opacity hover:opacity-80"
            aria-label={`Read post by ${props.post.authorName}`}
          >
            <div className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full bg-gray-600">
              {props.post.authorAvatar ? (
                <Image
                  src={props.post.authorAvatar}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="32px"
                  unoptimized
                />
              ) : null}
            </div>
            <span className="font-sans text-sm font-normal capitalize leading-[18px]">
              {props.post.authorName}
            </span>
            <span className="text-nav-text" aria-hidden>
              <ArrowUpRightIcon className="h-6 w-6" />
            </span>
          </Link>
          <time
            dateTime={props.post.date}
            className="font-sans text-xs font-light leading-6 text-nav-muted"
          >
            {props.post.date}
          </time>
        </div>
      </div>
    </article>
  );
}
