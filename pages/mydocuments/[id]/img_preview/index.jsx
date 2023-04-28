import React from "react";
import {useRouter} from "next/router";
import {MdOutlineArrowBackIos} from "react-icons/md";
import {FiDownload, FiUpload} from "react-icons/fi";
import {dummy_files, dummy_folders} from "../../../../components/DummyData/dummy";
import Header from "../../../../components/Header";

const ImagePreview = () => {
  const router = useRouter();

  const Preview_Data = dummy_files.filter(
    (ele) => ele.folder_id?.toString() === router.query.id?.toString()
  );

  const Case_Data = dummy_folders.filter(
    (ele) => ele.id?.toString() === router.query.id?.toString()
  );

  console.log(Case_Data, "particular case data");

  return (
    <div className="img-preview-div-main">
      <Header/>
      <div className="img-btn-div">
        <span onClick={() => router.back()}>
          <MdOutlineArrowBackIos />
          Back
        </span>
        <button className="blue-fill-btn">
          <FiDownload /> Download
        </button>
        <button className="blue-fill-btn">
          <FiUpload /> Share
        </button>
      </div>
      <div className="img-preview-div-body">
        <div className="img-main-div">
          {/*<FileViewer*/}
          {/*  fileType={'mp3'}*/}
          {/*  filePath={'/images/dummy.mp3'}*/}
          {/*/>*/}
        </div>
        <div className="file-info-div">
          <div className="file_name_div">
            <h6>{Preview_Data?.[0]?.media?.name}</h6>
          </div>
          <div className="properties-info-div">
            <h6 className="fxdwid">Info:</h6>
            <h6 className="fxdwid">Properties:</h6>
            <div style={{ display: "flex", gap: "4px" }}>
              <h6 className="fxdwid">Saved in:</h6>
              <a
                style={{ borderBottom: "1px solid #337CF3", color: "#337CF3" }}
              >
                {Case_Data?.[0]?.case_name}
              </a>
            </div>
          </div>
          <div className="img-size-div">
            <h6 className="fxdwid">Size</h6>
            <p>Modified</p>
            <h6 className="fxdwid">Type</h6>
            <p>Date Uploaded</p>
            <h6 className="fxdwid">Class</h6>
            <p>Classification</p>
            <h6 className="fxdwid">3.5MB</h6>
            <p>12/30/22, 10:03 AM</p>
            <h6 className="fxdwid">Image</h6>
            <p>12/12/12</p>
            <h6 className="fxdwid">John Smith Project</h6>
            <p>Mystery Shopper</p>
          </div>
          <div className="img-preview-description-div">
            <h6 className="fxdwid">Description:</h6>
            <p>{Preview_Data?.[0]?.media?.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImagePreview;