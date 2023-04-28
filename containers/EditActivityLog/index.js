import React, {useEffect} from "react";
import "font-awesome/css/font-awesome.css";
import MomentInput from "../../components/MomentInput";
import HeaderLink from "../../components/Header/HeaderLink";
import {
  fetchAllActivityLogsByCaseLoading,
  setActivityContent,
  setActivityDate,
  setActivityTime, updateActivityLoading
} from "../ActiveActivityLogs/reducer";
import {fetchCaseInfoLoading, fetchClientInfoLoading} from "../PreviewReport/reducer";
import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import moment from "moment";
import Moment from "react-moment";
import Loader from "../../components/LoadingIndicator/Loader";

const preview_log = <span className="log_preview"><i className="fa fa-search-plus" aria-hidden="true"/></span>;

const EditActivityLog = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const selector = useSelector(state => state.activeActivityLogs);
  const selector1 = useSelector(state => state.previewPage);
  const caseId = router.query.caseId;
  const activityId = router.query.activityId;

  useEffect(() => {
    dispatch(fetchAllActivityLogsByCaseLoading({caseId}));
    dispatch(fetchCaseInfoLoading({caseId}));
    dispatch(fetchClientInfoLoading({caseId}));
  }, []);

  const changeDate = (date) => {
    dispatch(setActivityDate(date.format("YYYY-MM-DD")));
  }

  const changeTime = (time) => {
    dispatch(setActivityTime(time.format("HH:mm")));
  }

  const onChangeActivity = (event) => {
    dispatch(setActivityContent(event.target.value));
  }

  const submitForm = () => {
    dispatch(updateActivityLoading({activityId}));
  }

  const {loading, activityLogs} = selector;
  const {activeCase, client} = selector1;

  return (
    <article>
      <section className="dashboard-section editActivityLogPage">
        <div className="grid-x grid-margin-x medium-margin-collapse">
          <div className="cell auto">
            <section className="text-editor-section">
              <div className="gray-strip columns align-self-middle">
                <div className="grid-x grid-margin-x align-middle height-100">
                  <div className="small-7 medium-7 large-8 cell">
                    <div className="case-suspected-title">
                      Case: {activeCase ? activeCase.title : ""}
                    </div>
                    <div className="stripSubheading">ACTIVITY LOGS</div>
                  </div>
                  <div className="small-5 medium-5 large-4 cell">
                    <div className="grid-x">
                      <div className="small-10 medium-10 large-10 cell padding-top10">
                        <div className="list-report">
                          <strong>Client:</strong> {client?.companyName ? client.companyName : ''}
                        </div>
                        <div className="list-report">
                          <strong>Date Created:</strong>
                          <Moment date={activeCase?.dateCreated} format={"DD.MM.YY"}/>
                        </div>
                        {/*<div className="list-report">*/}
                        {/*  <strong>Payment Due:</strong> $500*/}
                        {/*</div>*/}
                        {/*<div className="list-report">*/}
                        {/*  <strong>Amount Paid:</strong> $1000*/}
                        {/*</div>*/}
                      </div>
                      <div className="small-2 medium-2 large-2">
                        <div className="log_icons cell shrink" title={"Preview Logs"}>
                          <div className="cell shrink prv">
                            <HeaderLink href={'#'}>{preview_log}</HeaderLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div className="table-section">
              <div className="row-strip border-bottom">
                <div className="grid-x grid-margin-x">
                  <div className="small-3 medium-3 large-2 cell text-center">
                    <div className="table-heading">Date</div>
                  </div>
                  <div className="small-2 medium-2 large-1 cell text-center">
                    <div className="table-heading">Time</div>
                  </div>
                  <div className="small-7 medium-7 large-9 cell">
                    <div className="table-heading paddingLeft">Activity</div>
                  </div>
                </div>
              </div>
              {loading && <Loader/>}
              {!loading && activityLogs?.length > 0 && activityLogs?.map(item => {
                if (item?.uuid === activityId) {
                  return (
                    <div className="row-strip border-bottom" key={item?.id}>
                      <div className="grid-x grid-margin-x">
                        <div className="small-3 medium-3 large-2 cell text-center">
                          <div className="moment-input">
                            <MomentInput format="YYYY-MM-DD" options={false} name="date" defaultValue={moment(item?.date)}
                                         readOnly={false} monthSelect={false} icon={true} onChange={changeDate}/>
                          </div>
                        </div>
                        <div className="small-2 medium-2 large-1 cell border-left text-center">
                          <div className="moment-input">
                            <MomentInput format="HH:mm" options={false} defaultValue={new moment(item?.date+" "+item?.time)} name="time"
                                         readOnly={false} icon={true} tab={1} onChange={changeTime}/>
                          </div>
                        </div>
                        <div className="small-6 medium-6 large-7 cell border-left text-left">
                          <div className="center-content paddingLeft paddingAll">
                        <textarea
                          className="margin-bottom-0" rows="1" id="case-label" placeholder="Enter here ..."
                          name="activity"
                          value={item?.activity}
                          onChange={onChangeActivity}
                        />
                          </div>
                        </div>
                        <div className="small-1 medium-1 large-2 cell border-left text-left">
                          <div className="center-content">
                            <button className="button-aqua text-center"
                                    onClick={submitForm}
                            >update
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>)
                } else {
                  return (
                    <div key={item?.id} className="row-strip border-bottom">
                      <div className="grid-x grid-margin-x">
                        <div className="small-3 medium-3 large-2 cell text-center">
                          <div className="center-text-content">
                            {item?.date}
                          </div>
                        </div>
                        <div className="small-2 medium-2 large-1 cell border-left text-center">
                          <div className="center-text-content">
                            {item?.time}
                          </div>
                        </div>
                        <div className="small-6 medium-6 large-7 cell border-left text-left">
                          <div className="activity-content">
                            {item?.activity}
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                }
              })}
            </div>
          </div>
        </div>
      </section>
    </article>
  );

}

export default EditActivityLog;
