import React from "react";
import HeaderLink from "../../components/Header/HeaderLink";
import Loader from "../../components/LoadingIndicator/Loader";
import {useRouter} from "next/router";
import VerificationInput from "react-verification-input";
import {useDispatch, useSelector} from "react-redux";
import {getCodeAgain, verifyCodeCall} from "./actions";
import {setVerificationState} from "./reducer";
import Head from "next/head";

const VerificationCode = () => {

  const router = useRouter();
  const dispatch = useDispatch();
  const selector = useSelector(st => st.verify);

  const handleCode = (value) => {
    dispatch(setVerificationState({verificationCode: value}))
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    verifyCodeCall(dispatch, {uuid: router.query.userId, code: selector.verificationCode}, router.replace);
  }

  let year = new Date().getFullYear();

  return (
    <>
      <Head>
        <title>OnTheCase | Verification</title>
        <meta property="keywords"
              content="Private investigator,Investigations,PI services,Private investigation,Investigator,Detective services,Background check,Infidelity investigations,Surveillance,Skip tracing,Asset search,Corporate investigation,Investigative services,Criminal investigation,Locate missing persons,Process serving,Legal investigation,Fraud investigation,Insurance investigation,Investigative agency,Private investigator case management software,Investigation case management software,PI case management system,Investigation management software,Case management for private investigators,Investigator case management tool,Private investigation case management,Digital case management for investigators,PI case management software solutions,Case tracking software for private investigators"></meta>
      </Head>
      <section className="default-wrapper verification">
        <section className="inner">
          <div className="main-logo">
            <HeaderLink href={'/'}>
              <img src={'/images/logo-files/OnTheCase-Logo-tag.png'} alt="Main Logo"/>
            </HeaderLink>
          </div>
          {selector?.loading && <Loader/>}
          {
            !selector?.loading &&
            <>
              <div className="form-description">
                <strong>Enter Verification Code</strong>
                <p>Please check your email for the verification code.</p>
              </div>
              <form>
                <div className="formField">
                  <label htmlFor="email">
                    Code
                  </label>
                  <VerificationInput length={4} onComplete={handleCode} autoFocus={true}/>
                </div>
                <div className="button-section clearfix">
                  <button className="button-aqua" type="submit" onClick={handleSubmit}>Submit Code</button>
                  <button className="links" onClick={
                    () => {
                      getCodeAgain(dispatch);
                    }
                  }>Get new code
                  </button>
                </div>
                <div className="clearfix copyright-text">© Copyright {year} On The Case</div>
              </form>
            </>}
        </section>
      </section>
    </>
  );
}

export default VerificationCode