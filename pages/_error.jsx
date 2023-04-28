import React, {useEffect} from 'react'
import Header from '../components/Header/index2'
import NProgress from 'nprogress';
import {useRouter} from "next/router";
import Head from "next/head";

const ErrorPage = ({statusCode, goToHomePage}) => {

  useEffect(() => {
    NProgress.done(true);
  });

  return (
    <>
      <Head>
        <title>OnTheCase | Error</title>
        <meta property="keywords"
              content="Private investigator,Investigations,PI services,Private investigation,Investigator,Detective services,Background check,Infidelity investigations,Surveillance,Skip tracing,Asset search,Corporate investigation,Investigative services,Criminal investigation,Locate missing persons,Process serving,Legal investigation,Fraud investigation,Insurance investigation,Investigative agency,Private investigator case management software,Investigation case management software,PI case management system,Investigation management software,Case management for private investigators,Investigator case management tool,Private investigation case management,Digital case management for investigators,PI case management software solutions,Case tracking software for private investigators"></meta>
      </Head>
      <Header/>
      <div className='errorPage'>
        <div className='errorPageWrapper'>

          <div className='leftError'>
            <h1><span>{statusCode}</span> <br/><span className='message'>ERROR</span></h1>
          </div>
          <div className='rightError'>
            <h2>Something went wrong <br/> on our server.</h2>
            <button onClick={goToHomePage}><p className='link'>Go back to homepage</p></button>
          </div>
        </div>
      </div>
    </>
  )
}

ErrorPage.getInitialProps = ({res, err}) => {
  let statusCode = res ? res.statusCode : err ? err.statusCode : 404
  statusCode = statusCode ? statusCode : 500;
  return {statusCode}
}

export default ErrorPage;