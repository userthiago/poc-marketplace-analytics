import Script from 'next/script';
import React from 'react';

const GoogleTagManager = () => (
  <>
    <Script
      strategy="afterInteractive"
      src="https://www.googletagmanager.com/gtag/js?id=G-16DKWX03VK"
    />
    <Script strategy="afterInteractive">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-16DKWX03VK');
      `}
    </Script>
  </>
);

export default GoogleTagManager;
