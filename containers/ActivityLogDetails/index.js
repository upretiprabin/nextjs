import React, {useState} from "react";
import "moment-timezone";
import HeaderLink from "../../components/Header/HeaderLink";
import {getCookie} from "cookies-next";

const ActivityLogDetails = (props) => {
  const {item, onDeleteRequest} = props;
  const [shownState, setShownState] = useState(false);
  const investigatorId = getCookie('uuid');

  const activityInfoClick = () => {
    setShownState((shownState) => !shownState);
  }

  const shown = {
    display: shownState ? "block" : "none"
  };

  const hidden = {
    display: shownState ? "none" : "block"
  };

  return (
    <div className="row-strip">
      <div className="grid-x padding-top-bot-30">
        <div className="small-8 medium-8 large-9">
          <div className="row-title">
            Activity Name: {item.activity}
          </div>
          <div className="list-report-item">
            <strong>Date Created:</strong> {item.date}
          </div>
          <div className="list-report-item">
            <strong>Time Created:</strong> {item.time}
          </div>
        </div>
        <section>
          <div className="client-view" style={shown}>
            <div className="client-views">
              <div className="popup-head">
                <h5>
                  ACTIVITY LOG INFORMATION{" "}
                  <button className="float-right" onClick={activityInfoClick}>
                    <img src={'/images/cross-icon.png'} alt="Cross icon"/>
                  </button>
                </h5>
              </div>
              <div className="clearfix mainbox">
                <div className="cell padding-top10">
                  <label htmlFor="case-label">ACTIVITY NAME:</label>
                  <label htmlFor="case-label">{item.activity}</label>
                </div>
                <div className="cell padding-top10">
                  <label htmlFor="case-label">DATE CREATED</label>
                  <label htmlFor="case-label">{item.date}</label>
                </div>
                <div className="cell padding-top10">
                  <label htmlFor="case-label">TIME CREATED:</label>
                  <label htmlFor="case-label">{item.time}</label>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="small-4 medium-4 large-3">
          <button
            className="button-aqua text-center float-right clear"
            onClick={activityInfoClick}
          >
            VIEW LOG
          </button>
          <HeaderLink
            className="button-aqua text-center mtopbottom float-right clear"
            href={`${investigatorId}/${item.caseId}/edit/${item.uuid}`}
          >
            EDIT LOG
          </HeaderLink>
          <button
            className="button-aqua text-center float-right clear"
            onClick={onDeleteRequest}
          >
            DELETE
          </button>
        </div>
      </div>
    </div>
  );
}

export default ActivityLogDetails;
