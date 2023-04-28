import { clearPopup, errorPopup, successPopup } from "./reducer"

export const createPopup = (dispatch,{title='',message='',isButton=false,buttonText='',type='success'}) => {
    if(type==='error'){
        dispatch(successPopup({title,message,isButton,buttonText:isButton?buttonText:''}));
        if(!isButton){
            // alert('here');
            setTimeout(()=>{
                // alert('hi');
                dispatch(clearPopup());
            },2000)
        }
    }else{
        dispatch(errorPopup({title,message,isButton,buttonText:isButton?buttonText:''}));
        if(!isButton){
            // alert('here');
            setTimeout(()=>{
                // alert('hi');
                dispatch(clearPopup());
            },2000)
        }
    }
}