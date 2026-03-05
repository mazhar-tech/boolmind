import { Link } from '@/libs/I18nNavigation';
import type { AboutActionCard } from '@/constants/about';
import {
  AiIcon,
  AnalyticsIcon,
  ArrowUpRightIcon,
  EnterpriseSearchIcon,
} from '@/public/assets/svgs';

export function ActionCard(props: { card: AboutActionCard }) {
  const { card } = props;
  const isBrand = card.variant === 'brand';

  const Icon =
    card.id === '1'
      ? EnterpriseSearchIcon
      : card.id === '2'
        ? AnalyticsIcon
        : AiIcon;

  return (
    <div className="relative isolate flex min-h-[96px] min-w-0 flex-1 rounded-xl bg-[linear-gradient(153.43deg,rgba(255,91,53,0.4)_0%,rgba(73,14,0,0.4)_83.33%)] p-px">
      <Link
        href={card.href}
        className="group flex w-full flex-row items-center justify-center xl:gap-5 gap-2 rounded-[11px] bg-[rgba(5,6,26,0.96)] p-3 transition-opacity hover:opacity-90"
      >
        <div
          // className="flex h-[56px] w-[56px] shrink-0 items-center justify-center rounded-md shadow-[0_0_11.7966px_#000008] sm:h-[64px] sm:w-[64px] lg:h-[72px] lg:w-[72px]"
          aria-hidden
        >
          <Icon className="h-[50px] w-[50px] xl:w-[72px] xl:h-[72px] " />
        </div>

        <span
          className={`min-w-0 flex-1 font-title xl:text-lg text-base font-medium capitalize leading-6 transition-colors ${
            isBrand ? 'text-brand' : 'text-nav-text group-hover:text-brand group-focus-visible:text-brand'
            }`}
        >
          {card.label}
        </span>
        <span
          className={`shrink-0 transition-colors ${
            isBrand ? 'text-brand [&_svg]:stroke-brand' : 'text-nav-text group-hover:text-brand group-hover:[&_svg]:stroke-brand group-focus-visible:text-brand group-focus-visible:[&_svg]:stroke-brand'
            }`}
          aria-hidden
        >
          <ArrowUpRightIcon className="h-6 w-6" strokeWidth={1.5} />
        </span>
      </Link>
    </div>
  );
}

