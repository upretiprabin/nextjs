import React from "react";
import {FaCheck} from "react-icons/fa";
// import { Link } from "react-router-dom";
import Link from 'next/link'
import EmailComponent from "../components/EmailComponent";
import Header from "../components/Header/index2";
import Image from 'next/image'
import Head from 'next/head'

export class Landing extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    isOpen: false
  };
  handleSwitch = () => {
    this.setState({isOpen: !this.state.isOpen});
  }

  render() {
    return (
      <>
        <Head>
          <title>OnTheCase | Home</title>
          <meta property="description" content="On the case io"></meta>
          <meta property="keywords"
                content="Private investigator,Investigations,PI services,Private investigation,Investigator,Detective services,Background check,Infidelity investigations,Surveillance,Skip tracing,Asset search,Corporate investigation,Investigative services,Criminal investigation,Locate missing persons,Process serving,Legal investigation,Fraud investigation,Insurance investigation,Investigative agency,Private investigator case management software,Investigation case management software,PI case management system,Investigation management software,Case management for private investigators,Investigator case management tool,Private investigation case management,Digital case management for investigators,PI case management software solutions,Case tracking software for private investigators"></meta>

        </Head>
        <Header/>
        <section className='relative'>
          <section className='grid-container'>
            <div className="content_component">
              <h2>First AI-Powered Investigative Software</h2>
              <p>Boost your investigative capabilities with enhanced AI-powered tools, case management features, and
                secure data storage – keep connected in the office or on the road.</p>
              <EmailComponent/>
              {/* <Integrations callbackUrl={'/landing'}/> */}
              {/* <div className=''>
                  <p>Your work email <span>Lets Start</span></p>
                </div> */}
              <div className="free-trial">
                <FaCheck style={{color: 'green', fontSize: '1rem', marginRight: '10px'}}/>
                <p>30-day free trial</p>
                <FaCheck style={{color: 'green', fontSize: '1rem', marginRight: '10px'}}/>
                <p> No credit card required</p>
              </div>
            </div>
            <div className="video-box">
              <div className='video-bg'></div>
              <div className="play">

                <Image width={723} height={400} src={'/images/bg-video.png'} alt="Play" className="play-bg"/>
                <Image width={80} height={80} id='btn-img' src={'/images/play.png'} onClick={this.handleSwitch}
                       alt="Play"/>
              </div>

              {
                this.state.isOpen ?
                  <dialog open={this.state.isOpen}>
                    <span className="close" onClick={this.handleSwitch}>x</span>
                    <video src={'/images/explainer-video.mp4'} typeof='video/mp4' controls width={'100%'}
                           height={'auto'} autoPlay={true}/>
                  </dialog> : ""
              }
            </div>
            <div className="content_component">
              <div className="head">Our Features</div>
              <h3>AI-Powered Case Management for Private Investigators</h3>
            </div>
            <div className="grid-x grid-margin-x">
              <div className="cell medium-4 large-4 small-12">

                <div className="card-box">
                  <Image width={100} height={100} src={'/images/development.png'} alt="development"/>
                  <h5>Maintain Organization</h5>
                  <p>Quickly organize case info, budget, video, audio, photos, and more. Generate reports in
                    minutes.</p>
                </div>
              </div>
              <div className="cell medium-4 large-4 small-12">

                <div className="card-box">
                  <Image width={100} height={100} src={'/images/screen.png'} alt="development"/>
                  <h5>AI-Powered Analytics</h5>
                  <p>Exclusive and powerful tools to help diagnose your imported case media. Face detection and
                    comparison, text & label detection, and much more. </p>
                </div>
              </div>
              <div className="cell medium-4 large-4 small-12">
                <div className="card-box">
                  <Image width={100} height={100} src={'/images/building.png'} alt="development"/>
                  <h5>Detailed Document Generation</h5>
                  <p>Automate your workflow in minutes. Customize any document, create templates, and generate reports
                    for records compliance.</p>
                </div>
              </div>
            </div>
            <div className="grid-x pt40 grid-margin-x">
              <div className="cell medium-4 large-4 small-12">
                <div className="card-box">
                  <Image width={100} height={100} src={'/images/phone.png'} alt="development"/>
                  <h5>Web-Based Flexibility</h5>
                  <p>Our platform is fully web-based keeping your business connected wherever you are located.</p>
                </div>
              </div>
              <div className="cell medium-4 large-4 small-12">
                <div className="card-box">
                  <Image width={100} height={100} src={'/images/building.png'} alt="development"/>
                  <h5>Protected Data Storage</h5>
                  <p>We understand your data is important. Keep your data secured, encrypted, and backed up in the
                    cloud.</p>
                </div>
              </div>
              <div className="cell medium-4 large-4 small-12">
                <div className="card-box">
                  <Image width={100} height={100} src={'/images/graph.png'} alt="development"/>
                  <h5>Complete Audits & Reports</h5>
                  <p>Easily add reports to any case section, add comments, and generate custom templates with ease.</p>
                </div>
              </div>
            </div>
            <div className="blue-box">
              <h3>Try On The Case FREE for 30 Days</h3>
              <p>Try OnTheCase’s investigative software free for 30 days with no obligation. Easy setup. No credit card
                required. Cancel anytime.</p>
              <div className='text-center'>
                <Link href={'/register'}><span className="white-btn"> Start My Free Trial</span></Link>
              </div>
            </div>
          </section>
        </section>
        {/* <Footer/> */}
      </>
    );
  }
}

export default Landing;
