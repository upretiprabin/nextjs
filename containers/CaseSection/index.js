import React, {useEffect} from "react";
import Aside from "../../components/Aside";
import HeaderLink from "../../components/Header/HeaderLink";
import Moment from "react-moment";
import {downloadReport} from "./actions";
import {useDispatch, useSelector} from "react-redux";
import {useRouter} from "next/router";
import "font-awesome/css/font-awesome.css";
import {fetchCaseInfoLoading, fetchClientInfoLoading} from "../PreviewReport/reducer";
import {fetchEditSectionsLoading} from "../EditSection/reducer";

const preview_pdf = <span className="file_preview"><i className="fa fa-search-plus" aria-hidden="true"/></span>;
const download_pdf = <span className="file_download"><i className="fa fa-download" aria-hidden="true"/></span>;

const CaseSection = () => {

  const router = useRouter();
  const dispatch = useDispatch();
  const selector = useSelector(state => state.previewPage);
  const selector1 = useSelector(state => state.editSectionPage);
  const {caseId} = router.query;

  useEffect(() => {
    dispatch(fetchCaseInfoLoading({caseId}));
    dispatch(fetchClientInfoLoading({caseId}));
    dispatch(fetchEditSectionsLoading({caseId}));
  }, []);

  const downloadReportClick = () => {
    downloadReport(dispatch, caseId);
  }

  return (
    <article>
      <section className="dashboard-section caseSectionPage">
        <div className="grid-x grid-margin-x medium-margin-collapse">
          <div className="cell shrink">
            <Aside sections={selector1?.sections} caseId={caseId}/>
          </div>
          <div className="cell auto">
            <section className="text-editor-section">
              <div className="top-row-text-editor">
                <div className="grid-x grid-margin-x medium-margin-collapse">
                  <div className="cell auto">
                    <div className="case-suspected-title">
                      Case:
                      {selector?.activeCase ? selector.activeCase.title : ""}
                    </div>
                    <div className="involved-title-green">
                      {selector?.activeCase ? selector.activeCase.cause : ""}
                    </div>
                  </div>
                  <div className="cell shrink">
                    <div className="preview-report-list padding-top10">
                      <div className="list-report">
                        <strong>Client:</strong> {selector?.client?.companyName ? selector.client.companyName : ''}
                      </div>
                      <div className="list-report">
                        <strong>Date Created:</strong>
                        <Moment date={selector?.activeCase?.dateCreated} format={"DD.MM.YY"}/>
                      </div>
                    </div>
                  </div>
                  <div className="file_icons cell shrink" title={"Preview Report"}>
                    <div className="cell shrink prv">
                      <HeaderLink href={"/preview/" + caseId}>{preview_pdf}</HeaderLink>
                    </div>
                    <div className="cell shrink dwn" title={"Download Report"}>
                      <button onClick={downloadReportClick}
                         className="notification-btn">
                        {download_pdf}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div className="text-editor">
              <form>
                <div className="grid-x grid-padding-x">
                  <div className="cell padding-top10">
                    Please choose any of Section
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}

export default CaseSection; 
