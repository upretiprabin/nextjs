import {configureStore} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import authReducer from '../containers/Login/reducer';
import registerReducer from '../containers/Register/reducer';
import dashboardReducer from '../containers/DashBoard/reducer';
import casePageReducer from '../containers/MyReports/reducer';
import editSectionReducer from '../containers/EditSection/reducer';
import previewReducer from '../containers/PreviewReport/reducer';
import clientCaseReducer from '../containers/Client/reducer';
import clientReducer from '../containers/CreateNewClient/reducer';
import editClientReducer from '../containers/EditClient/reducer';
import clientsReducer from '../containers/MyClients/reducer';
import infoReducer from '../components/Header/reducer';
import activityLogsReducer from '../containers/MyActivityLogs/reducer';
import activeActivityLogsReducer from '../containers/ActiveActivityLogs/reducer';
import verificationReducer from '../containers/VerificationCode/reducer';
import forgotPasswordReducer from '../containers/ForgotPassword/reducer';
import popupReducer from '../components/popups/reducer';
import addCaseReducer from '../containers/CreateNewCase/reducer';
import caseSectionReducer from '../containers/CaseSection/reducer';
import {rootSaga} from "./saga";

const sagaMiddleware = createSagaMiddleware();

const initialState = {
  reducer: {
    auth: authReducer,
    register: registerReducer,
    verify: verificationReducer,
    dashboard: dashboardReducer,
    casePage: casePageReducer,
    editSectionPage: editSectionReducer,
    previewPage: previewReducer,
    clientCasePage: clientCaseReducer,
    info: infoReducer,
    client: clientReducer,
    editClient: editClientReducer,
    clients: clientsReducer,
    activityLogs: activityLogsReducer,
    activeActivityLogs: activeActivityLogsReducer,
    forgotPassword: forgotPasswordReducer,
    popup:popupReducer,
    section:caseSectionReducer,
    addNewCase:addCaseReducer,
  },
  middleware: [sagaMiddleware]
};

const store = configureStore(initialState);

sagaMiddleware.run(rootSaga);

export default store;