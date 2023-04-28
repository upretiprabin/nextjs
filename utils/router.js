
import { useRouter } from 'next/router';
import { useEffect } from 'react';


const RequireAuth = (ComposedPage,store) => {
  const Authentication = () => {
    const router = useRouter();
    useEffect(() => {
      if (!checkWidgetAuthorization(store)) router.replace('/landing');
    }, []);

    return (
      <>
        <ComposedPage />
      </>
    );
  };
  return Authentication;
};

export default RequireAuth;