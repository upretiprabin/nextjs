import {getData} from "../../helpers/serverHelper";
import {CASE, SECTION} from "../../helpers/urls";
import {
  failedCases,
  failedSections,
  loadingCases,
  loadingDashboard,
  loadingSections, stopLoading,
  successCases,
  successSections
} from "./reducer";
import {getCookie} from "cookies-next";

export const getCases = async (dispatch) => {
  try {
    const uuid = getCookie('uuid');
    console.log(uuid);
    dispatch(loadingCases(uuid));
    const cases = await getData(CASE + '/' + uuid + '/list');
    console.log(cases);
    dispatch(successCases({cases: cases}));
  } catch (error) {
    dispatch(failedCases({error: error}));
  }
}

export const getSections = async (dispatch, selectedCase, cb) => {
  try {
    dispatch(loadingSections());
    // dispatch(loadingDashboard());
    const sections = await getData(`${SECTION}/${selectedCase.uuid}/filter`);
    console.log('sections', sections);
    // dispatch(successSections());
    if (sections && sections.length > 0) {
      cb("/casesection/" + selectedCase.uuid + "/sections/" + sections[0].uuid);
    } else {
      cb("/casesection/" + selectedCase.uuid);
    }
  } catch (error) {
    dispatch(failedSections({error: error}));
  }
}


