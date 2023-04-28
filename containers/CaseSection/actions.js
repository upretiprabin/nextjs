import { axiosInstance } from "../../helpers/axiosInstance";
import { deleteData, getData, postData, putData } from "../../helpers/serverHelper";
import { downloadFile } from "../../utils/request";
import { caseinfoError, caseinfoLoading, caseinfoSuccess, clientError, clientLoading, clientSuccess, createSectionError, createSectionLoading, createSectionSuccess, deleteSectionError, deleteSectionLoading, deleteSectionSuccess, downloadReportError, downloadReportSuccess, editSectionError, editSectionLoading, editSectionSuccess, investigatorError, investigatorLoading, investigatorSuccess, sectionError, sectionLoading, sectionSuccess, setSelectedSection } from "./reducer"
import cookie from 'react-cookies';


export const loadCase = async(dispatch,caseId)=>{
  try {
    dispatch(caseinfoLoading());
    const data = await getData('/cases/'+caseId);
    dispatch(caseinfoSuccess(data));
    return data;
  } catch (error) {
    return dispatch(caseinfoError(error));
  }
}

export const loadSection = async(dispatch,caseId)=>{
  try {
    dispatch(sectionLoading(caseId));
    const url = '/sections/' + caseId + "/filter";
    const sections = await getData(url);
    return dispatch(sectionSuccess(sections));
  } catch (e) {
    return dispatch(sectionError(e));
  }
}

export const fetchSection = async(dispatch,caseId,sectionId)=>{
  try {
    dispatch(sectionLoading(caseId));
    const url = '/sections/' + caseId + "/filter";
    const sections = await getData(url);
    const selectedSection = sections.filter(
      (data)=> data.uuid === sectionId
    );
    dispatch(setSelectedSection(selectedSection[0]));
    dispatch(sectionSuccess(sections));
    return selectedSection[0];
  } catch (e) {
    return dispatch(sectionError(e));
  }
}

export const fetchClient = async(dispatch,caseId)=>{
    try {
      dispatch(clientLoading());
      const activeUrl = '/clients/' + "fromCase/" + caseId;
      const clientDetails = await getData(activeUrl);
      dispatch(clientSuccess(clientDetails));
    } catch (error) {
      dispatch(clientError());
    }
}

export const fetchInvestigatorInfo = async(dispatch,caseId)=>{
    try {
      dispatch(investigatorLoading());
      const activeUrl = '/investigators/' + caseId;
      const clientDetails = await getData(activeUrl);
      dispatch(investigatorSuccess(clientDetails));
    } catch (error) {
      dispatch(investigatorError());
    }
}

export const createSection = async(dispatch,caseId,router)=>{
  try {
    const name = "Section Title";
    dispatch(createSectionLoading(caseId));
    let url = '/sections/' + caseId + "/create";
    const newSection = await postData({url, req:{name}});
    dispatch(createSectionSuccess(newSection));
    router.push("/casesection/" + caseId + "/sections/" + newSection.uuid);
  } catch (e) {
    dispatch(createSectionError(e));
  }
}

export const editSection = async(dispatch,caseId,sectionId,name,description)=>{
    dispatch(editSectionLoading(caseId));
    const errors = [];
    if (name === undefined || name.length <= 2 || name === "Section Title") {
      errors.push({ field: "name", code: "Name is not Valid", rejectedValue: "" });
    }
  
    if (errors.length > 0) {
      dispatch(editSectionError(errors));
    } else {
      try {
        const updateUrl = '/sections/' + sectionId + "/update";
        const editSection = await putData({url: updateUrl, req: {name,description}});
        if (editSection.fieldErrors || editSection.globalErrors) {
          return dispatch(sectionError(editSection));
        }
        dispatch(editSectionSuccess("Section Updated"));
        dispatch(setSelectedSection(editSection));
      } catch (e) {
         dispatch(editSectionError(e));
      }
    }
}




export const deleteSection = async(dispatch,caseId,sectionId)=>{
  try {
    dispatch(deleteSectionLoading(caseId));
    const url = '/sections/' + caseId + "/" + sectionId + "/delete";
    const sections = await deleteData(url);
    return dispatch(deleteSectionSuccess());
  } catch (e) {
    return dispatch(deleteSectionError(e));
  }
}

export const downloadReport = async(dispatch,caseId)=>{
  try {
    const token  =  cookie.load('token');
    const investigatorId  =  cookie.load('uuid');
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token.toString()}`
      }
    };
    const url = '/sections/' + "report/" + investigatorId + "/" + caseId;
    await downloadFile(url,options);
    return dispatch(downloadReportSuccess());
  } catch (e) {
    return dispatch(downloadReportError(e));
  }
}

