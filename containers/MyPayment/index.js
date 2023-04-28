import React from "react";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import injectReducer from "utils/injectReducer";
import injectSaga from "utils/injectSaga";
import {
  makeSelectLoading,
  makeSelectError
} from "containers/App/selectors";
import reducer from "./reducer";
import saga from "./saga";
import Select from "react-select";
import "./style.css";
import CrossIcon from "../../images/cross-icon.png";
import userIcon from "../../images/bx-user.png";
import cardIcon from "../../images/bx-credit-card.png";
import calendarIcon from "../../images/bx-calendar.png";
import lockIcon from "../../images/bx-lock.png";

/* eslint-disable react/prefer-stateless-function */
export class MyPayment extends React.PureComponent {
  state = {
    selectedOption: null
  };

  constructor() {
    super();
    this.state = {
      shown: false
    };
  }

  toggle() {
    this.setState({
      shown: !this.state.shown
    });
  }

  handleChange = selectedOption => {
    this.setState({ selectedOption });
  };

  render() {
    const { selectedOption } = this.state;
    const shown = {
      display: this.state.shown ? "block" : "none"
    };

    const hidden = {
      display: this.state.shown ? "none" : "block"
    };
    return (
      <article>
        <Helmet>
          <title>myActivityLogs Page</title>
          <meta name="description" content="CreateNewCase Page"/>
        </Helmet>
        <section className="dashboard-section">
          <div className="client-view" style={shown}>
            <div className='client-views'>
              <div className='popup-head'>
                <h5>MAKE PAYMENT <a href='#' className='float-right' onClick={this.toggle.bind(this)}>
                  <img src={CrossIcon} alt='Cross icon'/>
                </a></h5>

              </div>
              <div className='clearfix mainbox'>
                <p>THIS PAYMENT IS FOR:</p>
                <h4>JANE DOE</h4>
              </div>
              <div className='clearfix main-area'>
                <span>Last paid $500 on Oct 8, 2018</span>
              </div>
              <div className='clearfix border-botm-Padding '>
                <input type="checkbox" className='float-left margin-top20' name="vehicle1" value="Bike"/>
                <div className='lable-right'>
                  <span>Current Balance:</span>
                  <strong className='orange-color'>$2,000.00</strong>
                </div>
              </div>
              <div className='clearfix main-area'>
                <input type="checkbox" className='float-left margin-top45' name="vehicle1" value="Bike"/>
                <div className='lable-right input-type'>
                  <span>Other Amount:</span>
                  <input type='text' placeholder='Enter Amount'/>
                </div>
              </div>
              <div className='clearfix mainbox'>
                <div className='clearfix icons-position'>
                  <img src={userIcon} alt='User'/>
                  <input type='text' placeholder='Name on Card'/></div>
                <div className='clearfix icons-position cards'>
                  <img src={cardIcon} alt='Card'/>
                  <input type='text' placeholder='Card Number'/></div>
                <div className='clearfix '>
                  <div className='width-50-per icons-position '>
                    <img src={calendarIcon} alt='Calendar'/>
                    <input type='text' placeholder='MM/YY'/>
                  </div>
                  <div className='width-50-per icons-position'>
                    <img src={lockIcon} alt='LOCK'/>
                    <input type='text' placeholder='CVC'/>
                  </div>
                </div>
                <div className='top-margin-5'>
                  <button className="button-aqua date-range-button-ornage text-center ">Pay</button>
                </div>
              </div>
            </div>
          </div>
          <div className="grid-x grid-margin-x medium-margin-collapse">
            <div className="cell auto">
              <section className="text-editor-section">
                <div className="gray-strip columns align-self-middle">
                  <div className="grid-x align-middle height-100 grid-margin-x">
                    <div className="medium-3 large-5 cell">
                      <div className="gray-strip-title text-left">
                        MY PAYMENTS
                      </div>
                    </div>
                    <div className="cell medium-3 large-2 ">
                      <Select
                        placeholder="SORT: A to Z"
                        defaultValue={selectedOption}
                        onChange={this.handleChange}
                        options={[
                          { value: "A", label: "A" },
                          { value: "B", label: "B" },
                          { value: "C", label: "C" },
                          { value: "D", label: "D" }
                        ]}
                        input="false"
                        classNamePrefix="react-select"
                        className="react-select-container multi-select-single"
                        menuList=""
                      />
                    </div>
                    <div className="cell  medium-3 large-2">
                      <Select
                        placeholder="SORT: A to Z"
                        defaultValue={selectedOption}
                        onChange={this.handleChange}
                        options={[
                          { value: "A", label: "A" },
                          { value: "B", label: "B" },
                          { value: "C", label: "C" },
                          { value: "D", label: "D" }
                        ]}
                        input="false"
                        classNamePrefix="react-select"
                        className="react-select-container multi-select-single"
                        menuList=""
                      />
                    </div>
                    <div className=" medium-3 large-2 cell">
                      <div className="grid-x align-center-middle flex-end">
                        <div className="add-title">ADD NEW PAYMENT</div>
                        <div className="add-rounded-button">+</div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <div className="table-section">
                <div className="row-strip border-bottom">
                  <div className="grid-x grid-margin-x">
                    <div className="small-2 medium-2 large-2 cell">
                      <div className="table-heading">Client Name</div>
                    </div>
                    <div className="small-2 medium-2 large-2 cell">
                      <div className="table-heading">Total Amount</div>
                    </div>
                    <div className="small-8 medium-2 large-2 cell">
                      <div className="table-heading">Amount Paid</div>
                    </div>
                    <div className="small-8 medium-2 large-2 cell">
                      <div className="table-heading">Amount Due</div>
                    </div>
                    <div className="small-8 medium-2 large-2 cell">
                      <div className="table-heading">Payment History</div>
                    </div>
                  </div>
                </div>
                <div className="row-strip border-bottom">
                  <div className="grid-x ">
                    <div className="small-2 medium-2 large-2 border-right">
                      <div className="content-box padding0">
                        <div className="lemon-title">COMPANY X</div>
                        <div className="list-report">Completed</div>
                      </div>
                    </div>
                    <div className="small-2 medium-2 large-2 border-right cell">
                      <div className="content-box">
                        <div className="table-inertitle">$6000</div>
                      </div>
                    </div>
                    <div className="small-2 medium-2 large-2 border-right">
                      <div className="content-box">
                        <div className="table-inertitle">$5000</div>
                      </div>
                    </div>
                    <div className="small-2 medium-2 large-2 border-right">
                      <div className="content-box">
                        <div className="table-inertitle">$0</div>
                      </div>
                    </div>
                    <div className="small-2 medium-2 large-2 border-right">
                      <div className="content-box">
                        <div className="table-inertitle"><strong>Sep 18, 2018:</strong>$2000</div>
                        <div className="table-inertitle"><strong>Sept 9, 2018:</strong>$2000</div>
                        <div className="table-inertitle"><strong>Sept 1, 2018:</strong>$3500</div>
                      </div>
                    </div>
                    <div className="ssmall-2 medium-2 large-2 text-left">
                      <div className="content-box">
                        <div className="table-inertitle paddingLeft">
                          <button className="button-aqua text-center">Delete</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row-strip border-bottom">
                  <div className="grid-x">
                    <div className="small-2 medium-2 large-2 border-right">
                      <div className="content-box padding0">
                        <div className="lemon-title">COMPANY X</div>
                        <div className="list-report">Pending</div>
                      </div>
                    </div>
                    <div className="small-2 medium-2 large-2 border-right cell">
                      <div className="content-box">
                        <div className="table-inertitle">$6000</div>
                      </div>
                    </div>
                    <div className="small-2 medium-2 large-2 border-right">
                      <div className="content-box">
                        <div className="table-inertitle">$5000</div>
                      </div>
                    </div>
                    <div className="small-2 medium-2 large-2 border-right">
                      <div className="content-box">
                        <div className="table-inertitle">$0</div>
                      </div>
                    </div>
                    <div className="small-2 medium-2 large-2 border-right">
                      <div className="content-box">
                        <div className="table-inertitle"><strong>Sep 18, 2018:</strong>$2000</div>
                        <div className="table-inertitle"><strong>Sept 9, 2018:</strong>$2000</div>
                        <div className="table-inertitle"><strong>Sept 1, 2018:</strong>$3500</div>
                      </div>
                    </div>
                    <div className="ssmall-2 medium-2 large-2 text-left">
                      <div className="table-inertitle paddingLeft">
                        <div className="content-box">
                          <button className="button-aqua date-range-button-ornage text-center "
                                  onClick={this.toggle.bind(this)}>Pay
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <nav aria-label="Pagination" className="text-right">
                <ul className="pagination">
                  <li className="pagination-previous">
                    <a href="#" aria-label=" page">
                      {" "}
                      <span className="show-for-sr"/>
                    </a>
                  </li>
                  <li className="current">
                    <a href="#" aria-label="Page 2">
                      1
                    </a>
                  </li>
                  <li>
                    <a href="#" aria-label="Page 2">
                      2
                    </a>
                  </li>
                  <li>
                    <a href="#" aria-label="Page 3">
                      3
                    </a>
                  </li>
                  <li>
                    <a href="#" aria-label="Page 4">
                      4
                    </a>
                  </li>
                  <li className="ellipsis" aria-hidden="true"/>
                  <li>
                    <a href="#" aria-label="Page 12">
                      20
                    </a>
                  </li>
                  <li className="pagination-next">
                    <a href="#" aria-label="Next page">
                      {" "}
                      <span className="show-for-sr"/>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </section>
      </article>
    );
  }
}

export function mapDispatchToProps(dispatch) {
  return {};
}

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  error: makeSelectError()
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReducer = injectReducer({ key: "my-payment", reducer });
const withSaga = injectSaga({ key: "my-payment", saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(MyPayment);