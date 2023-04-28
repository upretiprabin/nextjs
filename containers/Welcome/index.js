import React from "react";
import PropTypes from "prop-types";
import {Helmet} from "react-helmet";
import {connect} from "react-redux";
import {compose} from "redux";
import {createStructuredSelector} from "reselect";

import injectReducer from "utils/injectReducer";
import injectSaga from "utils/injectSaga";
import {makeSelectError, makeSelectLoading} from "containers/App/selectors";
import reducer from "./reducer";
import saga from "./saga";
import "./style.css";
import bxbriefcase from "../../images/welcomeicon/bx-briefcase-alt 2.png";
import addedite from "../../images/welcomeicon/bx-file-plus 2.png";
import involediconwel from "../../images/welcomeicon/bx-contact 2.png";
import correct from "../../images/welcomeicon/bx-task 2.png";
import fileicon from "../../images/welcomeicon/bx-edit 2.png";
import {makeSelectRole, makeSelectToken, makeSelectUUID} from "../App/selectors";
import HeaderLink from "components/Header/HeaderLink";
import {getCookie} from "cookies-next";

export class Welcome extends React.Component {
  render() {
    const { loading, error } = this.props;
    const { params } = this.props.match;
    let investigatorId = params.investigatorId;
    if (investigatorId === undefined) {
      investigatorId = getCookie("uuid");
    }
    return (
      <article>
        <Helmet>
          <title>Welcome</title>
          <meta name="description" content="CreateNewCase Page"/>
        </Helmet>
        <section className="dashboard-section">
          <div className="grid-x grid-margin-x medium-margin-collapse">
            <div className="cell auto">
              <section className="text-editor-section">
                <div className="top-row-text-editor">
                  <div className="text-center padding-top20">
                    <div className="welcome-title">Welcome to On The Case!</div>
                    <div className="sub-title-wel">
                      Start your new case below.
                    </div>
                  </div>
                </div>
              </section>
              <div className="text-editor bg-transperent">
                <div className="welcome-box">
                  <div className="heading-title">
                    Automate your day-to-day tasks. More accessibility. More
                    focus
                  </div>
                  <div className="welcome-box-icon">
                    <img src={bxbriefcase} alt="bxbriefcase" className=""/>
                    <img src={addedite} alt="addedite" className=""/>
                    <img src={involediconwel} alt="involediconwel" className=""/>
                    <img src={correct} alt="correct" className=""/>
                    <img src={fileicon} alt="fileicon" className=""/>
                  </div>
                  <div className="grid-x grid-margin-x align-center">
                    <div className="small-9 medium-9 large-9">
                      <HeaderLink to={`/createnewcase/${investigatorId}/`} className="button-aqua width-auto">
                        CREATE YOUR NEW CASE
                      </HeaderLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </article>
    );
  }
}

Welcome.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  token: PropTypes.any,
  uuid: PropTypes.any,
  role: PropTypes.any
};

export function mapDispatchToProps(dispatch) {
  return {};
}

const mapStateToProps = createStructuredSelector({
  token: makeSelectToken(),
  uuid: makeSelectUUID(),
  role: makeSelectRole(),
  loading: makeSelectLoading(),
  error: makeSelectError()
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReducer = injectReducer({ key: "welcome", reducer });
const withSaga = injectSaga({ key: "welcome", saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(Welcome);
