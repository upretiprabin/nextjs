import React from "react";
import { FaFolder } from "react-icons/fa";

const EditPopUp = ({ data, selectedId }) => {
  const itemData = data.find((item) => item.id === selectedId);
  console.log(selectedId, "itemdata", data);
  return (
    <div className="pop-body">
      <div className="pop-case-name">
        <FaFolder size={54} color={"337CF3"} />
        <div>
          <input type="text" defaultValue={itemData?.folder_title} />
          <p>3 MB, modified 10 seconds ago</p>
        </div>
      </div>
      <div className="editpopup-description">
        <h6>Description</h6>
        <textarea defaultValue={itemData?.folder_description} />
      </div>
      <div className="case-project-div">
        <h6>Case/Project:</h6>
        <input type="text" defaultValue={itemData?.case_name} />
      </div>

      <div className="editpopup-author-container">
        <div>
          <h6>Created by:</h6>
          <p>John Smith</p>
        </div>

        <div>
          <h6>Date created:</h6>
          <p>12/12/22</p>
        </div>
      </div>

      <div className="editpopup-author-container">
        <div>
          <h6>Agency:</h6>
          <p>X company</p>
        </div>
      </div>
    </div>
  );
};

export default EditPopUp;
