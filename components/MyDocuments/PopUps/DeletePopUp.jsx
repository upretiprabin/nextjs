import React from "react";
import { useState } from "react";
import { GrClose } from "react-icons/gr";

const DeletePopUp = ({ setpopOpen, deleteData, closePopup }) => {
  const [deleteString, setdeleteString] = useState('');
  return (
    <div className="pop-body delete-popUp">
      <GrClose className="delete-popUp-close" onClick={setpopOpen} />
      <svg
        width="104"
        height="104"
        viewBox="0 0 104 104"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_1_1670)">
          <path
            d="M52 11C31.5984 11 15 27.5984 15 48C15 68.4016 31.5984 85 52 85C72.4016 85 89 68.4016 89 48C89 27.5984 72.4016 11 52 11ZM55.5577 67.9071H48.4423V60.7917H55.5577V67.9071ZM54.8462 56.5385H49.1538L48.0865 28.0769H55.9135L54.8462 56.5385Z"
            fill="#D02B20"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_1_1670"
            x="0"
            y="0"
            width="104"
            height="104"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="7.5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.845833 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_1_1670"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_1_1670"
              result="shape"
            />
          </filter>
        </defs>
      </svg>

      <h4>Warning Alert</h4>
      <h5 className="alert-msg">
        Are you sure you want to delete this file/folder?<br/> Please type 'DELETE' to confirm.
      </h5>
      <input type="text" placeholder="Type here" value={deleteString} onChange={(e)=>setdeleteString(e.target.value)}/>
      <div className="delete-popUp-btns">
        <button
        disabled={deleteString!=='DELETE'}
          onClick={() => {
            deleteData(), closePopup();
          }}
        >
          DELETE
        </button>
        <button onClick={setpopOpen}>Cancel</button>
      </div>
    </div>
  );
};

export default DeletePopUp;
