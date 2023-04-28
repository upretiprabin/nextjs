import React, {useEffect, useState} from "react";
import Pagination from "../Pagination";
import {useDispatch, useSelector} from "react-redux";
import MomentInput from "../../components/MomentInput";
import {
  deleteActivityLogLoading,
  fetchCasesFilterLoading,
  filterByDateLoading,
  filterByParamsLoading,
  loadingActivityLogs,
  setStartDate
} from "./reducer";
import Select from "react-select";
import ActivityLogDetails from "../ActivityLogDetails";
import Loader from "../../components/LoadingIndicator/Loader";

export const MyActivityLogs = () => {
  const dispatch = useDispatch();
  const selector = useSelector(state => state.activityLogs);

  const [state, setState] = useState({
    currentActivityLogs: [],
    currentPage: null,
    totalPages: null,
    selectedCaseOption: null
  })

  useEffect(() => {
    dispatch(loadingActivityLogs());
    dispatch(fetchCasesFilterLoading());
  }, [])

  const onPageChanged = data => {
    const {currentPage, totalPages, pageLimit} = data;
    const offset = (currentPage - 1) * pageLimit;
    const currentActivityLogs = selector?.activityLogs?.slice(offset, offset + pageLimit);
    setState((state) => ({...state, currentPage, currentActivityLogs, totalPages}));
  };

  const handleChangeFilterCase = (selectedCaseOption) => {
    setState(
      (state) => ({...state, selectedCaseOption}),
    );
    dispatch(filterByParamsLoading({caseFilter: selectedCaseOption?.value}))
  }

  const {currentActivityLogs, selectedCaseOption} = state;

  return (
    <article>
      <section className="dashboard-section activityLogsPage">
        <div className="grid-x grid-margin-x medium-margin-collapse">
          <div className="cell auto">
            <section className="text-editor-section">
              <div className="gray-strip columns align-self-middle">
                <div className="grid-x align-middle height-100">
                  <div className="small-12 medium-3 large-2 cell">
                    <div className="gray-strip-title text-left">
                      MY ACTIVITY LOGS
                    </div>
                  </div>
                  <div className="small-4 medium-7 large-8 cell">
                    <div className="date-range-row">date range</div>
                    <div className="button-ow">
                      <MomentInput className="date-range-button"
                                   format="YYYY-MM-DD" options={false}
                                   readOnly={false} monthSelect={false} icon={true}
                                   onChange={(date) => {
                                     dispatch(setStartDate(date.format("YYYY-MM-DD")))
                                   }}/>
                      <img
                        src={'/images/down-arrow.png'}
                        alt="RightArrow"
                        className="right-angel"
                      />
                      <MomentInput className="date-range-button"
                                   format="YYYY-MM-DD" options={false}
                                   readOnly={false} monthSelect={false} icon={true}
                                   onChange={(date) => {
                                     dispatch(setStartDate(date.format("YYYY-MM-DD")))
                                   }}/>
                      <button
                        className="date-range-button date-range-button-gray"
                        onClick={() => {
                          dispatch(filterByDateLoading())
                        }}>
                        Apply
                      </button>
                    </div>
                    <div className="grid-x row">
                      <div className="small-12 medium-9 large-3 cell padding-right-10 padding-bottom-10">
                        <Select placeholder="Filter By : Cases"
                                isClearable={true}
                                isSearchable={false}
                                value={selectedCaseOption}
                                onChange={handleChangeFilterCase}
                                options={selector?.filterCases}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="small-3 medium-3 large-3 cell">
                    <div className="grid-x align-center-middle flex-end">

                    </div>
                  </div>
                </div>
              </div>
            </section>
            {selector?.loading && <Loader/>}
            {!selector?.loading && selector?.activityLogs?.length>0 && currentActivityLogs?.map(item => (
              <ActivityLogDetails key={item.uuid} item={item}
                                  onDeleteRequest={() => {
                                    dispatch(deleteActivityLogLoading({caseId: item.caseId, activityUuid: item.uuid}))
                                  }}
              />
            ))}
            <div className="grid-x grid-margin-x medium-margin-collapse">
              <div className="small-12 medium-12 large-12 cell">
                {!selector?.loading && (selector?.activityLogs?.length > 0 ?
                  <Pagination totalRecords={selector?.activityLogs?.length} pageLimit={5} pageNeighbours={1}
                              onPageChanged={onPageChanged}/>
                  : "No Activity Logs")}
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}

export default MyActivityLogs;