import React, { useState } from 'react'
import { RiEditLine, RiDeleteBin6Line } from "react-icons/ri";
import { MdContentCopy } from "react-icons/md";
import { FiDownload, FiUpload } from "react-icons/fi";
import { BiMove } from "react-icons/bi";
import { FaFolder } from 'react-icons/fa'
import { RxCross2 } from 'react-icons/rx';
import EditPopUp from './PopUps/EditPopUp';
import NewFolderPop from './PopUps/NewFolderPop';
import CopyPopUp from './PopUps/CopyPopUp';
import DeletePopUp from './PopUps/DeletePopUp';
import SharePopUp from './PopUps/SharePopUp';

const MobileMyDocuments = ({ isOpen, changeOpen, data, selectedId, setDataArray, dataArray }) => {
    // console.log(data, "mobile data");

    const [popOpen, setpopOpen] = useState({ popUpOpen: false, popUpType: "" });
    return (
        <div className={`mobile-richtext ${isOpen ? 'active' : ''}`}>
            <div className='spacer'>

            </div>

            {popOpen.popUpOpen ? (
                <div className="action-pop-up ">
                    <div
                        className={
                            popOpen.popUpType === "delete" || popOpen.popUpType === "share"
                                ? "centerd-popUp"
                                : "pop-div"
                        }
                    >
                        {popOpen.popUpType === "delete" ||
                            popOpen.popUpType === "share" ? null : (
                            <div className="pop-header">
                                <button
                                    className="blue-outline-btn"
                                    onClick={() =>
                                        setpopOpen({ popUpOpen: false, popUpType: "" })
                                    }
                                >
                                    Cancel
                                </button>
                                {popOpen.popUpType === "edit" && <h6>Edit folder</h6>}
                                {popOpen.popUpType === "new-folder" && <h6>New folder</h6>}
                                <button className="blue-fill-btn">
                                    {popOpen.popUpType === "copy"
                                        ? "Copy"
                                        : popOpen.popUpType === "move"
                                            ? "Move"
                                            : "Save"}
                                </button>
                            </div>
                        )}
                        {popOpen.popUpType === "edit" && <EditPopUp selectedId={selectedId} data={data} />}
                        {popOpen.popUpType === "new-folder" && <NewFolderPop />}
                        {popOpen.popUpType === "copy" && (
                            <CopyPopUp selectedId={selectedId}
                                data={data} title="Copy 1 item to... " />
                        )}
                        {popOpen.popUpType === "move" && (
                            <CopyPopUp selectedId={selectedId}
                                data={data} title="Move 1 item to... " />
                        )}
                        {popOpen.popUpType === "delete" && (
                            <DeletePopUp deleteData={() =>
                                setDataArray(
                                    dataArray.filter((item) => item.id !== selectedId)
                                )
                            } closePopup={changeOpen}
                                setpopOpen={() =>
                                    setpopOpen({ popUpOpen: false, popUpType: "" })
                                }
                            />
                        )}
                        {popOpen.popUpType === "share" && (
                            <SharePopUp selectedId={selectedId}
                                data={data}
                                setpopOpen={() =>
                                    setpopOpen({ popUpOpen: false, popUpType: "" })
                                }
                            />
                        )}
                    </div>
                </div>
            ) :


                <div className="file-action-div-mobile">

                    <div className='documents-slider-info'>
                        <FaFolder color="#337CF3" size={38} />
                        <h6>{data.find((item) => item.id === selectedId)?.folder_title}</h6>
                        <span className='spacer'></span>
                        <RxCross2 color='gray' size={24} onClick={changeOpen} />
                    </div>

                    <div className='mobile-documents-action-container'>
                        <span
                            className="file-grid-item"
                            onClick={() => setpopOpen({ popUpOpen: true, popUpType: "edit" })}
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
                            onClick={() => setpopOpen({ popUpOpen: true, popUpType: "share" })}
                        >
                            <FiUpload />
                            Share
                        </span>

                        <span
                            className="file-grid-item color-red"
                            onClick={() => setpopOpen({ popUpOpen: true, popUpType: "delete" })}
                        >
                            <RiDeleteBin6Line />
                            Delete
                        </span>
                    </div>
                </div>}
        </div>
    )
}

export default MobileMyDocuments