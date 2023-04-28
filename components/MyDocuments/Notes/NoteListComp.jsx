import React from "react";

const NoteListComp = ({selected, setEdit}) => {
  return (
    <>
      <div className={`note-list-comp-main ${selected?'selected-gray':''}`} onClick={setEdit}>
        <h5>Lorem Ipson Doer</h5>
        <div style={{ display: "flex", gap: "10px" }}>
          <p>2/27/22</p>
          <p>As the year come to...</p>
        </div>
          </div>
          <hr style={{width: "100%", color: "#d9d9d9"}} />
    </>
  );
};

export default NoteListComp;
