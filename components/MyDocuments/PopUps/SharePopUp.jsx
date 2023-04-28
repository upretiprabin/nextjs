import React from "react";
import { GrClose } from "react-icons/gr";
import { FaFolder } from "react-icons/fa";

const SharePopUp = ({ setpopOpen, selectedId, data }) => {
  return (
    <div className="share-popUp">
      <GrClose className="delete-popUp-close" onClick={setpopOpen} />
      <div className="share-popUp-project">
        <FaFolder size={30} color="#337CF3" />
        <div>
          <h6>{data.find((item) => item.id === selectedId).folder_title}</h6>
          <p style={{ fontSize: "12px" }}>Only you can access</p>
        </div>
      </div>
      <div style={{ marginTop: "34px" }}>
        <h4>Share this file</h4>
        <h6>Anyone with this link can:</h6>
        <div>
          <input type="checkbox" />
          <label htmlFor="edit">Edit</label>
          <input type="checkbox" />
          <label htmlFor="view">View</label>
        </div>
      </div>
      <div className="emailsDiv">
        {[0, 1, 2, 3].map((item, i) => (
          <div className="ind-email-div" key={i}>
            JaneD@xmail.com <GrClose />
          </div>
        ))}
        <p>add more emails</p>
      </div>
      <button className="blue-fill-btn share-file-popUp-btn">Share file</button>
    </div>
  );
};

export default SharePopUp;
