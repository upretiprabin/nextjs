import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { Switch, useLocation } from "react-router-dom";

import "foundation-sites";
import { PrivateRoute } from "../../PrivateRoute";
import { PublicRoute } from "../../PublicRoute";
import DefaultLayout from "../DefaultLayout";
import Loadable from "react-loadable";

function Loading() {
  return <div>Loading...</div>;
}

const Login = Loadable({
  loader: () => import("../Login"),
  loading: Loading
});
const Register = Loadable({
  loader: () => import("../Register"),
  loading: Loading
});

const VerificationCode = Loadable({
  loader: () => import("../VerificationCode"),
  loading: Loading
});

const ForgotPassword = Loadable({
  loader: () => import("../ForgotPassword"),
  loading: Loading
});
const ResetPassword = Loadable({
  loader: () => import("../ResetPassword"),
  loading: Loading
});
const Landing = Loadable({
  loader: () => import("../Landing"),
  loading: Loading
});
const Pricing = Loadable({
  loader: () => import("../Pricing"),
  loading: Loading
});

const EditProfile = Loadable({
  loader:()=> import("../EditProfile"),
  loading:Loading
})

const UploadVideo = Loadable({
  loader:()=> import("../UploadVideo"),
  loading:Loading
})

const FeaturesDescription = Loadable({
  loader: () => import("../FeaturesDescription"),
  loading: Loading
});
const AppWrapper = styled.div``;

export default function App({ store }) {
  return (
    <AppWrapper>
      <Helmet titleTemplate="OnTheCase" defaultTitle="OnTheCase.io">
        <meta name="description" content="OnTheCase.io"/>
      </Helmet>
 {/* <Header/> */}
      <Switch>
        <PublicRoute exact path="/pricing" component={Pricing} store={store} availableWhileLoggedIn={true}/>
        <PublicRoute exact path="/FeaturesDescription" component={FeaturesDescription} store={store} availableWhileLoggedIn={true}/>
        <PublicRoute exact path="/login" component={Login} store={store}/>
        {/* <PublicRoute exact path="/uploadVideo" component={UploadVideo} store={store}/> */}
        <PublicRoute exact path="/landing" component={Landing} store={store}/>
        <PublicRoute exact path="/editProfile" component={EditProfile} store={store}/>
        <PublicRoute exact path="/register" component={Register} store={store}/>
        <PublicRoute exact path="/verificationCode/:userId" component={VerificationCode} store={store}/>
        <PublicRoute exact path="/forgotpassword" component={ForgotPassword} store={store}/>
        <PublicRoute exact path="/resetpassword/:userId" component={ResetPassword} store={store}/>
        <PrivateRoute path="/" component={DefaultLayout} store={store}/>
      </Switch>
    </AppWrapper>
  );
}
