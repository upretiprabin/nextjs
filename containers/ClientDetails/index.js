import React from "react";
// import PropTypes from "prop-types";
// import { connect } from "react-redux";
import Moment from "react-moment";
import "moment-timezone";
import HeaderLink from "../../components/Header/HeaderLink";
// import Loader from "components/LoadingIndicator/Loader"

export class ClientDetails extends React.Component {
  render() {
    const { loading, item, match } = this.props;
    if (item !== undefined) {
      return (
          <>
          {/* {loading && <Loader/>} */}
          {
          // !loading && 
          <div className="grid-x">
          <div className="small-2 medium-2 large-2 border-right">
            <div className="lemon-title">{item.companyName}</div>
            <div className="listReport"><strong>Date Added: {loading}</strong>
              <Moment format="ddd MMM YYYY">{item.dateCreated}</Moment>
            </div>
          </div>
          <div className="small-8 medium-8 large-8 border-right cell">
            <div className="field-row">
              <div className="disable-text-box">
                <label className="text-label">Name:</label>
                <div className="text-label">{item.nameOfPOC}</div>
              </div>
              <div className="disable-text-box">
                <label className="text-label">Email:</label>
                <div className="text-label">{item.emailOfPOC}</div>
              </div>
              <div className="disable-text-box">
                <label className="text-label">Phone:</label>
                <div className="text-label">{item.phoneOfPOC}</div>
              </div>
            </div>
          </div>

          <div className="small-2 medium-2 large-2 text-center">
            <div className="row-title paddingLeft ">
              <button className="button-aqua text-center" onClick={this.props.onDeleteRequest}>
                DELETE
              </button>
              <HeaderLink className="button-aqua text-center" href={`${match}/edit/${item.uuid}`}>
                EDIT CLIENT
              </HeaderLink>
              {/*<button className="button-aqua text-center">VIEW REPORT</button>*/}
            </div>
          </div>
        </div>}
        </>
      );
    }
    return <div/>;
  }
}

ClientDetails.propTypes = {
  // item: PropTypes.object,
  // match: PropTypes.object,
  // onDeleteRequest: PropTypes.func
};

export default ClientDetails
// connect()(ClientDetails);
