import {useRouter} from 'next/router';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect, useState} from 'react';
import {successAuth} from '../containers/Login/reducer';
import Loader from '../components/LoadingIndicator/Loader';
import {getCookie} from "cookies-next";

const RequireAuth = (ComposedPage) => {
  return (props) => {

    const router = useRouter();
    const dispatch = useDispatch();
    const [authCheck, setAuthCheck] = useState(false)
    const selector = useSelector(state => state.auth)

    useEffect(() => {
      if (!selector.token) {
        const storedToken = getCookie("token");
        if (storedToken) {
          const uuid = getCookie("uuid");
          const role = getCookie("role");
          dispatch(successAuth({authorityList: [role], uuid, token: storedToken, authCheck: true}))
          setAuthCheck(true);
        } else {
          setAuthCheck(false);
          router.replace('/login');
        }
      } else {
        if (getCookie("token")) {
          setAuthCheck(true)
        } else {
          setAuthCheck(false);
          router.replace('/login');
        }
      }
    }, []);

    return (
      <>
        {
          authCheck ? <ComposedPage {...props}/> :
            <div style={{
              width: "100vw",
              height: "100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}>
              <Loader/>
            </div>
        }
      </>
    );
  };
};

export const NotRequireAuth = (ComposedPage) => {
  return (props) => {

    const router = useRouter();
    const dispatch = useDispatch();
    const selector = useSelector(state => state.auth);
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
      if (!selector.token) {
        const storedToken = getCookie("token");
        if (storedToken) {
          const uuid = getCookie("uuid");
          const role = getCookie("role");
          dispatch(successAuth({authorityList: [role], uuid, token: storedToken, authCheck: true}));
          setIsAuth(true);
          router.replace('/dashboard/' + uuid);
        } else {
          setIsAuth(false);
        }
      } else {
        if (getCookie("token")) {
          setIsAuth(true);
          router.replace('/dashboard/' + selector.user);
        } else {
          setIsAuth(false);
        }
      }
    }, []);

    return (
      <>
        {
          isAuth ? <div style={{
              width: "100vw",
              height: "100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}>
              <Loader/>
            </div> :
            <ComposedPage {...props}/>
        }
      </>
    );
  };
};

export default RequireAuth;