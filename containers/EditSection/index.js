import React, {useEffect} from "react";
import "font-awesome/css/font-awesome.css";
import Aside from "../../components/Aside";
import HeaderLink from "../../components/Header/HeaderLink";
import swal from "sweetalert";
import Moment from "react-moment";
import AutoSaveDisplay from "../../components/AutoSaveDisplay";
import {Editor} from '@tinymce/tinymce-react';
import RouteLeavingPrompt from "../../components/RouteLeavingPrompt";
import {useDispatch, useSelector} from "react-redux";
import {useRouter} from "next/router";
import {fetchCaseInfoLoading, fetchClientInfoLoading} from "../PreviewReport/reducer";
import {editSectionLoading, fetchEditSectionsLoading, setDataContent, setDataName, setDataSaving} from "./reducer";
import Loader from "../../components/LoadingIndicator/Loader";
import {axiosInstance} from "../../helpers/axiosInstance";
import {getCookie} from "cookies-next";
import {downloadReportData} from "../MyReports/actions";
import swal2 from "sweetalert2";

export const SavingState = {
  NOT_SAVED: 0,
  SAVING: 1,
  SAVED: 2
};

const preview_pdf = <span className="file_preview"><i className="fa fa-search-plus" aria-hidden="true"/></span>;
const download_pdf = <span className="file_download"><i className="fa fa-download" aria-hidden="true"/></span>;

const EditSection = () => {

  const router = useRouter();
  const dispatch = useDispatch();
  const selector = useSelector(state => state.editSectionPage);
  const selector1 = useSelector(state => state.previewPage);
  const {caseId, sectionId} = router.query;

  const handleEditorChange = (content, editor) => {
    if (selector.name === "Section Title") {
      swal({
        title: "Ohh!!",
        text: "Please change Section Title",
        icon: "error"
      });
      editor.setContent('');
    } else {
      const noChange = selector?.content.replaceAll("&",'') === content.replaceAll("&amp;","");
      if(!noChange) {
        dispatch(setDataContent(content));
        dispatch(setDataSaving(SavingState.NOT_SAVED));
      }
    }
  }

  useEffect(() => {
    dispatch(fetchCaseInfoLoading({caseId}));
    dispatch(fetchClientInfoLoading({caseId}));
    dispatch(fetchEditSectionsLoading({caseId, sectionId}));
  }, [sectionId]);

  const handleChange = (event) => {
    const target = event.target;
    dispatch(setDataName(target.value));
  }

  const downloadReportClick = () => {
    downloadReportData(dispatch, caseId);
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(editSectionLoading({caseId, sectionId, name: selector.name, content: selector.content}));
  }

  const inputHandler = (input, callback) => {
    input.onchange = async () => {
      const file = input.files[0];
      const formData = new FormData();
      formData.append('file', file);
      try {
        const token = getCookie("token");
        const response = await axiosInstance.post(process.env.NEXT_PUBLIC_API_URL + "/uploadSecure/" + sectionId, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token?.toString()}`
          },
        });

        const url = response.data.link;
        callback(url, {title: file.name});
      } catch (error) {
        console.error(error);
      }
    };
    input.click();
  }

  const handleImageUpload = (callback) => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    inputHandler(input, callback);
  };

  const handleAudioUpload = (callback) => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'audio/*');
    inputHandler(input, callback);
  };

  const handleVideoUpload = (callback) => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'video/*');
    inputHandler(input, callback);
  };

  const handleFileUpload = (callback) => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'application/pdf,.doc,.docx,.ppt,.pptx,.zip');
    inputHandler(input, callback);
  };

  const handleDelete = (url) => {
    const token = getCookie("token");
    const api = `${process.env.NEXT_PUBLIC_API_URL}/mediaFiles/${sectionId}/delete`;
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token?.toString()}`
      },
      body: JSON.stringify({data: url})
    };
    fetch(api, options);
  }

  const handleDeleteImage = (url) => {
    handleDelete(url);
  };

  const handleDeleteAudio = (url) => {
    handleDelete(url);
  };

  const handleDeleteVideo = (url) => {
    handleDelete(url);
  };

  const handleDeleteFile = (url) => {
    handleDelete(url);
  };

  const handleFileRemoved = (file) => {
    console.log("REMOVED", file.url);
    if (file.type === 'image') {
      handleDeleteImage(file.url);
    } else if (file.type === 'audio') {
      handleDeleteAudio(file.url);
    } else if (file.type === 'video') {
      handleDeleteVideo(file.url);
    } else {
      handleDeleteFile(file.url);
    }
  };

  const {activeCase, client} = selector1;
  const whenUnsaved = SavingState.NOT_SAVED === selector?.saving;
  const message = 'You have unsaved changes. Are you sure to leave the page?';

  return (
    <article>
      <RouteLeavingPrompt when={whenUnsaved}
                          message={message}/>
      <section className="dashboard-section editSectionPage">
        <div className="grid-x grid-margin-x medium-margin-collapse">
          <div className="cell shrink">
            <Aside sections={selector?.sections} caseId={caseId} selectedSection={selector?.activeSection}/>
          </div>
          <div className="cell auto">
            <section className="text-editor-section">
              <div className="top-row-text-editor">
                <div className="grid-x grid-margin-x medium-margin-collapse">
                  <div className="cell auto">
                    <div className="case-suspected-title">
                      Case: {activeCase ? activeCase.title : ""}
                    </div>
                    <div className="involved-title-green">
                      {activeCase ? activeCase.cause : ""}
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
                  <div className="file_icons cell shrink" title={"Preview Report"}>
                    <div className="cell shrink prv">
                      <HeaderLink href={"/preview/" + caseId}>{preview_pdf}</HeaderLink>
                    </div>
                    <div className="cell shrink dwn" title={"Download Report"}>
                      <button onClick={downloadReportClick}
                              className="notification-btn">
                        {download_pdf}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {selector?.loading && <Loader/>}
            {!selector?.loading && <div className="text-editor">
              <form>
                <div className="grid-x grid-padding-x">
                  <div className="cell padding-top20">
                    <button id="updateSection" onClick={handleSubmit}
                            className="button-aqua text-center float-right box-shadow pi-15">
                      Update Section
                    </button>
                  </div>
                  <div className="cell padding-top10">
                    <label htmlFor="case-label">SECTION NAME: </label>
                    <input type="text" id="name" placeholder="Enter here ..."
                           value={selector?.name ? selector.name : ""}
                           onChange={handleChange}/>
                  </div>

                  <div className="cell padding-top10">
                    <div className="label-wrapper">
                      <label htmlFor="case-label">SECTION DESCRIPTION: </label>
                      <AutoSaveDisplay saving={selector?.saving}/>
                    </div>
                    <Editor
                      // apiKey="YOUR_API_KEY_HERE"
                      value={selector?.content || ''}
                      init={{
                        content_css: '/css/tinyEditor.css',
                        height: 500,
                        menubar: false,
                        plugins: ['advlist', 'autolink', 'lists', 'link', 'image',
                          'charmap', 'print', 'preview', 'anchor', 'help',
                          'searchreplace', 'visualblocks', 'code',
                          'insertdatetime', 'media', 'table', 'paste', 'wordcount'],
                        toolbar: 'bold italic underline subscript superscript | fontsize forecolor |  | \
                          alignleft aligncenter alignright bullist numlist outdent indent | \
                          link insertImage insertVideo insertAudio insertFile table | hr selectall removeformat | undo redo',
                        setup: (editor) => {
                          // editor.on('init', (e) => {
                          //   const observer = new MutationObserver((mutationsList) => {
                          //     for (const mutation of mutationsList) {
                          //       if (mutation.type === "childList" && mutation.removedNodes.length > 0) {
                          //         // The removedNodes property contains a NodeList of removed elements
                          //         // You can access the value of the deleted element before it was removed
                          //         // by storing it in a variable before removing it from the editor's content area.
                          //         console.log("Deleted element:", mutation.removedNodes[0]);
                          //       }
                          //     }
                          //   });
                          //
                          //   const targetNode = editor.getBody();
                          //   const config = {childList: true, subtree: true};
                          //
                          //   observer.observe(targetNode, config);
                          //   return () => {
                          //     observer.disconnect();
                          //   };
                          //
                          // });
                          editor.ui.registry.addButton('insertImage', {
                            icon: 'imageIcon',
                            onAction: () => handleImageUpload((url) => editor
                              .insertContent(`<img src="${url}" />`)),
                            tooltip: 'Insert image'
                          });
                          editor.ui.registry.addButton('insertVideo', {
                            icon: 'videoIcon',
                            onAction: () => handleVideoUpload((url) => editor
                              .insertContent(`<video controls src="${url}" />`)),
                            tooltip: 'Insert video'
                          });
                          editor.ui.registry.addButton('insertAudio', {
                            icon: 'audioIcon',
                            onAction: () => handleAudioUpload((url) => editor
                              .insertContent(`<audio controls src="${url}" />`)),
                            tooltip: 'Insert audio'
                          });
                          editor.ui.registry.addButton('insertFile', {
                            icon: 'fileIcon',
                            onAction: () => handleFileUpload((url, content) => editor
                              .insertContent(`<a href="${url}">${content.title}</a>`)),
                            tooltip: 'Insert file'
                          });
                          editor.ui.registry.addIcon('imageIcon', '<svg width="18px" height="18px" ' +
                            'viewBox="0 -2 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg"' +
                            ' xmlns:xlink="http://www.w3.org/1999/xlink">\n' +
                            '    \n' +
                            '    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n' +
                            '        <g id="Dribbble-Light-Preview" transform="translate(-380.000000, -3881.000000)" ' +
                            'fill="#000000">\n' +
                            '            <g id="icons" transform="translate(56.000000, 160.000000)">\n' +
                            '                <path d="M336,3725.5 C336,3724.948 336.448,3724.5 337,3724.5 C337.552,' +
                            '3724.5 338,3724.948 338,3725.5 C338,3726.052 337.552,3726.5 337,3726.5 C336.448,3726.5 ' +
                            '336,3726.052 336,3725.5 L336,3725.5 Z M340,3733 L328,3733 L332.518,3726.812 L335.354,' +
                            '3730.625 L336.75,3728.75 L340,3733 Z M326,3735 L342,3735 L342,3723 L326,3723 L326,3735' +
                            ' Z M324,3737 L344,3737 L344,3721 L324,3721 L324,3737 Z" id="image_picture-[#972]">\n' +
                            '</path>\n' +
                            '            </g>\n' +
                            '        </g>\n' +
                            '    </g>\n' +
                            '</svg>');
                          editor.ui.registry.addIcon('videoIcon', '<svg fill="#000000" width="23px" ' +
                            'height="23px" viewBox="-4 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">\n' +
                            '<path d="M15.5 13.219l6.844-3.938c0.906-0.531 1.656-0.156 1.656 0.938v11.625c0 ' +
                            '1.063-0.75 1.5-1.656 0.969l-6.844-3.969v2.938c0 1.094-0.875 1.969-1.969 ' +
                            '1.969h-11.625c-1.063 0-1.906-0.875-1.906-1.969v-11.594c0-1.094 0.844-1.938 ' +
                            '1.906-1.938h11.625c1.094 0 1.969 0.844 1.969 1.938v3.031z"></path>\n' +
                            '</svg>');
                          editor.ui.registry.addIcon('audioIcon', '<svg width="33px" height="33px" ' +
                            'viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">\n' +
                            '<style>.st6{fill:#1d1d1b}</style>\n' +
                            '<g id="ICONS">\n' +
                            '<path class="st6" d="M545.8 294.7L363.7 431.5c-1.2.9-2 2.1-2.7 3.3H256v154.5h105c.7 ' +
                            '1.2 1.6 2.4 2.7 3.3l182.1 136.7c7.2 5.4 17.5.3 17.5-8.7V303.5c0-9-10.3-14.2-17.5-' +
                            '8.8zM668 691.7c-8.8 0-17.4-4.5-22.2-12.7-7.1-12.2-3-27.9 9.2-35 2.4-1.4 61.7-38.4 ' +
                            '61.7-132 0-95-61.1-131.6-61.7-132-12.2-7.1-16.3-22.8-9.2-35 7.1-12.2 22.8-16.3 ' +
                            '35-9.2 3.7 2 87.2 52.2 87.2 176.2s-83.5 174.2-87.1 176.2c-4.1 2.4-8.5 3.5-12.9 ' +
                            '3.5z"/>\n' +
                            '<path class="st6" d="M613.2 621.2c-8.8 0-17.4-4.5-22.1-12.7-7.1-12.2-3-27.9 9.2-35 ' +
                            '.7-.4 24.6-16 24.6-55.1s-23.9-54.7-25-55.4c-11.8-7.4-15.7-23.1-8.4-35 7.2-12 22.5-16 ' +
                            '34.6-9 2 1.2 50 29.9 50 99.4s-48 98.2-50 99.4c-4.1 2.3-8.5 3.4-12.9 3.4z"/>\n' +
                            '</g>\n' +
                            '</svg>');
                          editor.ui.registry.addIcon('fileIcon', '<svg fill="#000000" width="18px" ' +
                            'height="18px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">\n' +
                            '<path d="M4 30.016q0 0.832 0.576 1.408t1.44 0.576h20q0.8 0 1.408-0.576t0.576-1.' +
                            '408v-22.016l-8-8h-13.984q-0.832 0-1.44 0.608t-0.576 1.408v28zM8 28v-24h10.016v6.' +
                            '016h5.984v17.984h-16z"></path>\n' +
                            '</svg>');
                        }
                      }}
                      onEditorChange={handleEditorChange}
                    />
                  </div>
                </div>
              </form>
            </div>}
          </div>
        </div>
      </section>
    </article>
  );
}

export default EditSection;