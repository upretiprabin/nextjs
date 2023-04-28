import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
//import video from '!file-loader?name=[name].[ext]!../../images/video-thumb.png';
import play from '!file-loader?name=[name].[ext]!../../images/play.png';
import playBg from '!file-loader?name=[name].[ext]!../../images/bg-video.png';
import videoData from '!file-loader?name=[name].[ext]!../../images/explainer-video.mp4';
import development from '!file-loader?name=[name].[ext]!../../images/development.png';
import screen from '!file-loader?name=[name].[ext]!../../images/screen.png';
import building from '!file-loader?name=[name].[ext]!../../images/building.png';
import phone from '!file-loader?name=[name].[ext]!../../images/phone.png';
import graph from '!file-loader?name=[name].[ext]!../../images/graph.png';
import Header from "../../components/Header/index2";
import Footer from "../../components/Footer";
import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";
import EmailComponent from "../../components/EmailComponent";
import './style.css';
// import Integrations from "../../components/Integrations";

export class Landing extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    isOpen: false
  };
  handleSwitch = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }
  render() {
    console.log(this.state.isOpen);
   
   
      return (
        <>
      <Header/>
        <section className='relative'>
          <section className='grid-container'>
            <div className="content_component">
              <h2>First AI-Powered Investigative Software</h2>
              <p>Boost your investigative capabilities with enhanced AI-powered tools, case management features, and secure data storage – keep connected in the office or on the road.</p>
              <EmailComponent/>
              {/* <Integrations callbackUrl={'/landing'}/> */}
                {/* <div className=''>
                  <p>Your work email <span>Lets Start</span></p>
                </div> */}
                <div className="free-trial" >
                  <FaCheck style={{ color: 'green', fontSize: '1rem', marginRight: '10px' }} />
                  <p>30-day free trial</p>
                  <FaCheck style={{ color: 'green', fontSize: '1rem', marginRight: '10px' }} />
                  <p> No credit card required</p>
                </div>
            </div>
            <div className="video-box">
              <div className='video-bg'></div>
                <div className="play">

                  <img src={playBg} alt="Play" className="play-bg" />
                  <img id='btn-img' src={play} onClick={this.handleSwitch} alt="Play" />
                </div>

                {
                  this.state.isOpen ?
                    <dialog open={this.state.isOpen}>
                      <span className="close" onClick={this.handleSwitch}>x</span>
                      <video src={videoData} typeof='video/mp4' controls width={'100%'} height={'auto'} autoPlay={true} />
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
                  <img src={development} alt="development" />
                  <h5>Maintain Organization</h5>
                  <p>Quickly organize case info, budget, video, audio, photos, and more. Generate reports in minutes.</p>
                </div>
              </div>
              <div className="cell medium-4 large-4 small-12">
                
                <div className="card-box">
                  <img src={screen}  alt="development" />
                  <h5>AI-Powered Analytics</h5>
                  <p>Exclusive and powerful tools to help diagnose your imported case media. Face detection and comparison, text & label detection, and much more. </p>
                </div>
              </div>
              <div className="cell medium-4 large-4 small-12">
                <div className="card-box">
                  <img src={building}  alt="development" />
                  <h5>Detailed Document Generation</h5>
                  <p>Automate your workflow in minutes. Customize any document, create templates, and generate reports for records compliance.</p>
                </div>
              </div>
            </div>
            <div className="grid-x pt40 grid-margin-x">
              <div className="cell medium-4 large-4 small-12">
                <div className="card-box">
                  <img src={phone}  alt="development" />
                  <h5>Web-Based Flexibility</h5>
                  <p>Our platform is fully web-based keeping your business connected wherever you are located.</p>
                </div>
              </div>
              <div className="cell medium-4 large-4 small-12">
                <div className="card-box">
                  <img src={building}  alt="development" />
                  <h5>Protected Data Storage</h5>
                  <p>We understand your data is important. Keep your data secured, encrypted, and backed up in the cloud.</p>
                </div>
              </div>
              <div className="cell medium-4 large-4 small-12">
                <div className="card-box">
                  <img src={graph} alt="development" />
                  <h5>Complete Audits & Reports</h5>
                  <p>Easily add reports to any case section, add comments, and generate custom templates with ease.</p>
                </div>
              </div>
            </div>
            <div className="blue-box">
              <h3>Try On The Case FREE for 30 Days</h3>
              <p>Try OnTheCase’s investigative software free for 30 days with no obligation. Easy setup. No credit card required. Cancel anytime.</p>
              <div className='text-center'>
                  <Link to={'/register'}><span className="white-btn">Start My Free Trial</span></Link>
              </div>
            </div>
          </section>
        </section>
        <Footer/>
        </>
      );
     }
}

Landing.propTypes = {
  item: PropTypes.object,
  match: PropTypes.object,
};

export default connect()(Landing);
