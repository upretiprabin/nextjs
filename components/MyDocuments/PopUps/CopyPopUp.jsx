import React from "react";
import { FaFolder } from "react-icons/fa";

const CopyPopUp = ({ title = "", data, selectedId }) => {
  // console.log(data, "selectedId");
  return (
    <div className="pop-body">
      <div className="copy-popup-copyto">
        <h6>{title}</h6>
        <span>
          <FaFolder size={18} color="#337CF3" />
          {data.find((item) => item.id === selectedId).folder_title}
        </span>
      </div>
      <div style={{
        height:'200px',
        overflowY:'scroll'
      }}>
        {data.map((item, i) => (
          <div key={i} className="copy-popup-ind-folder">
            <FaFolder size={36} color="#337CF3" />
            <h6>{item.folder_title}</h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CopyPopUp;
