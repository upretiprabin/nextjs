import React from "react";
import { Oval } from  'react-loader-spinner'
const Loader = props => {
return (
    <>
        <div className="loading-spin" style={{margin: "auto", width:"14%", padding: "20px"}}>
            <Oval
                height={120}
                width={120}
                color="#53c0b1"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel='oval-loading'
                secondaryColor="#53c0b1"
                strokeWidth={2}
                strokeWidthSecondary={2}

            />
     </div>
    </>
);
}
export default Loader;