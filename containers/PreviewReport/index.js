import React, {useEffect} from "react";
import Moment from "react-moment";
import HeaderLink from "../../components/Header/HeaderLink";
import {useDispatch, useSelector} from "react-redux";
import {useRouter} from "next/router";
import {getCookie} from "cookies-next";
import {
  fetchCaseInfoLoading,
  fetchClientInfoLoading,
  fetchInvestigatorInfoFromCaseLoading,
  fetchSectionsLoading
} from "./reducer";

const PreviewReport = () => {

  const router = useRouter();
  const dispatch = useDispatch();
  const selector = useSelector(state => state.previewPage);
  const {caseId} = router.query;
  const role = getCookie('role');

  useEffect(() => {
    dispatch(fetchCaseInfoLoading({caseId}));
    dispatch(fetchSectionsLoading({caseId}));
    dispatch(fetchClientInfoLoading({caseId}));
    dispatch(fetchInvestigatorInfoFromCaseLoading({caseId}));
  }, [])

  const {activeCase, sections, client, investigator} = selector;

  const showSectionDetail = (section) => {
    let memberList = [<div/>];
    if (investigator?.member) {
      memberList = investigator.member.split('\n').map(
        (member, index) => {
          return (
            <div key={index}>{member.toUpperCase()}</div>
          );
        });
    }

    if (section.sectionType === "INVESTIGATOR_DESCRIPTION_PAGE") {
      if (investigator)
        return (
          <div className="grid-contain" key={section.uuid}>
            <table>
              <tbody>
              <tr>
                <td className="col1 agency-logo">
                  <img src={investigator.agencyLogo ? investigator.agencyLogo : ''}/>
                </td>
                <td rowSpan="3" className="col2 grid-info">
                  <div className="grid-inner-info">
                    <div className="info_title">PRIVATE INVESTIGATIVE AGENCY</div>
                    <div className="info_desc">
                      <p>{investigator.description ? investigator.description : ''}</p>
                    </div>
                    <div
                      className="invest_name">{(investigator.firstName + " " + investigator.lastName).toUpperCase()}</div>
                    <div className="invest_id">LICENSE ID: {investigator.licenseId ? investigator.licenseId : ''}</div>
                    <div
                      className="invest_info">{investigator.licenseInfo ? (investigator.licenseInfo).toUpperCase() : ''}</div>
                    <div className="invest_member">MEMBER:</div>
                    <div className="member_list">
                      {memberList}
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="col1 report-title">
                  <div className="grid-surv">
                    <div className="report_name">
                      <div>{(activeCase.title).toUpperCase()}</div>
                    </div>
                    <div className="report_sub_name">
                      <div>CONFIDENTIAL</div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="col1 title-gap">
                </td>
              </tr>
              <tr>
                <td colSpan="2">
                  <div className="grid-footer">
                    <div className="footer">
                      <div className="footer1">
                        <strong>{(investigator.agencyName ? investigator.agencyName : '').toUpperCase()}</strong>
                      </div>
                      <div className="footer2">
                        <div className="address1">{investigator.agencyAddress ? investigator.agencyAddress : ''}</div>
                        <div className="address2">
                          {investigator.agencyCity ? investigator.agencyCity + ', ' : ''}
                          {investigator.agencyState} {investigator.agencyZipCode ? investigator.agencyZipCode : ''}
                        </div>
                        <div className="telephone">
                          <label>Telephone: </label><span>{investigator.phone}</span>
                        </div>
                        <div className="fax">
                          <label>Fax: </label><span>{investigator.agencyFax ? investigator.agencyFax : ''}</span>
                        </div>
                        <div className="email">
                          <label>E-mail: </label>
                          <span className="email_address">
                            <a href={"mailto:" + investigator.email}>{investigator.email}</a>
                          </span>
                        </div>
                        <div className="website">
                          <label>Website: </label>
                          <a href={investigator.agencyWebsite ? investigator.agencyWebsite : ''}>
                            {investigator.agencyWebsite ? investigator.agencyWebsite : ''}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        );
    } else if (section.sectionType === "TABLE_OF_CONTENT_PAGE" || section.sectionType === "CLIENT_AND_CASE_DETAILS_PAGE") {
      return (<div key={section.uuid}/>);
    } else {
      return (<div className="reposrt-main-container" key={section.uuid}>
        <div className="report-grey-section">
          <div className="section-header">
            <span>{section.name}</span>
          </div>
          <div dangerouslySetInnerHTML={{__html: section.description}}/>
        </div>
      </div>);
    }
  }

  return (
    <article>
      <section className="dashboard-section previewReportPage">
        <div className="grid-x grid-margin-x medium-margin-collapse">
          <div className="cell auto">
            <section className="text-editor-section">
              <div className="head-row-text-editor">
                <div className="grid-x grid-margin-x medium-margin-collapse">
                  <div className="cell auto">
                    <div className="case-suspected-title">
                      Case: {activeCase !== null ? activeCase.title : ""}
                    </div>
                    <div className="involved-title-green">
                      {activeCase !== null ? activeCase.cause : ""}
                    </div>
                  </div>
                  <div className="cell shrink">
                    <div className="preview-report-list padding-top10">
                      <div className="list-report">
                        <strong>Client:</strong> {client?.companyName ? client.companyName : ''}
                      </div>
                      <div className="list-report">
                        <strong>Date Created:</strong> <Moment date={activeCase?.dateCreated} format={"DD.MM.YY"}/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {role.includes('ROLE_DETECTIVE') &&
            <div>
              <HeaderLink
                href={`/casesection/` + activeCase?.uuid + `/sections/` + (sections ? sections?.[3]?.uuid : '')}
                className="button-aqua text-center backEditBtn">Back to Edit Sections</HeaderLink>
            </div>}
            <div className="text-editor">
              {sections?.map(section => (
                showSectionDetail(section)
              ))}
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}

export default PreviewReport;