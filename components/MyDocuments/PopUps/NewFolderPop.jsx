import React from "react";
import { FaFolder } from "react-icons/fa";
import Select from "react-select";
const NewFolderPop = ({
  setTitle,
  setDescription,
  setProject,
  title,
  description,
  project,
  error
}) => {
  return (
    <div className="pop-body">
      <div className="pop-case-name">
        <FaFolder size={54} color={"337CF3"} />
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Folder name"
        />
        {(error && title === "") && (
          <p style={{ color: "red", fontSize: "14px", display: "block" }}>
            This field is required
          </p>
        )}
      </div>
      <div>
        <h6>Description</h6>
        <textarea
        value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description here"
        />{" "}
        {(error && description === "") && (
          <p style={{ color: "red", fontSize: "14px", display: "block" }}>
            This field is required
          </p>
        )}
      </div>
      <div className="case-project-div">
        <h6>Case:</h6>
        <Select
placeholder="Case:"
isClearable={true}
isSearchable={false}
value={project}
onChange={(e)=> setProject(e.target.value)}
options={[project]}
        />
        {/* <input
          type="text"
          onChange={(e) => setProject(e.target.value)}
          placeholder="Associated case ..."
        />{" "} */}
        {(error && project === "") && (
          <p style={{ color: "red", fontSize: "14px", display: "block" }}>
            This field is required
          </p>
        )}
      </div>
    </div>
  );
};

export default NewFolderPop;
