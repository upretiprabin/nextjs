import React from "react";
// import "./style.css";
import {BsCheckAll} from "react-icons/bs";
import {ThreeDots} from "react-loader-spinner";

const AutoSaveDisplay = ({saving}) => {
  let display;
  switch (saving) {
    case 1:
      display = (
        <div className="wrapper">
          <ThreeDots
            height="25"
            width="20"
            radius="9"
            color="#4fa94d"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
          <em>saving...</em>
        </div>);
      break;
    case 2:
      display = (
        <>
          <BsCheckAll/>
          <em>saved!</em>
        </>
      );
      break;
    default:
      display = <em></em>;
  }
  return <div className="auto-save-display">{display}</div>;
};

export default AutoSaveDisplay;
