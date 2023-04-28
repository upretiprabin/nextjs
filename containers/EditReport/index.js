import React, {useEffect} from "react";
import Errors from "../../components/Errors";
import Select from "react-select";
import {useDispatch, useSelector} from "react-redux";
import {
  editCaseLoading,
  fetchClientLoading,
  setCaseName,
  setCause,
  setClassification,
  setClientId
} from "../CreateNewCase/reducer";
import {useRouter} from "next/router";
import Loader from '../../components/LoadingIndicator/Loader';

const EditReport = () => {

  const dispatch = useDispatch();
  const selector = useSelector(state => state.addNewCase);
  const router = useRouter();
  const investigatorId = router.query.investigatorId;
  const caseId = router.query.caseId;

  const handleSelectChange = (selectedClientId) => {
    dispatch(setClientId(selectedClientId));
  }

  const handleClassificationChange = (selectedClassification) => {
    dispatch(setClassification(selectedClassification));
  }

  useEffect(() => {
    dispatch(fetchClientLoading({investigatorId, from: 'edit', caseId}));
  }, []);

  return (
    <article>
      <section className="dashboard-section">
        <div className="grid-x grid-margin-x medium-margin-collapse">
          <div className="cell auto">
            <section className="text-editor-section">
              <div className="top-row-text-editor">
                <div className="text-center padding-top20">
                  <img src={'/images/bx-briefcase.png'} alt="Briefcase"/>
                  <div>EDIT CASE</div>
                </div>
              </div>
            </section>
            {selector.loading && <Loader/>}
            {!selector.loading &&
            <div className="text-editor">
              <div className="grid-x grid-margin-x">
                <div className="cell medium-6 large-4 large-offset-4 medium-offset-2">
                  <form>
                    <div className="grid-x grid-padding-x">
                      <div className="cell padding-top10">
                        <label htmlFor="case-label">CASE NAME: </label>
                        <input
                          type="text" id="title" placeholder="Enter here ..."
                          value={selector?.caseName}
                          onChange={(e) => dispatch(setCaseName(e.target.value))}
                        />
                      </div>
                      <div className="cell padding-top10">
                        <label htmlFor="cause-label">CAUSE: </label>
                        <textarea
                          rows="3" id="cause" placeholder="Enter here ..."
                          value={selector?.cause}
                          onChange={(e) => dispatch(setCause(e.target.value))}
                        />
                      </div>
                      <div className="cell padding-top10 edit-case-select">
                        <label>CLASSIFICATION:</label>
                        <Select className="multi-box react-select-container"
                                isSearchable={false}
                                value={selector?.classification} onChange={handleClassificationChange}
                                options={selector?.classificationOptions}
                                classNamePrefix="react-select"/>
                      </div>
                      <div className="cell padding-top10 edit-case-select">
                        <label>EXISTING CLIENT?</label>
                        <Select className="multi-box react-select-container"
                                isSearchable={false}
                                value={selector?.clientId} onChange={handleSelectChange}
                                options={selector?.clients}
                                classNamePrefix="react-select"/>
                      </div>
                      <div className="cell padding-top20">
                        <button
                          id="middle-label"
                          className="button-aqua text-center"
                          onClick={(evt) => {
                            evt.preventDefault();
                            dispatch(editCaseLoading({
                              investigatorId,
                              caseId,
                              caseName: selector?.caseName,
                              cause: selector?.cause,
                              classification: selector?.classification?.value,
                              clientId: selector?.clientId?.value
                            }));
                          }}
                        >
                          EDIT CASE
                        </button>
                      </div>
                      <Errors errors={selector?.caseError}/>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            }
          </div>
        </div>
      </section>
    </article>
  );
}

export default EditReport;