import React from "react";
import HeaderLink from "../components/Header/HeaderLink";
import Image from 'next/image';
import LoginLink from "../components/LoginLink";
import FormikForm from "../components/Formik";
import {useDispatch, useSelector} from 'react-redux';
import * as Yup from "yup";
import {NotRequireAuth} from "../helpers/requireAuth";
import {loadingAuth} from "../containers/Login/reducer";
import Link from "next/link";
import Head from "next/head";

const initialValue = {
  username: "",
  password: "",
}

const registerValidation = Yup.object({
  username: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
});

const LoginPage = () => {
  const dispatch = useDispatch();
  const selector = useSelector(state => state.auth);

  const handleSubmit = (values) => {
    dispatch(loadingAuth({req: values}))
  }

  const showError = (err) => {
    if (err === "" || err === undefined || err == null) {
      return "";
    }
    if (err === "Sorry, we could not find an account with that username.") {
      return (
        <div className="error-message">
          <div className="left-icon">
            <img src={'/images/bx-x-circle-cross.png'}/>
          </div>
          <div className="message-text">
            Sorry, we could not find an account with that
            username. Let’s help you <Link href="/forgotpassword">recover your account.</Link>
          </div>
        </div>
      );
    } else {
      return (
        <div className="error-message">
          <div className="left-icon">
            <img src={'/images/bx-x-circle-cross.png'}/>
          </div>
          <div className="message-text">
            {err}
          </div>
        </div>);
    }
  }

  let year = new Date().getFullYear();
  return (
    <>
      <Head>
        <title>OnTheCase | Login</title>
        <meta property="keywords"
              content="Private investigator,Investigations,PI services,Private investigation,Investigator,Detective services,Background check,Infidelity investigations,Surveillance,Skip tracing,Asset search,Corporate investigation,Investigative services,Criminal investigation,Locate missing persons,Process serving,Legal investigation,Fraud investigation,Insurance investigation,Investigative agency,Private investigator case management software,Investigation case management software,PI case management system,Investigation management software,Case management for private investigators,Investigator case management tool,Private investigation case management,Digital case management for investigators,PI case management software solutions,Case tracking software for private investigators"></meta>
      </Head>
      <section className="default-container">
        <section className="login-cover-section">
          <div className="login-header">
            <div className="main-logo">
              <HeaderLink href={"/"}>

                <Image width={200} height={100} src={'/images/logo-files/OnTheCase-Logo-tag.png'} alt="Main Logo"/>
              </HeaderLink>
            </div>
            <div className="logo-description">
              Private Investigator&apos;s job made easy.
            </div>
          </div>
          <div className=" login-signup-penal">
            <div className="form-description">
              <strong>Automate your day-to-day tasks. </strong>
              <p>Generating reports, researching subjects, client invoice and payments, surveillance, chat, calendar and
                more.</p>
            </div>
            <div className="phone_wrapper">
              <div className="form-header-top">
                <div className="tab-nav">
                  <div className="tab tab1 login active">
                    <div className="block">Login</div>
                  </div>
                  <div className="tab tab2 register">
                    <div className="block">
                      <LoginLink href="/register">Register</LoginLink>
                    </div>
                  </div>
                  <div className="indicator"/>
                </div>
              </div>
              {
                <main>
                  <div className="tab_reel">
                    <div className="tab_panel2">
                      <FormikForm isFull={true} onSubmit={handleSubmit} validationSchema={registerValidation}
                                  initialValues={initialValue}
                                  fields={[{type: "text", label: "Username", name: "username"}, {
                                    type: "password",
                                    label: "Password",
                                    name: "password"
                                  }]} action={() => (<> <HeaderLink className="forgotpassword"
                                                                    href={"/forgotpassword"}>Forgot
                        Password?</HeaderLink>
                        <button type="submit">Login</button>
                      </>)}/>
                      {showError(selector?.errorMessage)}
                    </div>
                  </div>
                </main>}
              <div className="dot-indicator">
              </div>
            </div>
            <div className="form-footer">© Copyright {year} On The Case</div>
          </div>
        </section>
      </section>
    </>
  );
}

export default NotRequireAuth(LoginPage)