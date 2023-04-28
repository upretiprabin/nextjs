import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isPopup:false,
    title:'',
    message:'',
    isButton:false,
    type:'success',
    buttonText:''
}

const popupReducer = createSlice({
    name:'popup',
    initialState,
    reducers:{
        successPopup(state,action){
            const {title,message,isButton,buttonText} = action.payload;
            state.isPopup = true;
            state.isButton = isButton;
            state.title = title;
            state.message = message;
            state.buttonText = buttonText;
            state.type = 'success';
        },
        errorPopup(state,action){
            const {title,message,isButton,buttonText} = action.payload;
            state.isPopup = true;
            state.isButton = isButton;
            state.title = title;
            state.message = message;
            state.buttonText = buttonText;
            state.type = 'error';
        },
        clearPopup(state,action){
            // state = initialState;
            state.buttonText='';
            state.title='';
            state.message='';
            state.isButton=false;
            state.isPopup=false;
        },
    }
});

export default popupReducer.reducer;

export const {successPopup,errorPopup,clearPopup} = popupReducer.actions;