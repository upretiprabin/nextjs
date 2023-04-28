import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { clearPopup } from './reducer';

const Popup = () => {
    const selector = useSelector(state=>state.popup);
    const dispatch = useDispatch();
    console.log(selector.isPopup);
  return (
        selector.isPopup && <div
        className='popup-style'
        >
            <h4>{selector.title}</h4>
            <p>{selector.message}</p>
            {
                selector.isButton&& <button
                onClick={()=>dispatch(clearPopup())}
                >{selector.buttonText}</button>
            }
        </div>
  )
}

export default Popup