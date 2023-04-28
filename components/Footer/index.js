import React from "react";
import { withRouter } from "next/router";
import HeaderLink from "./HeaderLink";



function Footer(props) {
  let year = new Date().getFullYear()
  return (
    (props.router.pathname !=="/forgotpassword" && props.router.pathname !=="/login" && props.router.pathname !=="/register" && !props.router.pathname?.includes("verificationCode")) ?
  <footer> 
    <section className="grid-container footerBg">
      <div className="grid-x grid-margin-x medium-margin-collapse"  >
        <div className="cell shrink">
          <div className="dash-logo">
            © Copyright {year} On The Case
          </div>
        </div>
        <div className="cell auto" >
          <div className="dash-header clearfix">
            <div className="topNav" style={{"float":"right", paddingTop:20}}>
              <ul>
                <li>
                  <HeaderLink href={"/"} style={{color:"#fff",marginLeft:"20px"}}>
                      Home
                  </HeaderLink>
                </li>
                <li>
                  <HeaderLink href={"/privacypolicy"} style={{color:"#fff",marginLeft:"20px"}}>
                      Privacy Policy
                  </HeaderLink>
                </li>
                <li>
                  <HeaderLink href={"/pricing"} style={{color:"#fff",marginLeft:"20px"}}>
                      Pricing
                  </HeaderLink>
                </li>
                <li>
                  <HeaderLink href={"/features"} style={{color:"#fff",marginLeft:"20px"}}>
                      Features
                  </HeaderLink>
                </li>
                <li>
                  <HeaderLink href={"/contact-us"} style={{color:"#fff",marginLeft:"20px"}}>
                      Contact
                  </HeaderLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </footer>:<div/>)
}

export default withRouter(Footer);
