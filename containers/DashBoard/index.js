import React, {useEffect} from "react";
import HeaderLink from "../../components/Header/HeaderLink";
import Moment from "react-moment";
import {useDispatch, useSelector} from "react-redux";
import {getCases, getSections} from "./actions";
import {useRouter} from "next/router";
import Loader from "../../components/LoadingIndicator/Loader";

export const DashBoard = () => {
  const selector = useSelector(state => state.dashboard);
  const dispatch = useDispatch();
  const router = useRouter();
  const investigatorId = router.query.investigatorId;

  useEffect(() => {
    getCases(dispatch, router.query.investigatorId);
  }, []);

  return (
    <article>
      {selector.loading &&
      <section className="dashboard-section dashboardPage">
        <Loader/>
      </section>}
      {!selector.loading && selector?.cases?.[0]?.length > 0 &&
      <section className="dashboard-section dashboardPage">
        <div className="grid-x grid-margin-x medium-margin-collapse">
          <div className="cell auto">
            <section className="text-editor-section">
              <div className="top-row-text-editor">
                <div className="text-center padding-top20">
                  <div className="welcome-title">Welcome Back!</div>
                  <div className="sub-title-wel">See your most recent files below.</div>
                </div>
              </div>
            </section>
            <div className="grid-x grid-margin-x medium-margin-collapse">
              {
                selector?.cases?.[0]?.map(myCase => (
                  <div className="small-12 medium-4 large-4 cell" key={myCase.uuid}>

                    <div className={myCase.caseStatus === "COMPLETED" ? "dashboard-card flag" : "dashboard-card"}>
                      <div onClick={async () => {
                        await getSections(dispatch, myCase, router.push)
                      }} className="case-wrapper">
                        <div className="dashboard-head">
                          {myCase.title}
                        </div>
                        <div className="dashboard-sub-head">
                          {myCase.cause}
                        </div>
                        <div className="dashboard-created-date">
                          <p>Status: {myCase.caseStatus}</p>
                          <p>Created: <Moment date={myCase.dateCreated} format={"DD.MM.YY"}/></p>
                          <p>{myCase.caseStatus === "COMPLETED" ? "Completed:" : "Updated:"}
                            <Moment date={myCase.lastUpdated} format={"DD.MM.YY"}/>
                          </p>
                        </div>
                        <HeaderLink href={`/activeactivitylogs/${myCase.uuid}/`}
                                    className="dashboard-activity" onClick={(event)=>{event.stopPropagation()}}>
                          Activity Entry
                        </HeaderLink>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
      }
      {!selector.loading && selector?.cases?.[0]?.length === 0 &&
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
                  <img src={'/images/welcomeicon/bx-briefcase-alt 2.png'} alt="bxbriefcase" className=""/>
                  <img src={'/images/welcomeicon/bx-file-plus 2.png'} alt="addedite" className=""/>
                  <img src={'/images/welcomeicon/bx-contact 2.png'} alt="involediconwel" className=""/>
                  <img src={'/images/welcomeicon/bx-task 2.png'} alt="correct" className=""/>
                  <img src={'/images/welcomeicon/bx-edit 2.png'} alt="fileicon" className=""/>
                </div>
                <div className="grid-x grid-margin-x align-center">
                  <div className="small-9 medium-9 large-9">
                    <HeaderLink href={`/createnewcase/${investigatorId}/`}
                                className="button-aqua width-auto">
                      CREATE YOUR NEW CASE
                    </HeaderLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>}
    </article>
  );
}
;

export default DashBoard
