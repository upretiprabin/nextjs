import {useRouter} from "next/router";
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {createSection} from "../../containers/CaseSection/actions";
import HeaderLink from "../Header/HeaderLink";
import {deleteSectionLoading} from "../../containers/EditSection/reducer";
import {SavingState} from "../../containers/EditSection";

const Aside = ({sections, caseId, selectedSection}) => {

  const router = useRouter();
  const dispatch = useDispatch();
  const [addClass, setAddClass] = useState(false);
  const selector = useSelector(state => state.editSectionPage);

  const toggle = () => {
    setAddClass(prev => !prev);
  }

  const deleteSectionClick = () => {
    dispatch(deleteSectionLoading({caseId}));
  }

  const showSelectionsName = () => {
    let boxClass = ["confirmation-pop-up"];
    if (addClass) {
      boxClass.push("show");
    }

    sections = sections || [];
    return sections.map((section) => {
        if (section !== null) {
          return <li key={section.uuid}>
            <HeaderLink href={`/casesection/${caseId}/sections/${section.uuid}`}
                        className={section.uuid === selectedSection?.uuid ? "active" : ""}>
              <i className="closeIcon" onClick={toggle}> </i>
              <div className={boxClass.join(" ")}>
                <div className="confirmation-head">Do you want to delete section?
                  <i className="close-pop-up" onClick={toggle}/></div>
                <div className="confirmation-body">
                  <button className="button-aqua text-center" type="button" onClick={deleteSectionClick}>YES
                  </button>
                  <button className="button-aqua text-center cencelBtn" type="button"
                          onClick={toggle}>NO
                  </button>
                </div>

              </div>
              <span>{section.name}</span>
            </HeaderLink>
          </li>;
        } else {
          return <></>
        }
      }
    );
  }

  const createSectionClick = () => {
    if (selector?.saving === SavingState.SAVED)
      createSection(dispatch, caseId, router);
  }

  return (
    <div className="dash-board-menu-left">
      <div className="create-section">
        <button onClick={createSectionClick}><span className="add-icon">
          <img src={'/images/plus.png'}/></span>CREATE SECTION
        </button>
      </div>
      <div className="main-menu-dash">
        <ul>
          {showSelectionsName()}
        </ul>
      </div>
    </div>
  );
}

export default Aside;