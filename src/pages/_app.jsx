import { useEffect, useRef } from 'react';
import { appWithTranslation } from 'next-i18next';
import nextI18NextConfig from '../../next-i18next.config';

import Footer from '@/components/Footer';
import { Header } from '@/components/Header';

import '@/styles/tailwind.css';
import 'focus-visible';
import Script from 'next/script';

function usePrevious(value) {
  let ref = useRef();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

const App = ({ Component, pageProps, router }) => {
  let previousPathname = usePrevious(router.pathname);

  return (
    <>
      <div className="fixed inset-0 flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
        </div>
      </div>
      <div className="relative">
        <Header />
        <main>
          {/* google analytics -- Start */}
          <Script
            strategy="afterInteractive" // load after page renders
            src="https://www.googletagmanager.com/gtag/js?id=G-VQWZDT19DJ"
          />

          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-VQWZDT19DJ');
            `}
          </Script>
          {/* google analytics -- End */}

          <Component previousPathname={previousPathname} {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default appWithTranslation(App, nextI18NextConfig);
