import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from 'components/A';
import LocaleToggle from 'containers/LocaleToggle';
import Wrapper from './Wrapper';
import messages from './messages';
import HeaderLink from "./HeaderLink";

function FooterNew() {
    let date = new Date();
  return (
  <footer>
    <section className="grid-container">
        <div className="grid-x grid-margin-x medium-margin-collapse"  >
          <div className="cell shrink">
              <p style={{display:'none'}}>Build Date :: {date.toString()}</p>
            <div className="dash-logo c-pointer">
            © Copyright 2022 On The Case
            </div>
          </div>
          <div className="cell auto" >
          <div className="dash-header clearfix">
              <div className="topNav" style={{'float':'right', paddingTop:20}}>
                <ul>

                  <li>
                    <HeaderLink to={`/pricing`} style={{color:"#fff",marginLeft:"20px"}}>
                      Pricing
                    </HeaderLink>
                  </li>
                  <li>
                    <HeaderLink to={`/featuresDescription`} style={{color:"#fff",marginLeft:"20px"}}>
                      Features
                    </HeaderLink>
                  </li>
                </ul>
              </div>
            </div>
            </div>
        </div>
        </section>
        <div className='footerBg'> &nbsp;</div>
  </footer>)
}

export default FooterNew;
