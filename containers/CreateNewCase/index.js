import React, {useEffect} from "react";
import Select from "react-select";
import HeaderLink from "../../components/Header/HeaderLink";
import Errors from "../../components/Errors";
import {useDispatch, useSelector} from "react-redux";
import {useRouter} from "next/router";
import {addCaseLoading, fetchClientLoading, setCaseName, setCause, setClassification, setClientId} from "./reducer";

const CreateNewCase = () => {

  const dispatch = useDispatch();
  const selector = useSelector(state => state.addNewCase);
  const router = useRouter();
  const investigatorId = router.query.investigatorId;

  const handleChange = (selectedClientId) => {
    dispatch(setClientId(selectedClientId));
  };

  const handleChangeClassification = (selectedClassification) => {
    dispatch(setClassification(selectedClassification));
  };

  useEffect(() => {
    dispatch(fetchClientLoading({investigatorId}));
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
                  <div>CREATE NEW CASE</div>
                </div>
              </div>
            </section>
            {
              <div className="text-editor">
                <div className="grid-x grid-margin-x">
                  <div className="cell medium-6 large-4 large-offset-4 medium-offset-2">
                    <form onSubmit={(e) => {
                      e.preventDefault();
                      dispatch(addCaseLoading({
                        investigatorId,
                        caseName: selector?.caseName,
                        cause: selector?.cause,
                        classification: selector?.classification?.value,
                        clientId: selector?.clientId?.value
                      }));
                    }}>
                      <div className="grid-x grid-padding-x">
                        <div className="cell padding-top10">
                          <label htmlFor="case-label">CASE NAME:* </label>
                          <input
                            type="text" id="case-label" placeholder="Enter here ..."
                            value={selector?.caseName}
                            onChange={(e) => dispatch(setCaseName(e.target.value))}
                          />
                        </div>
                        <div className="cell padding-top10">
                          <label htmlFor="cause-label">CAUSE:* </label>
                          <textarea
                            rows="3" id="cause-label"
                            placeholder="Enter here ..."
                            value={selector?.cause}
                            onChange={(e) => dispatch(setCause(e.target.value))}
                          />
                        </div>
                        <div className="cell padding-top10 create-new-case-select">
                          <label htmlFor="classification-label">CLASSIFICATION:* </label>
                          <Select className="multi-box react-select-container" isSearchable={false}
                                  value={selector?.classification} onChange={handleChangeClassification}
                                  options={selector?.classificationOptions}
                                  classNamePrefix="react-select"/>
                        </div>
                        <div className="cell text-center">
                          <label>NEW CLIENT?</label>
                          <HeaderLink href={`/createnewclient/${investigatorId}/`} className="button-dark text-center">
                            <span>+</span> ADD NEW CLIENT
                          </HeaderLink>
                        </div>
                        <div className="cell padding-top10 create-new-case-select">
                          <label>EXISTING CLIENT?</label>
                          <Select className="multi-box react-select-container"
                                  isSearchable={false}
                                  value={selector?.clientId} onChange={handleChange}
                                  options={selector?.clients}
                                  classNamePrefix="react-select"/>
                        </div>
                        <div className="cell padding-top20">
                          <button
                            id="middle-label"
                            className="button-aqua text-center"
                            type="submit"
                          >
                            CREATE CASE
                          </button>
                        </div>
                        <Errors errors={selector?.caseError}/>
                      </div>
                    </form>
                  </div>
                </div>
              </div>}
          </div>
        </div>
      </section>
    </article>
  );
}

export default CreateNewCase;