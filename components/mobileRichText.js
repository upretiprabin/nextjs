import React from 'react'
import { BiArrowFromBottom } from 'react-icons/bi'
import { IoIosArrowDown } from 'react-icons/io'
import Select from 'react-select'
import RichText from './richtext'

const MobileRichText = ({value,handleEditorChange,loader,isOpen,changeOpen,subject,caseOfClient}) => {
  return (
    <div className={`mobile-richtext ${isOpen?'active':''}`}>
        <div className='spacer'>

        </div>
      <div className='inner-mobile-richtext'>
        <div className='row space-between'>
            <button onClick={changeOpen} className='cancel-btn'>Cancel</button>
            <p>New note</p>
            <button>Save</button>
        </div>
        <Select placeholder="Case :"
                              isClearable={true}
                              isSearchable={false}
                              value={''}
                              onChange={ (e)=>{}}
                              options={[]}
                            
                            />
                            <div style={{height:'10px'}}></div>
        {/* <input value={subject} type={'text'} placeholder='Add Subject'/>
        <p>Case:</p>
        <div className='row border-input'>
        <input value={caseOfClient} type={'text'} placeholder='Which case is this for?'/>
        <div className='box-arrow'>
        <IoIosArrowDown />
        </div>
        </div> */}
        <RichText editorLoaded={loader} value={value} handleEditorChange={handleEditorChange} isBorder={false}/>
        </div>  
    </div>
  )
}

export default MobileRichText