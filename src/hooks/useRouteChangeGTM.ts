import { useRouter } from 'next/router';
import { useEffect } from 'react';
import * as gtag from '../helpers/googleTagManagerHelper';

const useRouteChangeGTM = () => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      console.log(url);
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
};

export default useRouteChangeGTM;
