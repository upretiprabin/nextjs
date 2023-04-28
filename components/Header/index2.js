import React from "react";
// import { FormattedMessage } from "react-intl";
// import PropTypes from "prop-types";
// import { connect } from "react-redux";
// import { createStructuredSelector } from "reselect";
// import { compose } from "redux";
import HeaderLink from "./HeaderLink";
import Image from 'next/image'

// import Logo from "../../images/logo-files/OnTheCase-Logo-tag.png";

// import "./style.css";
import cookie from "react-cookies";

import autocomplete from "autocompleter";
import { withRouter } from "next/router";

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      shown: false,
      searchOptions: []
    };
  }
  showHeaderCode() { 
      return (<header style={{background:"black"}}>
       <section className="grid-container">
        <div className="grid-x grid-margin-x medium-margin-collapse"  >
          <div className="cell shrink">
            <div className="dash-logo c-pointer">
              <HeaderLink href="/">
                <Image width={200} height={100} src={'/images/logo-files/OnTheCase-Logo-tag.png'} alt="On The Case"/>
              </HeaderLink>
            </div>
          </div>
          <div className="cell auto" >
          <div className="dash-header clearfix">
                <div className="topNav" style={{ 'float': 'right', paddingTop: 20, display: 'flex', paddingBottom: 15 }}>
                <ul>
                  <li>
                    <HeaderLink href={`/pricing`} style={{color:"#fff",marginLeft:"20px"}}>
                      Pricing
                    </HeaderLink>
                  </li>
                  <li>
                    <HeaderLink href={`/features`} style={{color:"#fff",marginLeft:"20px"}}>
                        Features
                    </HeaderLink>
                  </li>
                  <li>
                    <HeaderLink href={`/login`} style={{color:"#fff",marginLeft:"20px"}}>
                      Login/Register
                    </HeaderLink>
                  </li>
                  </ul>
                  <HeaderLink href={'/register'} className="ctabtn"  >Try On The Case for free</HeaderLink>
              </div>
            </div>
            </div>
        </div>
        </section>
      </header>);
    }
  render() {

    if(this.props.router.pathname !=="/login" && this.props.router.pathname !=="/register"){
    return (
    
      this.showHeaderCode()
    );
    } else{
      return(
        <div style={{display:"none"}}></div>
      )
    }
  }
}

Header.propTypes = {
  //investigator: PropTypes.any,
  //photoLink: PropTypes.string,
 // investigatorRequest: PropTypes.func,
 // photoRequest: PropTypes.func,
 // logoutRequest: PropTypes.func
};






export default withRouter(Header);
