import localFont from 'next/font/local';

/** Bandeins Strange – used for titles. */
export const fontTitle = localFont({
  src: '../../Fonts/Bandeins Strange Font Family/Bandeins-Strange-Variable-VF.ttf',
  variable: '--font-title',
  display: 'swap',
});

/** Be Vietnam Pro – used for body text. */
export const fontBody = localFont({
  src: [
    {
      path: '../../Fonts/Be_Vietnam_Pro/BeVietnamPro-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../Fonts/Be_Vietnam_Pro/BeVietnamPro-Italic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../Fonts/Be_Vietnam_Pro/BeVietnamPro-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../Fonts/Be_Vietnam_Pro/BeVietnamPro-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../Fonts/Be_Vietnam_Pro/BeVietnamPro-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-body',
  display: 'swap',
});

/** Rajdhani – used for tags. */
export const fontTags = localFont({
  src: [
    {
      path: '../../Fonts/Rajdhani/Rajdhani-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../Fonts/Rajdhani/Rajdhani-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../Fonts/Rajdhani/Rajdhani-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../Fonts/Rajdhani/Rajdhani-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../Fonts/Rajdhani/Rajdhani-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-tags',
  display: 'swap',
});
