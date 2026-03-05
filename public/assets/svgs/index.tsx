import * as React from 'react';

/**
 * Quote (double quote) icon for testimonials.
 * @param props
 */
export const QuoteIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <path
      d="M15.25 10.25C15.25 7.48858 17.4886 5.25 20.25 5.25C20.8023 5.25 21.25 4.80228 21.25 4.25C21.25 3.69772 20.8023 3.25 20.25 3.25C16.384 3.25 13.25 6.38401 13.25 10.25V18C13.25 19.5188 14.4812 20.75 16 20.75H20C21.5188 20.75 22.75 19.5188 22.75 18V14C22.75 12.4812 21.5188 11.25 20 11.25H16C15.74 11.25 15.4884 11.2861 15.25 11.3535V10.25Z"
      fill="currentColor"
    />
    <path
      d="M3.25 10.25C3.25 7.48858 5.48858 5.25 8.25 5.25C8.80228 5.25 9.25 4.80228 9.25 4.25C9.25 3.69772 8.80228 3.25 8.25 3.25C4.38401 3.25 1.25 6.38401 1.25 10.25V18C1.25 19.5188 2.48122 20.75 4 20.75H8C9.51878 20.75 10.75 19.5188 10.75 18V14C10.75 12.4812 9.51878 11.25 8 11.25H4C3.73999 11.25 3.48842 11.2861 3.25 11.3535V10.25Z"
      fill="currentColor"
    />
  </svg>
);

/**
 * Chevron left for carousel prev.
 * @param props
 */
export const ChevronLeftIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <path d="M15 18l-6-6 6-6" />
  </svg>
);

/**
 * Chevron right for carousel next.
 * @param props
 */
export const ChevronRightIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <path d="M9 18l6-6-6-6" />
  </svg>
);

/**
 * Arrow up-right for external link (e.g. blog author).
 * @param props
 */
export const ArrowUpRightIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <path d="M7 17L17 7" />
    <path d="M7 7h10v10" />
  </svg>
);

/**
 * LinkedIn icon for footer social (20×20).
 * @param props
 */
export const LinkedInIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_d_99_6073)">
      <path d="M11.7966 15.7969C11.7966 13.5877 13.5875 11.7969 15.7966 11.7969H55.7966C58.0058 11.7969 59.7966 13.5877 59.7966 15.7969V55.7969C59.7966 58.006 58.0058 59.7969 55.7966 59.7969H15.7966C13.5875 59.7969 11.7966 58.006 11.7966 55.7969V15.7969Z" fill="url(#paint0_linear_99_6073)" shapeRendering="crispEdges" />
      <path fillRule="evenodd" clipRule="evenodd" d="M29.5466 27.2549C28.281 27.2549 27.2549 28.2809 27.2549 29.5465V42.0466C27.2549 43.3122 28.281 44.3382 29.5466 44.3382H42.0466C43.3123 44.3382 44.3383 43.3122 44.3383 42.0466V29.5465C44.3383 28.2809 43.3123 27.2549 42.0466 27.2549H29.5466ZM32.6791 31.1042C32.6791 31.6795 32.2127 32.1458 31.6374 32.1458H31.6299C31.0546 32.1458 30.5883 31.6795 30.5883 31.1042C30.5883 30.5289 31.0546 30.0625 31.6299 30.0625H31.6374C32.2127 30.0625 32.6791 30.5289 32.6791 31.1042ZM31.6309 32.8799C32.0912 32.8799 32.4643 33.253 32.4643 33.7132V39.9632C32.4643 40.4235 32.0912 40.7966 31.6309 40.7966C31.1707 40.7966 30.7976 40.4235 30.7976 39.9632V33.7132C30.7976 33.253 31.1707 32.8799 31.6309 32.8799ZM34.9641 32.8799C35.4244 32.8799 35.7974 33.253 35.7974 33.7132V33.7425C36.2877 33.4589 36.8569 33.2965 37.4641 33.2965C39.305 33.2965 40.7974 34.789 40.7974 36.6299V39.9632C40.7974 40.4235 40.4244 40.7966 39.9641 40.7966C39.5039 40.7966 39.1308 40.4235 39.1308 39.9632V36.6299C39.1308 35.7094 38.3845 34.9632 37.4641 34.9632C36.5436 34.9632 35.7974 35.7094 35.7974 36.6299V39.9632C35.7974 40.4235 35.4244 40.7966 34.9641 40.7966C34.5039 40.7966 34.1308 40.4235 34.1308 39.9632V33.7132C34.1308 33.253 34.5039 32.8799 34.9641 32.8799Z" fill="#A4A2C4" />
    </g>
    <defs>
      <filter id="filter0_d_99_6073" x="7.62939e-06" y="0.00025177" width="71.5932" height="71.5932" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset />
        <feGaussianBlur stdDeviation="5.89831" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0313726 0 0 0 1 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_99_6073" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_99_6073" result="shape" />
      </filter>
      <linearGradient id="paint0_linear_99_6073" x1="11.7966" y1="11.7969" x2="35.7966" y2="59.7969" gradientUnits="userSpaceOnUse">
        <stop stopColor="#161734" />
        <stop offset="1" stopColor="#080925" />
      </linearGradient>
    </defs>
  </svg>

);

/**
 * GitHub icon for footer social (20×20).
 * @param props
 */
export const GitHubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_d_4697_4870)">
      <path d="M11.7964 15.7969C11.7964 13.5877 13.5872 11.7969 15.7964 11.7969H55.7964C58.0055 11.7969 59.7964 13.5877 59.7964 15.7969V55.7969C59.7964 58.006 58.0055 59.7969 55.7964 59.7969H15.7964C13.5872 59.7969 11.7964 58.006 11.7964 55.7969V15.7969Z" fill="url(#paint0_linear_4697_4870)" shapeRendering="crispEdges" />
      <g clipPath="url(#clip0_4697_4870)">
        <path d="M35.7852 25.9062C30.3291 25.9062 25.9062 30.3994 25.9062 35.9419C25.9062 40.6223 29.0603 44.5541 33.3268 45.6641C33.324 44.5043 33.3203 43.0817 33.3181 42.6385C30.4672 43.2683 29.8657 41.4102 29.8657 41.4102C29.3997 40.207 28.7279 39.8869 28.7279 39.8869C27.798 39.2408 28.7979 39.254 28.7979 39.254C29.8269 39.3273 30.3689 40.3268 30.3689 40.3268C31.2828 41.9182 32.7662 41.4581 33.351 41.1922C33.443 40.5196 33.7084 40.0601 34.0017 39.8002C31.7256 39.5369 29.3327 38.6443 29.3327 34.6554C29.3327 33.5189 29.7331 32.5903 30.3886 31.8613C30.2822 31.5989 29.9314 30.5401 30.4879 29.1061C30.4879 29.1061 31.3484 28.8265 33.3066 30.1733C34.1242 29.9426 35.0008 29.8269 35.8717 29.8229C36.7425 29.8269 37.6198 29.9426 38.4388 30.1733C40.3949 28.8265 41.2541 29.1061 41.2541 29.1061C41.8119 30.5401 41.4611 31.5989 41.3547 31.8613C42.0117 32.5903 42.4093 33.5189 42.4093 34.6554C42.4093 38.654 40.012 39.5341 37.73 39.792C38.0975 40.1152 38.425 40.7485 38.425 41.7197C38.425 42.491 38.4215 44.2665 38.4182 45.6142C42.5952 44.4432 45.6641 40.5578 45.6641 35.9419C45.6641 30.3994 41.2412 25.9062 35.7852 25.9062Z" fill="#A4A2C4" />
      </g>
    </g>
    <defs>
      <filter id="filter0_d_4697_4870" x="-0.000236511" y="0.00025177" width="71.5932" height="71.5932" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset />
        <feGaussianBlur stdDeviation="5.89831" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0313726 0 0 0 1 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4697_4870" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4697_4870" result="shape" />
      </filter>
      <linearGradient id="paint0_linear_4697_4870" x1="11.7964" y1="11.7969" x2="35.7964" y2="59.7969" gradientUnits="userSpaceOnUse">
        <stop stopColor="#161734" />
        <stop offset="1" stopColor="#080925" />
      </linearGradient>
      <clipPath id="clip0_4697_4870">
        <rect width="20" height="20" fill="white" transform="translate(25.7964 25.7969)" />
      </clipPath>
    </defs>
  </svg>

);

/**
 * GitLab icon for footer social (20×20).
 * @param props
 */
export const GitLabIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_d_4697_4877)">
      <path d="M11.7964 15.7969C11.7964 13.5877 13.5872 11.7969 15.7964 11.7969H55.7964C58.0055 11.7969 59.7964 13.5877 59.7964 15.7969V55.7969C59.7964 58.006 58.0055 59.7969 55.7964 59.7969H15.7964C13.5872 59.7969 11.7964 58.006 11.7964 55.7969V15.7969Z" fill="url(#paint0_linear_4697_4877)" shapeRendering="crispEdges" />
      <g clipPath="url(#clip0_4697_4877)">
        <path d="M35.7899 44.518L39.3166 33.7695H32.2632L35.7899 44.518Z" fill="#E24329" />
        <path d="M35.7895 44.518L32.2628 33.7695H27.3203L35.7895 44.518Z" fill="#FC6D26" />
        <path d="M27.3203 33.7695L26.2486 37.036C26.201 37.1812 26.201 37.3376 26.2486 37.4828C26.2963 37.628 26.3891 37.7546 26.5138 37.8443L35.7895 44.518L27.3202 33.7696L27.3203 33.7695Z" fill="#FCA326" />
        <path d="M27.3203 33.7704H32.2628L30.1388 27.2967C30.0295 26.9636 29.5536 26.9636 29.4444 27.2967L27.3203 33.7704Z" fill="#E24329" />
        <path d="M35.7896 44.518L39.3163 33.7695H44.2588L35.7896 44.518Z" fill="#FC6D26" />
        <path d="M44.2587 33.7695L45.3304 37.036C45.3781 37.1812 45.3781 37.3376 45.3304 37.4828C45.2828 37.628 45.1899 37.7546 45.0652 37.8443L35.7896 44.518L44.2587 33.7696V33.7695Z" fill="#FCA326" />
        <path d="M44.2589 33.7704H39.3164L41.4405 27.2967C41.5498 26.9636 42.0256 26.9636 42.1349 27.2967L44.2589 33.7704Z" fill="#E24329" />
      </g>
    </g>
    <defs>
      <filter id="filter0_d_4697_4877" x="-0.000236511" y="0.00025177" width="71.5932" height="71.5932" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset />
        <feGaussianBlur stdDeviation="5.89831" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0313726 0 0 0 1 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4697_4877" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4697_4877" result="shape" />
      </filter>
      <linearGradient id="paint0_linear_4697_4877" x1="11.7964" y1="11.7969" x2="35.7964" y2="59.7969" gradientUnits="userSpaceOnUse">
        <stop stopColor="#161734" />
        <stop offset="1" stopColor="#080925" />
      </linearGradient>
      <clipPath id="clip0_4697_4877">
        <rect width="20" height="20" fill="white" transform="translate(25.7964 25.7969)" />
      </clipPath>
    </defs>
  </svg>

);

/**
 * Bitbucket icon for footer social (20×20).
 * @param props
 */
export const BitbucketIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_d_4697_4892)">
      <path d="M11.7964 15.7969C11.7964 13.5877 13.5872 11.7969 15.7964 11.7969H55.7964C58.0055 11.7969 59.7964 13.5877 59.7964 15.7969V55.7969C59.7964 58.006 58.0055 59.7969 55.7964 59.7969H15.7964C13.5872 59.7969 11.7964 58.006 11.7964 55.7969V15.7969Z" fill="url(#paint0_linear_4697_4892)" shapeRendering="crispEdges" />
      <g clipPath="url(#clip0_4697_4892)">
        <path d="M26.5153 26.752C26.4225 26.7508 26.3305 26.7702 26.2459 26.809C26.1612 26.8477 26.0859 26.9048 26.0253 26.9762C25.9647 27.0476 25.9203 27.1317 25.895 27.2224C25.8698 27.3132 25.8644 27.4085 25.8793 27.5015L28.5792 44.1504C28.6128 44.3542 28.716 44.5394 28.8707 44.6735C29.0254 44.8076 29.2217 44.882 29.425 44.8837H42.3773C42.5297 44.8857 42.6777 44.832 42.7945 44.7324C42.9112 44.6328 42.9888 44.4939 43.0132 44.341L45.7131 27.5048C45.7279 27.4117 45.7226 27.3164 45.6973 27.2257C45.6721 27.135 45.6276 27.0509 45.567 26.9795C45.5064 26.9081 45.4311 26.851 45.3464 26.8123C45.2618 26.7736 45.1698 26.7542 45.077 26.7554L26.5153 26.752ZM37.8838 38.7848H33.7498L32.6305 32.8444H38.8856L37.8838 38.7848Z" fill="#2684FF" />
        <path d="M44.8378 32.8359H38.8738L37.8728 38.7717H33.7421L28.8647 44.6526C29.0193 44.7883 29.2164 44.8638 29.4208 44.8655H42.3659C42.5182 44.8675 42.6661 44.8139 42.7828 44.7144C42.8994 44.6148 42.977 44.4761 43.0014 44.3233L44.8378 32.8359Z" fill="url(#paint1_linear_4697_4892)" />
      </g>
    </g>
    <defs>
      <filter id="filter0_d_4697_4892" x="-0.000236511" y="0.00025177" width="71.5932" height="71.5932" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset />
        <feGaussianBlur stdDeviation="5.89831" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0313726 0 0 0 1 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4697_4892" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4697_4892" result="shape" />
      </filter>
      <linearGradient id="paint0_linear_4697_4892" x1="11.7964" y1="11.7969" x2="35.7964" y2="59.7969" gradientUnits="userSpaceOnUse">
        <stop stopColor="#161734" />
        <stop offset="1" stopColor="#080925" />
      </linearGradient>
      <linearGradient id="paint1_linear_4697_4892" x1="4504.52" y1="416.539" x2="2633.56" y2="2756.97" gradientUnits="userSpaceOnUse">
        <stop offset="0.18" stopColor="#0052CC" />
        <stop offset="1" stopColor="#2684FF" />
      </linearGradient>
      <clipPath id="clip0_4697_4892">
        <rect width="20" height="20" fill="white" transform="translate(25.7964 25.7969)" />
      </clipPath>
    </defs>
  </svg>

);

/**
 * Play triangle for video thumb.
 * @param props
 */
export const PlayIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="24" fill="#FF5B35" />
    <path fillRule="evenodd" clipRule="evenodd" d="M18.25 17.7899C18.25 16.4208 19.7512 15.5819 20.9172 16.2995L31.0091 22.5099C32.1196 23.1933 32.1196 24.8074 31.0091 25.4907L20.9172 31.7011C19.7512 32.4187 18.25 31.5798 18.25 30.2107V17.7899Z" fill="#000008" />
  </svg>

);
export const NaxeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} width="137" height="41" viewBox="0 0 137 41" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50.3223 27.9306V12.1836H53.217L59.7572 24.5533V12.1836H61.9868V27.9306H59.0917L52.5515 15.7275V27.9306H50.3223Z" fill="white" />
    <path d="M63.8888 27.9306L69.2667 12.1836H72.0453L77.4229 27.9306H75.0459L73.4084 23.191H69.2139L70.0167 20.8656H72.6051L70.6611 15.24L66.266 27.9306H63.8888Z" fill="white" />
    <path d="M78.2676 27.9306L83.7088 20.0571L78.2676 12.1836H80.9931L85.1032 18.1524L89.2028 12.1836H91.9178L86.4871 20.0571L91.9178 27.9306H89.2028L85.1032 21.9507L80.9931 27.9306H78.2676Z" fill="white" />
    <path d="M105.473 14.5093V12.1836H93.8184V27.9284H105.473V25.5922H96.0507V14.5093H105.473Z" fill="white" />
    <path d="M105.472 18.5742H97.3154V20.8998H105.472V18.5742Z" fill="#6666FF" />
    <path d="M108.008 23.5785V16.6131C108.008 15.388 108.427 14.343 109.265 13.4792C110.103 12.6157 111.114 12.1836 112.297 12.1836H120.169V14.5094H112.297C111.727 14.5094 111.241 14.714 110.839 15.124C110.438 15.5336 110.237 16.0304 110.237 16.6132V23.5454C110.237 24.114 110.438 24.5976 110.839 24.9958C111.241 25.3948 111.727 25.5939 112.297 25.5939H120.169V27.9307H112.297C111.114 27.9307 110.103 27.5061 109.265 26.6572C108.427 25.8083 108.008 24.7822 108.008 23.5786V23.5785Z" fill="white" />
    <path d="M122.813 23.5011V16.6131C122.813 15.388 123.25 14.343 124.124 13.4792C124.997 12.6157 126.054 12.1836 127.293 12.1836H130.812C132.052 12.1836 133.108 12.6157 133.982 13.4792C134.855 14.343 135.292 15.388 135.292 16.6131V23.5011C135.292 24.7268 134.855 25.7712 133.982 26.635C133.108 27.4984 132.052 27.9306 130.812 27.9306H127.293C126.054 27.9306 124.997 27.4984 124.124 26.635C123.25 25.7712 122.813 24.7268 122.813 23.5011ZM125.043 23.5121C125.043 24.088 125.263 24.5809 125.703 24.9902C126.143 25.4002 126.674 25.6048 127.293 25.6048H130.812C131.431 25.6048 131.961 25.4002 132.402 24.9902C132.842 24.5809 133.062 24.088 133.062 23.5121V16.602C133.062 16.0261 132.842 15.5335 132.402 15.1239C131.961 14.7139 131.431 14.5093 130.812 14.5093H127.293C126.674 14.5093 126.143 14.7139 125.703 15.1239C125.263 15.5335 125.043 16.0261 125.043 16.602V23.5121Z" fill="white" />
    <path d="M9.43994 13.5079V20.9413C9.43994 26.2191 5.35675 30.4986 0.321289 30.4986V13.5078L9.43994 13.5079Z" fill="#6666FF" />
    <path d="M28.6905 26.6094V40.0604H0.321289V30.503H19.5718V26.6094H28.6905Z" fill="#6666FF" />
    <path d="M37.812 9.61719V26.6079H28.6934V19.1745C28.6934 13.8967 32.7765 9.61719 37.812 9.61719Z" fill="#6666FF" />
    <path d="M37.8106 0.0585938V9.61594H18.56V13.5097H9.44141V0.0585938H37.8106Z" fill="#6666FF" />
  </svg>

);

/**
 * Vertical timeline with brand gradient line and flip/swap icon in the center.
 * @param props
 */
export const FlipIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    width="48"
    height="612"
    viewBox="0 0 48 612"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M24 6L24 606"
      stroke="url(#paint0_linear_2118_16105)"
      strokeWidth="1.5"
    />
    <g filter="url(#filter0_f_2118_16105)">
      <path
        d="M24 6L24 606"
        stroke="url(#paint1_linear_2118_16105)"
        strokeWidth="3"
      />
    </g>
    <rect y="281" width="48" height="48" rx="24" fill="#FF5B35" />
    <path
      d="M32.5002 307.99L27.4902 313.01"
      stroke="#000008"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.5 307.99H32.5"
      stroke="#000008"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.5 302.01L20.51 296.99"
      stroke="#000008"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M32.5 302.01H15.5"
      stroke="#000008"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <filter
        id="filter0_f_2118_16105"
        x="16.5"
        y="0"
        width="15"
        height="612"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur
          stdDeviation="3"
          result="effect1_foregroundBlur_2118_16105"
        />
      </filter>
      <linearGradient
        id="paint0_linear_2118_16105"
        x1="24.5"
        y1="6"
        x2="24.5"
        y2="606"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF5B35" stopOpacity="0" />
        <stop offset="0.5" stopColor="#FF5B35" />
        <stop offset="1" stopColor="#FF5B35" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_2118_16105"
        x1="24.5"
        y1="6"
        x2="24.5"
        y2="606"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF5B35" stopOpacity="0" />
        <stop offset="0.5" stopColor="#FF5B35" />
        <stop offset="1" stopColor="#FF5B35" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);

export const MobileMenu = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M15 17C15 16.4477 15.4477 16 16 16H32C32.5523 16 33 16.4477 33 17C33 17.5523 32.5523 18 32 18H16C15.4477 18 15 17.5523 15 17Z" fill="#A4A2C4" />
      <path fillRule="evenodd" clipRule="evenodd" d="M15 24C15 23.4477 15.4477 23 16 23H32C32.5523 23 33 23.4477 33 24C33 24.5523 32.5523 25 32 25H16C15.4477 25 15 24.5523 15 24Z" fill="#A4A2C4" />
      <path fillRule="evenodd" clipRule="evenodd" d="M15 31C15 30.4477 15.4477 30 16 30H32C32.5523 30 33 30.4477 33 31C33 31.5523 32.5523 32 32 32H16C15.4477 32 15 31.5523 15 31Z" fill="#A4A2C4" />
    </svg>

  );
};
export const AiIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d_4823_9670)">
        <rect x="11.7964" y="11.7969" width="72" height="72" rx="6" fill="url(#paint0_linear_4823_9670)" shapeRendering="crispEdges" />
        <path fillRule="evenodd" clipRule="evenodd" d="M50.7132 35.2559C49.5405 35.2559 48.492 35.7883 47.7966 36.6247C47.101 35.7884 46.0526 35.256 44.8799 35.256C43.0617 35.256 41.5423 36.5358 41.1736 38.2437C39.1343 38.6154 37.5882 40.401 37.5882 42.5476C37.5882 42.994 37.6553 43.4255 37.78 43.8321C36.2884 44.529 35.2549 46.042 35.2549 47.7976C35.2549 49.5533 36.2884 51.0662 37.78 51.7632C37.6553 52.1698 37.5882 52.6012 37.5882 53.0476C37.5882 55.1943 39.1343 56.9798 41.1736 57.3515C41.5423 59.0595 43.0617 60.3393 44.8799 60.3393C46.0526 60.3393 47.1011 59.8069 47.7966 58.9705C48.4921 59.8068 49.5405 60.3391 50.7132 60.3391C52.5315 60.3391 54.0507 59.0594 54.4195 57.3514C56.4588 56.9797 58.0049 55.1943 58.0049 53.0475C58.0049 52.6011 57.9378 52.1697 57.8131 51.7631C59.3047 51.0661 60.3382 49.5532 60.3382 47.7975C60.3382 46.0419 59.3047 44.5289 57.8131 43.832C57.9378 43.4254 58.0049 42.9939 58.0049 42.5475C58.0049 40.4009 56.4589 38.6153 54.4195 38.2436C54.0508 36.5357 52.5315 35.2559 50.7132 35.2559ZM45.7227 43.4226C45.3567 43.4226 45.0293 43.6504 44.9022 43.9937L42.3096 50.9937C42.1418 51.4468 42.3731 51.9502 42.8262 52.1181C43.2794 52.286 43.7828 52.0546 43.9507 51.6015L44.7762 49.3726H47.3174L48.1429 51.6015C48.3108 52.0546 48.8142 52.286 49.2674 52.1181C49.7205 51.9502 49.9519 51.4468 49.784 50.9937L47.1914 43.9937C47.0642 43.6504 46.7369 43.4226 46.3709 43.4226H45.7227ZM46.6692 47.6226H45.4243L46.0468 45.9419L46.6692 47.6226ZM52.7551 44.2976C52.7551 43.8143 52.3634 43.4226 51.8801 43.4226C51.3969 43.4226 51.0051 43.8143 51.0051 44.2976V51.2976C51.0051 51.7808 51.3969 52.1726 51.8801 52.1726C52.3634 52.1726 52.7551 51.7808 52.7551 51.2976V44.2976Z" fill="#A4A2C4" />
      </g>
      <defs>
        <filter id="filter0_d_4823_9670" x="-0.000236511" y="0.00025177" width="95.5932" height="95.5932" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset />
          <feGaussianBlur stdDeviation="5.89831" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0313726 0 0 0 1 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4823_9670" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4823_9670" result="shape" />
        </filter>
        <linearGradient id="paint0_linear_4823_9670" x1="11.7964" y1="11.7969" x2="47.7964" y2="83.7969" gradientUnits="userSpaceOnUse">
          <stop stopColor="#161734" />
          <stop offset="1" stopColor="#080925" />
        </linearGradient>
      </defs>
    </svg>
  );
};
export const AnalyticsIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d_4823_22603)">
        <rect x="11.7964" y="11.7969" width="72" height="72" rx="6" fill="url(#paint0_linear_4823_22603)" shapeRendering="crispEdges" />
        <path fillRule="evenodd" clipRule="evenodd" d="M39.3382 36.1309C37.5663 36.1309 36.1299 37.5673 36.1299 39.3392V56.8392C36.1299 58.6111 37.5663 60.0475 39.3382 60.0475H56.8382C58.6101 60.0475 60.0465 58.6111 60.0465 56.8392V39.3392C60.0465 37.5673 58.6101 36.1309 56.8382 36.1309H39.3382ZM48.9632 42.2559C48.9632 41.7726 48.5714 41.3809 48.0882 41.3809C47.605 41.3809 47.2132 41.7726 47.2132 42.2559V53.9225C47.2132 54.4058 47.605 54.7975 48.0882 54.7975C48.5714 54.7975 48.9632 54.4058 48.9632 53.9225V42.2559ZM54.7965 46.9225C54.7965 46.4393 54.4048 46.0475 53.9215 46.0475C53.4383 46.0475 53.0465 46.4393 53.0465 46.9225V53.9225C53.0465 54.4058 53.4383 54.7975 53.9215 54.7975C54.4048 54.7975 54.7965 54.4058 54.7965 53.9225V46.9225ZM43.1299 49.2559C43.1299 48.7726 42.7381 48.3809 42.2549 48.3809C41.7716 48.3809 41.3799 48.7726 41.3799 49.2559V53.9225C41.3799 54.4058 41.7716 54.7975 42.2549 54.7975C42.7381 54.7975 43.1299 54.4058 43.1299 53.9225V49.2559Z" fill="#FF5B35" />
      </g>
      <defs>
        <filter id="filter0_d_4823_22603" x="-0.000236511" y="0.00025177" width="95.5932" height="95.5932" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset />
          <feGaussianBlur stdDeviation="5.89831" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0313726 0 0 0 1 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4823_22603" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4823_22603" result="shape" />
        </filter>
        <linearGradient id="paint0_linear_4823_22603" x1="11.7964" y1="11.7969" x2="47.7964" y2="83.7969" gradientUnits="userSpaceOnUse">
          <stop stopColor="#161734" />
          <stop offset="1" stopColor="#080925" />
        </linearGradient>
      </defs>
    </svg>
  );
};
export const EnterpriseSearchIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d_4823_9699)">
        <rect x="11.7964" y="11.7969" width="72" height="72" rx="6" fill="url(#paint0_linear_4823_9699)" shapeRendering="crispEdges" />
        <path fillRule="evenodd" clipRule="evenodd" d="M42.0587 36.6552C42.3449 35.6535 43.2605 34.9629 44.3023 34.9629H49.5422C50.584 34.9629 51.4996 35.6535 51.7857 36.6552L52.7107 39.8924L50.4672 40.5334L49.5422 37.2962H44.3023L43.3773 40.5334L41.1338 39.8924L42.0587 36.6552Z" fill="#A4A2C4" />
        <path fillRule="evenodd" clipRule="evenodd" d="M48.6714 54.0114C48.6714 51.0948 51.0358 48.7305 53.9523 48.7305C56.8689 48.7305 59.2332 51.0948 59.2332 54.0114C59.2332 55.0486 58.9342 56.016 58.4177 56.8319L59.9949 58.4041C60.4513 58.859 60.4525 59.5977 59.9976 60.0541C59.5427 60.5104 58.804 60.5116 58.3477 60.0567L56.7667 58.4808C55.952 58.9948 54.9869 59.2923 53.9523 59.2923C51.0358 59.2923 48.6714 56.9279 48.6714 54.0114ZM53.9523 51.0638C52.3243 51.0638 51.0047 52.3834 51.0047 54.0114C51.0047 55.6394 52.3243 56.959 53.9523 56.959C55.5803 56.959 56.8999 55.6394 56.8999 54.0114C56.8999 52.3834 55.5803 51.0638 53.9523 51.0638Z" fill="#A4A2C4" />
        <path d="M38.1712 39.1074C36.3993 39.1074 34.9629 40.5438 34.9629 42.3158V55.7324C34.9629 57.5044 36.3993 58.9408 38.1712 58.9408H48.9366C47.6902 57.672 46.9212 55.9325 46.9212 54.0134C46.9212 50.1303 50.0691 46.9824 53.9521 46.9824C55.8713 46.9824 57.6108 47.7513 58.8796 48.9979V42.3158C58.8796 40.5438 57.4432 39.1074 55.6712 39.1074H38.1712Z" fill="#A4A2C4" />
      </g>
      <defs>
        <filter id="filter0_d_4823_9699" x="-0.000236511" y="0.00025177" width="95.5932" height="95.5932" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset />
          <feGaussianBlur stdDeviation="5.89831" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0313726 0 0 0 1 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4823_9699" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4823_9699" result="shape" />
        </filter>
        <linearGradient id="paint0_linear_4823_9699" x1="11.7964" y1="11.7969" x2="47.7964" y2="83.7969" gradientUnits="userSpaceOnUse">
          <stop stopColor="#161734" />
          <stop offset="1" stopColor="#080925" />
        </linearGradient>
      </defs>
    </svg>

  );
};
