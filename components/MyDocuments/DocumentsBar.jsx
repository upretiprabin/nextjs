import React, {useState} from "react";
import Select from "react-select";
import MomentInput from "../MomentInput";
import {getCookie} from "cookies-next";

const DocumentsBar = ({name}) => {
  const [statusValue, setStatusValue] = useState('');
  const [clasificationValue, setclasificationValue] = useState('');
  const changeStartDate = (e) => {

  }
  const changeEndDate = (e) => {

  }
  const onClickFilter = () => {

  }
  const handleChangeSortByStatus = (e) => {

  }
  const handleChangeSortByClassification = (e) => {

  }
  const investigatorId = getCookie('uuid');
  return (
    <section className="text-editor-section hidden-phone">
      <div className="gray-strip columns align-self-middle">
        <div className="grid-x align-middle height-100">
          <div className="small-12 medium-3 large-2 cell">
            <div className="gray-strip-title text-left">
              {name}
            </div>
          </div>
          <div className="small-4 medium-7 large-8 cell">

            <div className="date-range-row">date range</div>
            <div className="button-ow">
              <MomentInput className="date-range-button"
                           format="YYYY-MM-DD" options={false}
                           readOnly={false} monthSelect={false} icon={true}
                           onChange={changeStartDate}/>
              <img
                src={'/images/down-arrow.png'}
                alt="RightArrow"
                className="right-angel"
              />
              <MomentInput className="date-range-button"
                           format="YYYY-MM-DD" options={false}
                           readOnly={false} monthSelect={false} icon={true}
                           onChange={changeEndDate}/>
              <button
                className="date-range-button date-range-button-gray"
                onClick={onClickFilter}>
                Apply
              </button>
            </div>
            <div className="grid-x">
              <div
                className="small-12 medium-9 large-3 cell padding-right-10 padding-bottom-10">
                <Select placeholder="Filter By : Status"
                        isClearable={true}
                        isSearchable={false}
                        value={statusValue}
                        onChange={handleChangeSortByStatus}
                        options={[]}

                />
              </div>
              <div
                className="small-12 medium-9 large-4 cell padding-right-10 padding-bottom-10 wd-35">
                {/* <Select placeholder="Filter By : Classification"
                              isClearable={true}
                              isSearchable={false}
                              value={clasificationValue}
                              onChange={ handleChangeSortByClassification}
                              options={[]}
                            /> */}
                <input
                  placeholder="Search" className="inputClass" style={{
                  width: '100%',
                  height: '2.5rem',
                  border: '1px solid #959595'
                }}/>
              </div>
            </div>
          </div>

          {/* <div className="small-5 medium-2 large-2 cell">
                        <div className="grid-x align-center-middle flex-end">
                          <HeaderLink href={`/createnewcase/${investigatorId}/`}>
                            <div className="add-title">ADD NEW CASE</div>
                          </HeaderLink>
                          <HeaderLink href={`/createnewcase/${investigatorId}/`}>
                            <div className="add-rounded-button">+</div>
                          </HeaderLink>
                        </div>
                      </div> */}
        </div>
      </div>
    </section>
    // <div className="documents-bar">
    //   <div style={{width: "20%"}} className="rigth-col">
    //     <h4>My Documents</h4>
    //   </div>
    //   <div className="left-col">
    //     <div className="serach-div">
    //       <span>
    //         <BsSearch />
    //       </span>
    //       <input type="text" placeholder="Search anything" />
    //       <button className="srch-btn">Search</button>
    //     </div>
    //     <div className="date-div">
    //       <span>
    //         <BsCalendarEvent />
    //       </span>
    //       <input type="date" />
    //       <p>to</p>
    //       <input type="date" />
    //       <button style={{color: "#848484", cursor: "pointer"}} >Clear all</button>
    //     </div>
    //   </div>
    // </div>
  );
};

export default DocumentsBar;
