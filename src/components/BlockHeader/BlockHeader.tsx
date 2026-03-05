import type { BlockHeaderProps } from '@/types';
import { BLOCK_HEADER } from '@/constants';

/** Reusable block header with tag, title, and description. */
export const BlockHeader = ({
  tag = BLOCK_HEADER.tag,
  title = BLOCK_HEADER.title,
  titleHighlight = BLOCK_HEADER.titleHighlight,
  description = BLOCK_HEADER.description,
  className,
}: BlockHeaderProps = {}) => (
  <header className={`container mx-auto flex flex-col items-start gap-6 self-stretch 2xl:px-[80px] px-4 pb-10  ${className ?? ''}`.trim()}>
    <span className="font-tags text-sm font-medium uppercase tracking-[1px] text-brand">
      {tag}
    </span>
    <div className="flex w-full flex-row flex-wrap items-end xl:gap-10 gap-5">
      <h2 className="max-w-[640px] flex-1 font-title xl:text-[60px] text-[32px] xl:font-normal font-medium xl:leading-[72px] capitalize text-gray-50">
        {title} <br />
        {titleHighlight}
      </h2>
      <div className="flex flex-row items-start gap-2.5 pb-[13px]">
        <p className="max-w-[637px] text-base   font-light leading-[26px] text-nav-text">
          {description}
        </p>
      </div>
    </div>
  </header>
);
