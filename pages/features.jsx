import React from "react";
// import PropTypes from "prop-types";
// import { connect } from "react-redux";
// import report from '!file-loader?name=[name].[ext]!../../images/NewCase.jpg';
// import ai from '!file-loader?name=[name].[ext]!../../images/Video-Audio.jpg';
// import client from '!file-loader?name=[name].[ext]!../../images/MyClients.jpg';
// import main from '!file-loader?name=[name].[ext]!../../images/MyCases.jpg';
import Header from "../components/Header/index2";
import Footer from "../components/Footer";
import Link from "next/link";
import Head from "next/head";


export class FeaturesDescription extends React.Component {
  render() {
    // const { item, match } = this.props;
    // if (item !== undefined) {
      return (
        <>
        <Head>
          <title>OnTheCase | Features</title>
        <meta property="keywords" content="Private investigator,Investigations,PI services,Private investigation,Investigator,Detective services,Background check,Infidelity investigations,Surveillance,Skip tracing,Asset search,Corporate investigation,Investigative services,Criminal investigation,Locate missing persons,Process serving,Legal investigation,Fraud investigation,Insurance investigation,Investigative agency,Private investigator case management software,Investigation case management software,PI case management system,Investigation management software,Case management for private investigators,Investigator case management tool,Private investigation case management,Digital case management for investigators,PI case management software solutions,Case tracking software for private investigators" ></meta>

        </Head>
        <Header/>
        <section className='relative'>
          <section className='grid-container'>
            <div className="content_component">
              <h2>First AI-Powered Investigative Software</h2>
              <p> OnTheCase can help investigators maximize efficiency and increase revenue. AI-powered Audio/Video analytics tools, case management features, and secure data storage – keep connected in the office or on the road.</p>
            </div></section>
            <section className='light-grey-bg'>
            <section className='grid-container'>
            <div className="grid-x grid-margin-x">
            <div className="cell medium-6 large-6 small-12">
            <div className='boxCenter'>
            <div><h3>Maintain Organization</h3>
            <p>Quickly organize case info, budget, video, audio, photos, and more. Generate reports in minutes.</p></div>
            </div></div>
            <div className="cell medium-6 large-6 small-12">
            <img src={"/images/MyCases.jpg"} alt='On The Case' /></div>
            </div>
            </section>
            </section>
            <section className='white-bg'>
            <section className='grid-container'>
            <div className="grid-x grid-margin-x">
            <div className="cell medium-6 large-6 small-12">
            <img src={"/images/Video-Audio.jpg"} alt='On The Case' /></div>
            <div className="cell medium-6 large-6 small-12">
            <div className='boxCenter'>
            <div><h3>AI Powered Audio & Video Analytics</h3>
            <p>Exclusive and powerful tools to help diagnose your imported case media. Face detection and comparison, text & label detection, and much more.</p></div>
            </div></div></div>
            </section></section>
          
            <section className='light-grey-bg'>
            <section className='grid-container'>
            <div className="grid-x grid-margin-x">
            <div className="cell medium-6 large-6 small-12">
            <div className='boxCenter'>
                <div><h3>Detailed Document Generation</h3>
            <p>Automate your workflow in minutes. Customize any document, create templates, and generate reports for records compliance.</p></div>
            </div></div>
            <div className="cell medium-6 large-6 small-12">
            <img src={"/images/NewCase.jpg"} alt='On The Case' /></div>
            </div>
            </section>
            </section>
            <section className='white-bg'>
            <section className='grid-container'>
            <div className="grid-x grid-margin-x">
            <div className="cell medium-6 large-6 small-12">
            <img src={"/images/MyClients.jpg"} alt='On The Case' /></div>
            <div className="cell medium-6 large-6 small-12">
              <div className='boxCenter'>
                <div>
              <h3>Manage Clients</h3>
            <p>Add clients, their intake reports, cases, hours worked on each case, amount billed, invoices payment status and more. Clients can be given ability to log in and access their reports</p></div>
            </div>
            </div>
            </div>
            </section>
            </section>
            <section className='grid-container'>
            <div className="blue-box">
              <h3>Try On The Case FREE for 30 Days</h3>
              <p>Try OnTheCase private investigator software free for 30 days with no obligation. Easy setup. No credit card required. Cancel anytime.</p>
              <div className='text-center'>
              <Link href={'/register'}>
                <span className="white-btn">30 Day Free Trial</span>
                </Link>
              </div>
            </div>
          </section>
        </section>
        {/* <Footer/> */}
        </>
      );
     }
}

FeaturesDescription.propTypes = {
//   item: PropTypes.object,
//   match: PropTypes.object,
};

export default FeaturesDescription;
