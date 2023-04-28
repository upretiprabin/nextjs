import React, { useState, useEffect } from "react";
import { BsCalendarEvent, BsSearch } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { BiCalendar } from "react-icons/bi";
import { FaRegFolder } from "react-icons/fa";
import NoteListComp from "../../components/MyDocuments/Notes/NoteListComp";
import Header from '../../components/Header'
import RichText from "../../components/richtext";
import Script from "next/script";
import MobileRichText from "../../components/mobileRichText";
import Select from "react-select";
import DocumentsBar from "../../components/MyDocuments/DocumentsBar";


const Notes = () => {

    const [editorLoaded, setEditorLoaded] = useState(false);
    const [openMobileAdd, setopenMobileAdd] = useState(false);
    const [data, setData] = useState(0);
    const [value, setValue] = useState({
      note:'',
      subject:'',
      case:''
    });
  
    const changeOpen = () => {
      setopenMobileAdd(prev=>!prev);
    }

    useEffect(() => {
      setEditorLoaded(true);
    }, []);
    
  return (
    <div>
      <Header/>
      {/* <Script src="/path/to/tinymce.min.js" /> */}
      {/* <div className="documents-bar">
        <div style={{ width: "20%" }} className="rigth-col">
          <h4>Notes</h4>
        </div>
        <div className="left-col">
          <div className="serach-div">
            <span>
              <BsSearch />
            </span>
            <input type="text" placeholder="Search anything" />
            <button className="srch-btn">Search</button>
          </div>
          <div className="notes-header-bottom">
            <div className="notes-dropdown-div">
              <select
                style={{ margin: "0" }}
                className="notes-dropdown"
                name=""
                id=""
              >
                <option value="">Classification</option>
              </select>
            </div>
            <div className="notes-search-client">
              <BsSearch />
                <input type="text" defaultValue={"Client"} />
            </div>
            <div style={{ flex: "1" }} className="date-div">
              <span>
                <BsCalendarEvent />
              </span>
              <input type="date" />
              <p>to</p>
              <input type="date" />
              <button style={{ color: "#848484", cursor: "pointer" }}>
                Clear all
              </button>
            </div>
          </div>
        </div>
          </div>
           */}
           <DocumentsBar name={'NOTES'}/>
          <div className="mobile-search">
            <input type="text" placeholder="search"/>
          </div>
          <div className="notes-body" >
              <div className="notes-list" >
                  
              <div className="wrapper-mobile-click" >
                  <button style={{marginBottom: "24px"}} className="blue-fill-btn" onClick={()=>{
                    setData(0);
                    setValue({
                      note:'',
                      subject:'',
                      case:'',
                    });
                    changeOpen();
                  }}> <AiOutlinePlus /> NEW NOTES</button>
                  </div>
                    <div className="wrapper-mobile-click-anti" >
                  <button style={{marginBottom: "24px"}} className="blue-fill-btn" onClick={()=>{
                    setData(0);
                    setValue({
                      note:'',
                      subject:'',
                      case:'',
                    });
                  }}> <AiOutlinePlus /> NEW NOTES</button>
                  </div>
                  <div className="notes-list-scrollable" >
                      {[ 1, 2, 3, 4, 5, 6, 7,8,9,10].map((item, i) => (
                        <>
                        <div className="wrapper-mobile-click" onClick={
                          ()=>
                          changeOpen()
                        }>
                          
                          <NoteListComp selected={item===data} setEdit={()=>{
                            setData(item);
                            setValue(
                              prev=>({
                                subject:'subject1',
                                case:'Jane Jhoson Theft',
                                note:
                                'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'
                              })
                            );
                          }}/>
                          </div>
                          <div className="wrapper-mobile-click-anti" >
                          <NoteListComp selected={item===data} setEdit={()=>{
                            setData(item);
                            setValue(
                              prev=>({
                                subject:'subject1',
                                case:'Jane Jhoson Theft',
                                note:
                                'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'
                              }));
                          }}/>
                          </div>
                          </>
                      ))}
                  </div>
              </div>
              <div className="notes-content" >
              
              <Select placeholder="Case :"
                              isClearable={true}
                              isSearchable={false}
                              value={''}
                              onChange={ (e)=>{}}
                              options={[]}
                            
                            />
          <RichText isBorder={true} editorLoaded={editorLoaded} value={value.note} handleEditorChange={(e)=>setValue(prev=>({...prev,note:e.target.value}))}/>
              </div>
          </div>
          <MobileRichText loader={editorLoaded} isOpen={openMobileAdd} changeOpen={changeOpen} value={value.note} subject={value.subject} caseOfClient={value.case} handleEditorChange={(e)=>setValue(prev=>({...prev,note:e.target.value}))}/>
    </div>
  );
};

export default Notes;
