import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import {useRouter} from "next/router";
import {getCookie} from "cookies-next";

const RootPage = () => {
  const selector = useSelector(state => state.auth);
  const router = useRouter();

  useEffect(() => {
    if (!selector.token) {
      const storedToken = getCookie('token');
      const user = getCookie('uuid');
      if (storedToken) {
        router.push(`/dashboard/${user}`);
      } else {
        router.push('/landing');
      }
    } else {
      router.push(`/dashboard/${selector.user}`);
    }
  });

  return (
    <article>
      <section className={'dashboard-section'}>
      {/*Empty*/}
      </section>
    </article>
  );
}

export default RootPage;
