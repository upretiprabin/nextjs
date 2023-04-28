import {call, fork, put, select, takeEvery, takeLatest} from "redux-saga/effects";
import {
  deleteSectionLoading,
  deleteSectionSuccess,
  deleteSectionError,
  editSectionLoading,
  editSectionSuccess,
  editSectionError,
  fetchEditSectionsLoading,
  fetchEditSectionsSuccess,
  fetchEditSectionsError,
  setSelectedSection, setDataName, setDataContent, setDataSaving
} from "./reducer";
import {SECTION} from "../../helpers/urls";
import {deleteData, getData, putData} from "../../helpers/serverHelper";
import Router from "next/router";
import {SavingState} from "./index";

function* loadSections(action) {
  const caseId = action.payload.caseId;
  const sectionId = action.payload.sectionId;
  try {
    const url = SECTION + "/" + caseId + "/filter";
    const sections = yield call(getData, url);

    yield put(fetchEditSectionsSuccess({sections}));

    if (sectionId) {
      const selectedSection = sections.filter(
        (data) => {
          return data.uuid === sectionId;
        }
      );

      yield put(setSelectedSection({activeSection: selectedSection?.[0]}));
      yield put(setDataName(selectedSection?.[0]?.name || ''));
      yield put(setDataContent(selectedSection?.[0]?.description || ''));
      yield put(setDataSaving(SavingState.SAVED));
    }
  } catch (e) {
    console.log("Error", e)
    yield put(fetchEditSectionsError(e));
  }
}

function* editSection(action) {
  const name = action.payload.name;
  const errors = [];
  if (!name || name.length <= 2 || name === "Section Title") {
    errors.push({field: "name", code: "Name is not Valid", rejectedValue: ""});
  }

  if (errors.length > 0) {
    yield put(editSectionError(errors));
  } else {
    try {
      const selectedSection = yield select((state) => state.editSectionPage.activeSection);
      const updateUrl = SECTION + "/" + selectedSection.uuid + "/update";
      const editSection = yield call(putData, {
        url: updateUrl,
        req: {name: action.payload.name, description: action.payload.content}
      });
      if (editSection.fieldErrors || editSection.globalErrors) {
        yield put(editSectionError(editSection));
        return;
      }
      yield put(editSectionSuccess("Section Updated"));
      yield put(setSelectedSection({activeSection: editSection.selectedSection}));
      yield put(fetchEditSectionsSuccess({sections: editSection.sections}))
    } catch (e) {
      yield put(editSectionError(e));
    }
  }
}

function* deleteSection(action) {
  const caseId = action.payload.caseId;
  try {
    const selectedSection = yield select((state) => state.editSectionPage.activeSection);
    const data = yield call(deleteData, SECTION + "/" + caseId + "/" + selectedSection.uuid + "/delete");
    yield put(deleteSectionSuccess());
    Router.replace(`/casesection/${caseId}`);
  } catch (e) {
    yield put(deleteSectionError(e));
  }
}

function* loadSectionsData() {
  yield takeEvery(fetchEditSectionsLoading.type, loadSections);
}

function* editSectionRequest() {
  yield takeLatest(editSectionLoading.type, editSection);
}

function* deleteSectionRequest() {
  yield takeEvery(deleteSectionLoading.type, deleteSection);
}

export default function* caseEditSectionSaga() {
  yield fork(loadSectionsData);
  yield fork(editSectionRequest);
  yield fork(deleteSectionRequest);
}
