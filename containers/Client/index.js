import React, {useEffect} from "react";
import HeaderLink from "../../components/Header/HeaderLink";
import Pagination from "../Pagination";
import Loader from "../../components/LoadingIndicator/Loader";
import Moment from "react-moment";
import {useDispatch, useSelector} from "react-redux";
import {clientCasesLoading, downloadClientReportLoading, setPageState} from "./reducer";

const Client = () => {
  const dispatch = useDispatch();
  const selector = useSelector(state => state.clientCasePage);

  useEffect(() => {
    dispatch(clientCasesLoading());
  }, []);

  const downloadReportClick = (caseId) => {
    dispatch(downloadClientReportLoading({caseId}));
  }

  const onPageChanged = data => {
    const {currentPage, totalPages, pageLimit} = data;
    const offset = (currentPage - 1) * pageLimit;
    const currentReports = selector?.reports?.slice(offset, offset + pageLimit);
    dispatch(setPageState({currentPage, currentReports, totalPages}));
  };

  return (
    <article>
      <section className="dashboard-section clientCasePage">
        <div className="grid-x grid-margin-x medium-margin-collapse">
          <div className="cell auto">
            <section className="text-editor-section">
              <div className="gray-strip columns align-self-middle">
                <div className="grid-x align-middle height-100">
                  <div className="small-4 medium-4 large-4 cell">
                    <div className="gray-strip-title text-left">
                      MY CASE(S)
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {selector?.loading && <Loader/>}
            {!selector?.loading && selector?.currentReports?.map(list => (
              <div key={list.uuid}>
                <div className="row-strip">
                  <div className="grid-x padding-top-bot-30">
                    <div className="samll-12 medium-9 large-9">
                      <div className="row-title">{list?.title}</div>
                      <div className="list-report-text">
                        <strong> Cause:</strong> {list?.cause}
                      </div>
                      <div className="list-report-text">
                        <strong>Classification:</strong> {list?.classificationVal}
                      </div>
                      <div className="list-report-text">
                        <strong>Created:</strong> <Moment date={list?.dateCreated} format={"DD.MM.YY"}/>
                      </div>
                      <div className="list-report-text">
                        <strong> Status:</strong> {list?.caseStatus}
                      </div>
                    </div>
                    <div className="small-12 medium-3 large-3">
                      <HeaderLink href={"/preview/" + list.uuid} className="button-aqua text-center float-right clear">
                        PREVIEW REPORT
                      </HeaderLink>
                      <button onClick={() => downloadReportClick(list.uuid)}
                         className="button-aqua text-center mtopbottom float-right clear">
                        DOWNLOAD
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {!selector?.loading && (selector?.reports?.length > 0 ? (
              <Pagination
                totalRecords={selector?.reports?.length}
                pageLimit={3}
                pageNeighbours={1}
                onPageChanged={onPageChanged}
              />
            ) : (
              "No Cases"
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}

export default Client;