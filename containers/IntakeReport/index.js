import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import Select from "react-select";

import injectReducer from "utils/injectReducer";
import injectSaga from "utils/injectSaga";
import { makeSelectError, makeSelectLoading } from "containers/App/selectors";
import { changeUsername } from "./actions";
import { makeSelectUsername } from "./selectors";
import reducer from "./reducer";
import saga from "./saga";
import BriefCase from "../../images/bx-briefcase.png";
import "./style.css";

/* eslint-disable react/prefer-stateless-function */
export class intakeReport extends React.Component {
  state = {
    selectedOption: null
  };

  handleChange = selectedOption => {
    this.setState({ selectedOption });
  };

  componentDidMount() {
    if (this.props.username && this.props.username.trim().length > 0) {
      this.props.onSubmitForm();
    }
  }

  render() {
    const { loading, error, repos } = this.props;
    const reposListProps = {
      loading,
      error,
      repos
    };
    const { selectedOption } = this.state;
    return (
      <article>
        <Helmet>
          <title>CreateNewCase Page</title>
          <meta name="description" content="CreateNewCase Page"/>
        </Helmet>
        <section className="dashboard-section">
          <div className="grid-x grid-margin-x medium-margin-collapse">
            <div className="cell auto">
              <section className="text-editor-section">
                <div className="top-row-text-editor">
                  <div className="text-center padding-top20">
                    <img src={BriefCase} alt="Briefcase"/>
                    <div className="gray-strip-title text-center">
                      CREATE NEW CLIENT
                    </div>
                  </div>
                </div>
              </section>
              <div className="text-editor">
                <div className="rowtitle text-center">
                  SECTION 1: RECIPIENT INFORMATION
                </div>
                <div className="grid-x">
                  <div className=" medium-4 large-4">
                    <form>
                      <div className="grid-x grid-padding-x">
                        <div className="cell ">
                          <label>FIRST NAME:</label>
                          <input
                            id="firstname"
                            type="text"
                            placeholder="Enter here ..."
                            className="Input-sc-122ws2l-0 jWzgJI"
                          />
                        </div>
                        <div className="cell ">
                          <label>LAST NAME:</label>
                          <input
                            id="lastname"
                            type="text"
                            placeholder="Enter here ..."
                            className="Input-sc-122ws2l-0 jWzgJI"
                          />
                        </div>
                        <div className="cell ">
                          <label>MIDDLE INITIAL:</label>
                          <input
                            id="middle"
                            type="text"
                            placeholder="Enter here ..."
                            className="Input-sc-122ws2l-0 jWzgJI"
                          />
                        </div>
                        <div className="cell ">
                          <label>MAIDEN/OTHER NAME:</label>
                          <input
                            id="maidenname"
                            type="text"
                            placeholder="Enter here ..."
                            className="Input-sc-122ws2l-0 jWzgJI"
                          />
                        </div>
                        <div className="cell ">
                          <div className="grid-x grid-padding-x">
                            <div className="cell large-12">
                              <label>DATE OF BIRTH::</label>
                            </div>
                            <div className="cell medium-4 large-4">
                              <Select
                                placeholder="Month"
                                defaultValue={selectedOption}
                                onChange={this.handleChange}
                                options={[
                                  { value: "January", label: "January" },
                                  { value: "February", label: "February" },
                                  { value: "March", label: "March" },
                                  { value: "April", label: "April" },
                                  { value: "May", label: "May" },
                                  { value: "June", label: "June" },
                                  { value: "July", label: "July" },
                                  { value: "August", label: "August" },
                                  { value: "September", label: "September" },
                                  { value: "October", label: "October" },
                                  { value: "November", label: "November" },
                                  { value: "December", label: "December" }
                                ]}
                                input="false"
                                classNamePrefix="react-select"
                                className="react-select-container multi-select-single"
                                menuList=""
                              />
                            </div>
                            <div className="cell medium-4 large-4">
                              <Select
                                placeholder="Day"
                                defaultValue={selectedOption}
                                onChange={this.handleChange}
                                options={[
                                  { value: "1", label: "1" },
                                  { value: "2", label: "2" },
                                  { value: "3", label: "3" },
                                  { value: "4", label: "4" },
                                  { value: "5", label: "5" },
                                  { value: "6", label: "6" },
                                  { value: "7", label: "7" },
                                  { value: "8", label: "8" },
                                  { value: "9", label: "9" },
                                  { value: "10", label: "10" },
                                  { value: "11", label: "11" },
                                  { value: "12", label: "12" },
                                  { value: "13", label: "13" },
                                  { value: "14", label: "14" },
                                  { value: "15", label: "15" },
                                  { value: "16", label: "16" },
                                  { value: "17", label: "17" },
                                  { value: "18", label: "18" },
                                  { value: "19", label: "19" },
                                  { value: "20", label: "20" },
                                  { value: "21", label: "21" },
                                  { value: "22", label: "22" },
                                  { value: "23", label: "23" },
                                  { value: "24", label: "24" },
                                  { value: "25", label: "25" },
                                  { value: "26", label: "26" },
                                  { value: "27", label: "27" },
                                  { value: "28", label: "28" },
                                  { value: "29", label: "29" },
                                  { value: "30", label: "30" },
                                  { value: "31", label: "31" }
                                ]}
                                input="false"
                                classNamePrefix="react-select"
                                className="react-select-container multi-select-single"
                                menuList=""
                              />
                            </div>
                            <div className="cell medium-4 large-4">
                              <Select
                                placeholder="Year"
                                defaultValue={selectedOption}
                                onChange={this.handleChange}
                                options={[
                                  { value: "1956", label: "1956" },
                                  { value: "1956", label: "1956" },
                                  { value: "1956", label: "1956" },
                                  { value: "1956", label: "1956" },
                                  { value: "1956", label: "1956" },
                                  { value: "1956", label: "1956" },
                                  { value: "1956", label: "1956" }
                                ]}
                                input="false"
                                classNamePrefix="react-select"
                                className="react-select-container multi-select-single"
                                menuList=""
                              />
                            </div>
                          </div>
                        </div>
                        <div className="cell ">
                          <label>PLACE OF BIRTH:</label>
                          <textarea
                            rows="1"
                            id="place"
                            placeholder="Enter here ..."
                          />
                        </div>
                        <div className="cell ">
                          <label>HOME PHONE:</label>
                          <input
                            id="home"
                            type="text"
                            placeholder="Enter here ..."
                            className="Input-sc-122ws2l-0 jWzgJI"
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className=" medium-4 large-4 left-right-border">
                    <form>
                      <div className="grid-x grid-padding-x">
                        <div className="cell ">
                          <label>WORK PHONE:</label>
                          <input
                            id="work"
                            type="text"
                            placeholder="Enter here ..."
                            className="Input-sc-122ws2l-0 jWzgJI"
                          />
                        </div>
                        <div className="cell ">
                          <label>STREET ADDRESS:</label>
                          <textarea
                            rows="1"
                            id="OCCUPATIONTITLE"
                            placeholder="Enter here ..."
                          />
                        </div>
                        <div className="cell ">
                          <label>CITY:</label>
                          <input
                            id="city"
                            type="text"
                            placeholder="Enter here ..."
                            className="Input-sc-122ws2l-0 jWzgJI"
                          />
                        </div>
                        <div className="cell ">
                          <div className="grid-x grid-padding-x">
                            <div className="cell medium-3 large-3">
                              <label>STATE:</label>
                              <Select
                                placeholder="NY"
                                defaultValue={selectedOption}
                                onChange={this.handleChange}
                                options={[
                                  { value: "DL", label: "DL" },
                                  { value: "HR", label: "HR" },
                                  { value: "UP", label: "UP" }
                                ]}
                                input="false"
                                classNamePrefix="react-select"
                                className="react-select-container multi-select-single"
                                menuList=""
                              />
                            </div>
                            <div className="cell medium-4 large-8 medium-offset-1 large-offset-1">
                              <label>ZIPCODE:</label>
                              <input
                                id="zipcode"
                                type="text"
                                placeholder="Enter here ..."
                                className="Input-sc-122ws2l-0 jWzgJI"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="cell ">
                          <label>WORK ADDRESS:</label>
                          <textarea
                            rows="1"
                            id="workaddress"
                            placeholder="Enter here ..."
                          />
                        </div>
                        <div className="cell ">
                          <label>CITY:</label>
                          <input
                            id="cityname"
                            type="text"
                            placeholder="Enter here ..."
                            className="Input-sc-122ws2l-0 jWzgJI"
                          />
                        </div>
                        <div className="cell padding-top20 text-center">
                          <button
                            id="next"
                            className="button-aqua text-center box-shadow"
                          >
                            NEXT
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className=" medium-4 large-4">
                    <form>
                      <div className="grid-x grid-padding-x">
                        <div className="cell ">
                          <div className="grid-x grid-padding-x">
                            <div className="cell medium-3 large-3">
                              <label>STATE:</label>
                              <Select
                                placeholder="NY"
                                defaultValue={selectedOption}
                                onChange={this.handleChange}
                                options={[
                                  { value: "DL", label: "DL" },
                                  { value: "HR", label: "HR" },
                                  { value: "UP", label: "UP" }
                                ]}
                                input="false"
                                classNamePrefix="react-select"
                                className="react-select-container multi-select-single"
                                menuList=""
                              />
                            </div>
                            <div className="cell medium-4 large-8 medium-offset-1 large-offset-1">
                              <label>ZIPCODE:</label>
                              <input
                                id="zipcode"
                                type="text"
                                placeholder="Enter here ..."
                                className="Input-sc-122ws2l-0 jWzgJI"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="cell ">
                          <label>PERSONAL EMAIL:</label>
                          <input
                            id="workphone"
                            type="text"
                            placeholder="Enter here ..."
                            className="Input-sc-122ws2l-0 jWzgJI"
                          />
                        </div>
                        <div className="cell ">
                          <label>WORK EMAIL:</label>
                          <input
                            id="street"
                            type="text"
                            placeholder="Enter here ..."
                            className="Input-sc-122ws2l-0 jWzgJI"
                          />
                        </div>
                        <div className="cell ">
                          <label>OCCUPATION/COMPANY/TITLE:</label>
                          <textarea
                            rows="1"
                            id="OCCUPATIONTITLE"
                            placeholder="Enter here ..."
                          />
                        </div>
                        <div className="cell ">
                          <label> HOBBY:</label>
                          <input
                            id="hobby"
                            type="text"
                            placeholder="Enter here ..."
                            className="Input-sc-122ws2l-0 jWzgJI"
                          />
                        </div>
                        <div className="cell ">
                          <div className="grid-x grid-padding-x">
                            <div className="cell medium-6 large-6">
                              <label>START DATE:</label>
                              <input
                                id="startdate"
                                type="text"
                                placeholder="Enter here ..."
                                className="Input-sc-122ws2l-0 jWzgJI"
                              />
                            </div>
                            <div className="cell medium-6 large-6">
                              <label>END DATE:</label>
                              <input
                                id="enddate"
                                type="text"
                                placeholder="Enter here ..."
                                className="Input-sc-122ws2l-0 jWzgJI"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="cell ">
                          <label>PRESUMED COST OF SERVICE:</label>
                          <input
                            id="service"
                            type="text"
                            placeholder="Enter here ..."
                            className="Input-sc-122ws2l-0 jWzgJI"
                          />
                        </div>
                      </div>
                    </form>
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

intakeReport.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  onChangeUsername: PropTypes.func
};

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: evt => dispatch(changeUsername(evt.target.value)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
    }
  };
}

const mapStateToProps = createStructuredSelector({
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError()
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReducer = injectReducer({ key: "home", reducer });
const withSaga = injectSaga({ key: "home", saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(intakeReport);
