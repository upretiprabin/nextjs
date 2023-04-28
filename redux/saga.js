import { fork } from 'redux-saga/effects';
import loginSaga from '../containers/Login/saga';
import newCaseSaga from "../containers/CreateNewCase/saga";
import editCaseSaga from "../containers/EditReport/saga";
import clientCaseSaga from "../containers/Client/saga";
import caseEditSectionSaga from "../containers/EditSection/saga";
import casePreviewSectionSaga from "../containers/PreviewReport/saga";
import activityLogsSaga from "../containers/MyActivityLogs/saga";
import activeActivityLogsSaga from "../containers/ActiveActivityLogs/saga";

export function* rootSaga() {
  yield fork(loginSaga);
  yield fork(newCaseSaga);
  yield fork(editCaseSaga);
  yield fork(clientCaseSaga);
  yield fork(caseEditSectionSaga);
  yield fork(casePreviewSectionSaga);
  yield fork(activityLogsSaga);
  yield fork(activeActivityLogsSaga);
}
