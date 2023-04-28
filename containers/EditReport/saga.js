import {call, fork, put, select, takeLatest} from "redux-saga/effects";
import {
  editCaseLoading,
  editCaseSuccess,
  editCaseError,
  fetchCaseDetailsLoading,
  fetchCaseDetailsSuccess,
  fetchCaseDetailsError
} from "../CreateNewCase/reducer";
import {getData, putData} from "../../helpers/serverHelper";
import {CASE} from "../../helpers/urls";
import swal from "sweetalert";

function* caseRequest(action) {
  const caseId = action.payload.caseId;
  try {
    const activeUrl = CASE + "/" + caseId;
    const caseDetails = yield call(getData, activeUrl);
    const classificationOptions = yield select((state) => state.addNewCase.classificationOptions);
    const clientList = yield select((state) => state.addNewCase.clients);
    const classification = classificationOptions?.find(c => c.value === caseDetails.classification);
    const clientId = clientList?.find(c => c.value === caseDetails.clientId);
    yield put(fetchCaseDetailsSuccess({
      caseName: caseDetails.title,
      cause: caseDetails.cause,
      classification,
      clientId
    }));
  } catch (error) {
    yield put(fetchCaseDetailsError(error));
  }
}

function* updateCase(action) {
  const investigatorId = action.payload.investigatorId;
  const caseId = action.payload.caseId;
  const caseName = action.payload.caseName;
  const cause = action.payload.cause;
  const classification = action.payload.classification;
  const clientId = action.payload.clientId;

  const errors = [];

  if (!caseName || caseName.length <= 2) {
    errors.push({field: "caseName", code: "Case Name is not Valid", rejectedValue: ""});
  }
  if (!cause || cause.length <= 2) {
    errors.push({field: "cause", code: "Cause is not Valid", rejectedValue: ""});
  }
  if (!classification || classification.length <= 2) {
    errors.push({field: "clientEmail", code: "Classification is not Valid", rejectedValue: ""});
  }
  if (!clientId || clientId.length <= 2) {
    errors.push({field: "clientUsername", code: "Client selected is not Valid", rejectedValue: ""});
  }
  if (errors.length > 0) {
    swal("Ohh!", "Something is not correct. Please fix it", "error");
    yield put(editCaseError(errors));
  } else {
    try {
      const activeUrl = CASE + "/" + investigatorId + "/" + clientId + "/" + caseId;
      const caseData = yield call(putData, {url: activeUrl, req: {title: caseName, cause, classification}});
      if (caseData.fieldErrors || caseData.globalErrors) {
        swal("Ohh!", "Something is not correct. Please fix it", "error");
        yield put(editCaseError(caseData));
        return;
      }
      swal("Hurrah", "Your Case has been successfully Updated", "success");
      yield put(editCaseSuccess(caseData));
    } catch (error) {
      swal("Ohh!", "Something is not correct. Please try again", "error");
      yield put(editCaseError(error));
    }
  }
}

function* loadCaseData() {
  yield takeLatest(fetchCaseDetailsLoading.type, caseRequest);
}

function* changeCaseDetail() {
  yield takeLatest(editCaseLoading.type, updateCase);
}

export default function* editCaseSaga() {
  yield fork(loadCaseData);
  yield fork(changeCaseDetail);
}
