import React from "react";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import HeaderLink from "../../components/Header/HeaderLink";
import {resetPassword} from "./actions";
import {changeEmail} from "./reducer";
import Head from "next/head";

const ForgotPassword = () => {

  const dispatch = useDispatch();
  const selector = useSelector(state => state.forgotPassword);
  let year = new Date().getFullYear();

  return (
    <>
      <Head>
        <title>OnTheCase | Forgot Password</title>
        <meta property="keywords"
              content="Private investigator,Investigations,PI services,Private investigation,Investigator,Detective services,Background check,Infidelity investigations,Surveillance,Skip tracing,Asset search,Corporate investigation,Investigative services,Criminal investigation,Locate missing persons,Process serving,Legal investigation,Fraud investigation,Insurance investigation,Investigative agency,Private investigator case management software,Investigation case management software,PI case management system,Investigation management software,Case management for private investigators,Investigator case management tool,Private investigation case management,Digital case management for investigators,PI case management software solutions,Case tracking software for private investigators"></meta>
      </Head>
      <section className="default-wrapper forgotPassword">
        <section className="inner">
          <div className="main-logo">
            <HeaderLink href={'/'}>

              <img src={'/images/logo-files/OnTheCase-Logo-tag.png'} alt="Main Logo"/>
            </HeaderLink>
          </div>
          <div className="form-description">
            <strong>Forgot Your Password?</strong>
            <p>Do not fear. We’ll email you instructions <br/>
              to reset your password.</p>
          </div>
          <div className="formField">
            <label htmlFor="email">
              Email
            </label>
            <input
              type="email" id="email" required="required" value={selector.email}
              onChange={(e) => {
                dispatch(changeEmail(e.target.value))
              }}/>
          </div>
          <div className="button-section clearfix">
            <button className="button-aqua" type="click" onClick={() => resetPassword(dispatch, selector.email)}>Reset
              Email
            </button>
            <HeaderLink className="links"
                        href={`login`}>Return to Login</HeaderLink>
          </div>
          <div className="clearfix copyright-text">© Copyright {year} On The Case</div>
        </section>
      </section>
    </>
  );
}

export default ForgotPassword;
