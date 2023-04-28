import React, {useState} from 'react';
// import "./style.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons";

const CustomPassword = ({field}) => {
    const [showPassword, changeShowPassword] = useState(false);
    const showHideIcon = <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye}/>;
    return (
        <div className=' fieldContainer custom_class'>
            <input type={showPassword ? 'text' : 'password'}
                   className="inputClass custom_password"
                   {...field}/>
            <span className="icon-view" onClick={() => changeShowPassword(!showPassword)}>{showHideIcon}</span>
        </div>
    )
}

export default CustomPassword;