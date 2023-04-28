import React from 'react'
// import styles from"./style.css";
import {IoCloudUploadOutline} from 'react-icons/io5'

const UploadVideo = () => {
  return (
    <div>

    <div className='uploadVideoPageContainer'>
        <div className='uploadWrapper'>
            <div className='uploadVideoLabel'><IoCloudUploadOutline size='4rem' color='gray'/> Here goes the text whatever you want </div>
            <label htmlFor='fileforvideo' className='labelButton'>Upload Video
            </label>
            <input type="file" name='fileforvideo' id='fileforvideo' className='inputFileClass' />
        </div>
    </div>

    <div className='tableContainer'>
        <h5>Retrieved Information:</h5>
        <div className='listItem'>
            <div className='numberContainer'>
                <p>#243</p>
                <p>Found a man knocking the door</p>
            </div>
            <p>20:50</p>
        </div>
    </div>

</div>

  )
}

export default UploadVideo