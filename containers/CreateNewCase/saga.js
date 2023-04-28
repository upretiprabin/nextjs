import {call, fork, put, takeLatest} from "redux-saga/effects";
import {getData, postData} from "../../helpers/serverHelper";
import {
  addCaseError,
  addCaseLoading,
  addCaseSuccess,
  fetchClientLoading,
  fetchClientSuccess,
  fetchClientError,
  setCaseName,
  setCause,
  setClassification,
  setClientId, fetchCaseDetailsLoading
} from "./reducer";
import {CASE, CLIENTS} from "../../helpers/urls";
import swal from "sweetalert";

function* caseApi(caseName, cause, classification, investigatorId, clientId) {
  const caseUrl = CASE + "/" + investigatorId + "/" + clientId + "/create";
  return yield call(postData, {url: caseUrl, req: {title: caseName, cause, classification}});
}

function* clientApi(investigatorId) {
  const clientListUrl = CLIENTS + "/" + investigatorId + "/clientList";
  return yield call(getData, clientListUrl);
}

function* newRequest(action) {
  const investigatorId = action.payload.investigatorId;
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
    yield put(addCaseError(errors));
  } else {
    try {
      const caseData = yield call(caseApi, caseName, cause, classification, investigatorId, clientId);
      if (caseData.fieldErrors || caseData.globalErrors) {
        swal("Ohh!", "Something is not correct. Please fix it", "error");
        yield put(addCaseError(caseData));
        return;
      }
      swal("Congratulations", "New Case has been created", "success");
      yield put(addCaseSuccess());
      yield put(setCaseName(""));
      yield put(setCause(""));
      yield put(setClassification(null));
      yield put(setClientId(null));
    } catch (error) {
      swal("Ohh!", "Something is not correct. Please try again", "error");
      yield put(addCaseError(error));
    }
  }
}

function* clientRequest(action) {
  try {
    const investigatorId = action.payload.investigatorId;
    const clients = yield call(clientApi, investigatorId);
    const classificationOptions = clients?.classificationOptionsList;
    const clientList = [];
    clients?.clientList?.forEach(data => {
      let jsonParam = {};
      jsonParam.value = data?.uuid;
      jsonParam.label = data?.companyName ? data?.companyName : '';
      clientList.push(jsonParam);
    });
    yield put(fetchClientSuccess({clientList, classificationOptions}));
    if (action.payload.from === 'edit')
      yield put(fetchCaseDetailsLoading({caseId: action.payload.caseId}))
  } catch (error) {
    console.log("FETCH CLIENT ERROR", error);
    yield put(fetchClientError(error));
  }
}


function* newCaseCreateRequest() {
  yield takeLatest(addCaseLoading.type, newRequest);
}

function* loadClientsList() {
  yield takeLatest(fetchClientLoading.type, clientRequest);
}

export default function* newCaseSaga() {
  yield fork(newCaseCreateRequest);
  yield fork(loadClientsList);
}