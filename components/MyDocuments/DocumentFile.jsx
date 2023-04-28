import React, { useState } from "react";
import { FaFolder } from "react-icons/fa";
import { RiEditLine, RiDeleteBin6Line } from "react-icons/ri";
import { MdContentCopy } from "react-icons/md";
import { FiDownload, FiUpload } from "react-icons/fi";
import { BiMove } from "react-icons/bi";
import { useRouter } from "next/router";
import { GoKebabVertical } from "react-icons/go";

const DocumentFile = ({
  setpopOpen,
  changeOpen,
  data,
  selectedId,
  setSelectedId,
  setDataArray,
  setError,
  setData
}) => {
  const router = useRouter();

  // console.log(data, "data");

  const [isChecked, setisChecked] = useState(false);

  const handleChange = (e) => {
    // console.log(e.target.checked)
    setisChecked(e.target.checked);
  };

  return (
    <div
      style={isChecked ? { backgroundColor: "#CDE0FE" } : null}
      className="document-file-div"
    >
      {" "}
      <div className="folder-and-title-container">
        <input onChange={handleChange} type="checkbox" />
        <FaFolder color="#337CF3" size={38} />
        <div>
          <div
            style={{ cursor: "pointer" }}
            onClick={() => router.push(`/mydocuments/${data?.id}`)}
            className="case-details"
          >
            <h6 className="width-280">{data?.folder_title}</h6>
            <p>
              <strong>Created: </strong>
              {data?.created_date}
            </p>
            <p>
              <strong>Modified: </strong>
              {data?.modified_data}
            </p>
          </div>
          <div className="case-link">
            <h6>Case:</h6>
            <a className="theft-link">{data?.case_name}</a>
          </div>
        </div>

        <span className="flex1" />
        <span
          onClick={() => {
            changeOpen(), setSelectedId(data?.id);
          }}
          className="mobile-edit-popup-menu"
        >
          <GoKebabVertical />
        </span>
      </div>
      <div className="file-description">
        <h6>Description</h6>
        <p>{data?.folder_description}</p>
      </div>
      <div className="file-action-div">
        <span
          className="file-grid-item"
          onClick={() => {
            setError(false);
            setpopOpen({ popUpOpen: true, popUpType: "edit" }),
              setSelectedId(data?.id);
              setData(data?.folder_title,data?.folder_description,data?.case_name);
          }}
        >
          <RiEditLine />
          Edit
        </span>
        <span
          className="file-grid-item"
          onClick={() => {
            setpopOpen({ popUpOpen: true, popUpType: "copy" }),
              setSelectedId(data?.id);
          }}
        >
          <MdContentCopy />
          Copy
        </span>
        <span className="file-grid-item">
          <FiDownload />
          Download
        </span>
        <span
          className="file-grid-item"
          onClick={() => {
            setpopOpen({ popUpOpen: true, popUpType: "move" }),
              setSelectedId(data?.id);
          }}
        >
          <BiMove />
          Move
        </span>
        <span
          className="file-grid-item"
          onClick={() => {
            setpopOpen({ popUpOpen: true, popUpType: "delete" }),
              setSelectedId(data?.id);
          }}
        >
          <RiDeleteBin6Line />
          Delete
        </span>
        <span
          className="file-grid-item"
          onClick={() => {
            setpopOpen({ popUpOpen: true, popUpType: "share" }),
              setSelectedId(data?.id);
          }}
        >
          <FiUpload />
          Share
        </span>
      </div>
    </div>
  );
};

export default DocumentFile;
