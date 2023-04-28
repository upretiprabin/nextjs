import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import NProgress from 'nprogress';

const RouteLeavingPrompt = ({ when, message }) => {
  const router = useRouter();
  const [isBlocking, setIsBlocking] = useState(false);

  const handleRouteChangeStart = (url) => {
    if (isBlocking) {
      const result = window.confirm(message);
      if (!result) {
        NProgress.done(true);
        throw 'Route Change Cancelled';
      }
    }
  };

  const handleRouteChangeComplete = (url) => {
    if (isBlocking) {
      setIsBlocking(false); // unblock the route change
      NProgress.done();
      router.push(url); // navigate to the new page
    }
  };

  const handleBeforeUnload = (event) => {
    if (isBlocking) {
      event.preventDefault();
      event.returnValue = '';
    }
  };

  useEffect(() => {
    router.events.on('routeChangeStart', handleRouteChangeStart);
    router.events.on('routeChangeComplete', handleRouteChangeComplete);
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart);
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [isBlocking, message, router]);

  useEffect(() => {
    if (when) {
      setIsBlocking(true);
    } else {
      setIsBlocking(false);
    }
  }, [when]);

  return null;
};

export default RouteLeavingPrompt;