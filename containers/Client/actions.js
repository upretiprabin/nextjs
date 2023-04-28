import {
  LOAD_ALL_REPORT,
  LOAD_ALL_REPORT_REQUEST,
  LOAD_ALL_REPORT_ERROR,
  CLIENT_DOWNLOAD_REPORT_ERROR,
  CLIENT_DOWNLOAD_REPORT_REQUEST,
  CLIENT_DOWNLOAD_REPORT_SUCCESS
} from "./constants";

export function fetchAllReports(reports) {
  return {
    type: LOAD_ALL_REPORT,
    reports
  };
}

export function fetchAllReportsRequest() {
  return {
    type: LOAD_ALL_REPORT_REQUEST
  };
}

export function fetchAllReportsError(error) {
  return {
    type: LOAD_ALL_REPORT_ERROR,
    error
  };
}

export function downloadReportRequest(caseId) {
  return {
    type: CLIENT_DOWNLOAD_REPORT_REQUEST,
    caseId
  };
}

export function downloadReportError() {
  return {
    type: CLIENT_DOWNLOAD_REPORT_ERROR
  };
}

export function downloadReportSuccess() {
  return {
    type: CLIENT_DOWNLOAD_REPORT_SUCCESS
  };
}
