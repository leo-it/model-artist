import localFont from 'next/font/local'

export const helvetica = localFont({
  src: [
    {
      path: '../public/fonts/HelveticaNeue-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/HelveticaNeue-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/HelveticaNeue-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
}) 