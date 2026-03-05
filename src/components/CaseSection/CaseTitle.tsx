import type { CaseTitleProps } from '@/types';
import { Link } from '@/libs/I18nNavigation';

/** Reusable case title block with tag, title, and read more link. */
export const CaseTitle = ({
  tag,
  title,
  readMoreLabel,
  readMoreHref = '#read-more',
  className = '',
}: CaseTitleProps) => (
  <div className={`flex flex-col gap-6 ${className}`.trim()}>
    <span className="font-tags text-lg font-medium uppercase tracking-[0.02em] text-nav-muted">
      {tag}
    </span>
    <div className="flex flex-col gap-5">
      <h2 className="font-title xl:text-[32px] text-[24px] max-w-[664px] font-medium leading-[38px] capitalize text-[#DBDAEC]">
        {title}
      </h2>
      <Link
        href={readMoreHref}
        className="text-sm font-normal capitalize leading-[18px] text-brand underline transition-colors hover:text-brand/80"
      >
        {readMoreLabel}
      </Link>
    </div>
  </div>
);
