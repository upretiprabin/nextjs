import React, {useState, useEffect} from "react";
import Select from "react-select";
import HeaderLink from "../../components/Header/HeaderLink";
import Pagination from "../Pagination";
import Moment from "react-moment";
import {CgSearch} from "react-icons/cg";
import {useDispatch, useSelector} from "react-redux";
import {useRouter} from "next/router";
import MomentInput from "../../components/MomentInput";
import {
  clientAccess, completeReport,
  deleteReport,
  downloadReportData,
  filterReportsByDate,
  filterReportsByParam,
  loadFilterData,
  loadReports
} from "./actions";
import Loader from "../../components/LoadingIndicator/Loader";
import {setStartDate, setEndDate} from "./reducer";
import {getCookie} from "cookies-next";
import swal2 from 'sweetalert2';
import swal from "sweetalert";

const MyReports = () => {
  const selector = useSelector(state => state.casePage);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    loadReports(dispatch);
    loadFilterData(dispatch);
  }, []);

  const [state, setState] = useState({
    displayMenu: false,
    caseList: [],
    currentReports: [],
    currentPage: null,
    totalPages: null,
    classificationOptions: [],
    statusOptions: [],
    selectedClassificationOption: null,
    selectedStatusOption: null
  })

  const changeStartDate = (date) => {
    dispatch(setStartDate(date));
  }

  const changeEndDate = (date) => {
    dispatch(setEndDate(date));
  }

  const downloadReport = (caseId) => {
    downloadReportData(dispatch, caseId);
  }

  const giveClientAccess = (caseId, clientEmail) => {
    clientAccess(dispatch, caseId, clientEmail);
  }

  const handleGiveClientAccess = (caseId) => {
    const clientEmail = selector?.reports?.[1]?.[caseId];
    if (clientEmail)
      giveClientAccess(caseId, clientEmail);
    else
      swal2.fire({
        titleText: "GIVE CLIENT ACCESS",
        input: "email",
        inputPlaceholder: 'Enter Client Email here...',
        showCloseButton: true,
        showConfirmButton: true,
        showCancelButton: true,
        confirmButtonText: "SUBMIT",
        cancelButtonText: "CANCEL",
        customClass: {
          container: 'giveClientAccessAlert'
        },
        inputValidator: (value) => {
          if (!value) {
            return 'You need to enter an email address!';
          } else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value))) {
            return 'Please enter a valid email address!';
          }
        }
      }).then((result) => {
        if (result.isConfirmed) {
          giveClientAccess(caseId, result.value);
          swal2.close();
        }
      });
  }

  const onPageChanged = (data) => {
    const {currentPage, totalPages, pageLimit} = data;
    const offset = (currentPage - 1) * pageLimit;
    const currentReports = selector?.reports?.[0]?.slice(offset, offset + pageLimit);
    setState((state) => ({...state, currentPage, currentReports, totalPages}));
  };

  const onClickDeleteCase = (event) => {
    const caseID = event.target.value;
    deleteReport(dispatch, caseID);
  }

  const onClickCompleteCase = (event) => {
    const caseID = event.target.value;
    const text = event.target.innerText;
    completeReport(dispatch, caseID, text === 'CASE COMPLETE' ? 'completed' : 'reopen');
  }

  const onClickApplyDateFilter = () => {
    if (!selector?.startDate || !selector?.endDate) {
      swal("Ohh!", "Filter Date is not correct. Start date or End date or both missing", "error");
      return;
    }

    setState((state) => ({...state, selectedStatusOption: null, selectedClassificationOption: null}));
    filterReportsByDate(dispatch, selector?.startDate?.format("YYYY-MM-DD"), selector?.endDate?.format("YYYY-MM-DD"));
  }

  const handleChangeSortByStatus = (selectedStatusOption) => {
    setState(
      (state) => ({...state, selectedStatusOption}),
    );
    filterReportsByParam(dispatch, state.selectedClassificationOption?.label, selectedStatusOption?.label);
  };

  const handleChangeSortByClassification = (selectedClassificationOption) => {
    setState(
      (state) => ({...state, selectedClassificationOption}),
    );
    filterReportsByParam(dispatch, selectedClassificationOption?.label, state.selectedStatusOption?.label);
  };
  const investigatorId = getCookie("uuid");
  const {
    selectedClassificationOption,
    selectedStatusOption,
    currentReports
  } = state;
  return (
    <article>
      <section className="dashboard-section myReportsPage">
        <div className="grid-x grid-margin-x medium-margin-collapse">
          <div className="cell auto">
            <section className="text-editor-section hidden-phone">
              <div className="gray-strip columns align-self-middle">
                <div className="grid-x align-middle height-100">
                  <div className="small-12 medium-3 large-2 cell">
                    <div className="gray-strip-title text-left">
                      MY REPORTS / CASES
                    </div>
                  </div>
                  <div className="small-4 medium-7 large-8 cell">
                    <div className="date-range-row">date range</div>
                    <div className="button-ow">
                      <MomentInput className="date-range-button" value={selector?.startDate}
                                   format="YYYY-MM-DD" options={false}
                                   readOnly={false} monthSelect={false} icon={true}
                                   onChange={changeStartDate}/>
                      <img
                        src={'/images/down-arrow.png'}
                        alt="RightArrow"
                        className="right-angel"
                      />
                      <MomentInput className="date-range-button" value={selector?.endDate}
                                   format="YYYY-MM-DD" options={false}
                                   readOnly={false} monthSelect={false} icon={true}
                                   onChange={changeEndDate}/>
                      <button
                        className="date-range-button date-range-button-gray"
                        onClick={onClickApplyDateFilter}>
                        Apply
                      </button>
                    </div>
                    <div className="grid-x">
                      <div
                        className="small-12 medium-9 large-3 cell padding-right-10 padding-bottom-10">
                        <Select placeholder="Filter By : Status"
                                isClearable={true}
                                isSearchable={false}
                                value={selectedStatusOption}
                                onChange={handleChangeSortByStatus}
                                options={selector.filters.statusOptionsList}

                        />
                      </div>
                      <div
                        className="small-12 medium-9 large-4 cell padding-right-10 padding-bottom-10 wd-35">
                        <Select placeholder="Filter By : Classification"
                                isClearable={true}
                                isSearchable={false}
                                value={selectedClassificationOption}
                                onChange={handleChangeSortByClassification}
                                options={selector.filters.classificationOptionsList}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="small-5 medium-2 large-2 cell">
                    <div className="grid-x align-center-middle flex-end">
                      <HeaderLink href={`/createnewcase/${investigatorId}/`}>
                        <div className="add-title">ADD NEW CASE</div>
                      </HeaderLink>
                      <HeaderLink href={`/createnewcase/${investigatorId}/`}>
                        <div className="add-rounded-button">+</div>
                      </HeaderLink>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="mobile-filter">
              <div className="search-bar">
                <CgSearch/>
                <input placeholder="Search anything"/>
              </div>
              <HeaderLink href={`/createnewcase/${investigatorId}/`}>
                <button>+ New Case</button>
              </HeaderLink>
            </section>
            {selector.loading && <Loader/>}
            {selector?.reports?.[0]?.length > 0 &&
            <div className="clearfix scrollable">
              {!selector.loading && currentReports?.map(list => (
                <div key={list.uuid}>
                  <div className="row-strip">
                    <div className="grid-x grid-margin-x">
                      <div className="cell medium-6 large-8 border-right text-left">
                        <div className="left-listreport">
                          <div className="row-title">CASE: {list.title}</div>
                          <div className="list-report-item">
                            <strong>Cause:</strong> {list.cause}
                          </div>
                          <div className="list-report-item">
                            <strong>Classification:</strong> {list.classificationVal}
                          </div>
                          <div className="list-report-item">
                            <strong>Status:</strong> {list.caseStatus}
                          </div>
                          <div className="list-report-item">
                            <strong>Created:</strong> <Moment date={list.dateCreated}
                                                              format={"DD.MM.YY"}/>
                          </div>
                          <div className="list-report-item">
                            <strong>{list.caseStatus === "COMPLETED" ? "Completed: " : "Updated: "}</strong>
                            <Moment date={list.lastUpdated} format={"DD.MM.YY"}/>
                          </div>
                        </div>
                      </div>
                      <div className="cell medium-3 large-2">
                        <div className="button-box">
                          <HeaderLink
                            className="margintopBottom button-aqua width-100 text-center"
                            href={`/myreports/${investigatorId}/edit/${list.uuid}`}>
                            EDIT CASE
                          </HeaderLink>
                          <HeaderLink
                            href={`/myclients/${investigatorId}/edit/${list.clientId}`}
                            className="margintopBottom button-aqua text-center width-100">
                            CLIENT DETAILS
                          </HeaderLink>
                          <button className="margintopBottom button-aqua text-center width-100"
                                  onClick={onClickDeleteCase} value={list.uuid}>
                            DELETE CASE
                          </button>
                          <button className="margintopBottom button-aqua text-center width-100"
                                  onClick={onClickCompleteCase} value={list.uuid}>
                            {list.caseStatus === "COMPLETED" ? "CASE REOPEN" : "CASE COMPLETE"}
                          </button>
                        </div>
                      </div>
                      <div className="cell medium-3 large-2">
                        <div className="button-box">
                          <HeaderLink href={"/preview/" + list.uuid}
                                      className="margintopBottom button-aqua text-center width-100">
                            PREVIEW REPORT
                          </HeaderLink>
                          <button
                            onClick={() => downloadReport(list.uuid)}
                            className="margintopBottom button-aqua text-center width-100">
                            DOWNLOAD REPORT
                          </button>
                          <button
                            onClick={() => handleGiveClientAccess(list.uuid)}
                            className="margintopBottom button-aqua text-center width-100">
                            GIVE CLIENT ACCESS
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            }
            {!selector.loading && (selector?.reports?.[0]?.length > 0 ? (
              <Pagination
                totalRecords={selector?.reports?.[0]?.length}
                pageLimit={3}
                pageNeighbours={1}
                onPageChanged={onPageChanged}
              />
            ) : "No Reports")}
          </div>
        </div>
      </section>
    </article>
  );
}

export default MyReports;