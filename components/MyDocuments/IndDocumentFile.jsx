import React, {useState} from "react";
import {RiDeleteBin6Line, RiEditLine} from "react-icons/ri";
import {MdContentCopy} from "react-icons/md";
import {FiDownload, FiUpload} from "react-icons/fi";
import {BiMove} from "react-icons/bi";
import {useRouter} from "next/router";
import {GoKebabVertical} from "react-icons/go";

const IndDocumentFile = ({ setpopOpen, data, changeOpen, setSelectedId }) => {
  const router = useRouter();

  console.log(data, "my media data");

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
      <input onChange={handleChange} type="checkbox" />
      {data.media.type === "png" && (
        <img
          src={data.media.url}
          alt="image"
          style={{
            cursor: "pointer",
            objectFit: "cover",
          }}
          onClick={() => router.push("/mydocuments/img_preview")}
          width={80}
          height={50}
        />
      )}
      <div style={{display:'flex', justifyContent:'space-between',width:'100%'}}>
        <div className="case-details">
          <h6
            style={{ cursor: "pointer" }}
            onClick={() =>
              router.push(`/mydocuments/${router.query.id}/img_preview`)
            }
          >
            {data.media.name}
          </h6>
          <p>
            <strong>Created: </strong>
            {data.media.created_date}
          </p>
        </div>
        {/* <span className="flex1" style={}/> */}
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
        <p>{data.media.description}</p>
      </div>
      <div className="file-action-div">
        <span
          onClick={() => setpopOpen({ popUpOpen: true, popUpType: "edit" })}
          className="file-grid-item"
        >
          <RiEditLine />
          Edit
        </span>
        <span
          className="file-grid-item"
          onClick={() => setpopOpen({ popUpOpen: true, popUpType: "copy" })}
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
          onClick={() => setpopOpen({ popUpOpen: true, popUpType: "move" })}
        >
          <BiMove />
          Move
        </span>
        <span
          className="file-grid-item"
          onClick={() => setpopOpen({ popUpOpen: true, popUpType: "delete" })}
        >
          <RiDeleteBin6Line />
          Delete
        </span>
        <span
          className="file-grid-item"
          onClick={() => setpopOpen({ popUpOpen: true, popUpType: "share" })}
        >
          <FiUpload />
          Share
        </span>
      </div>
    </div>
  );
};

export default IndDocumentFile;
