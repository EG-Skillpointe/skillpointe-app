import React from "react";

export const Popup = (props) => {
    return (
        <div className='popup'>
            <div className='popup\_inner'>
                <h1></h1>
                <button onClick={props.closePopup}>close me</button>
            </div>
        </div>
    )
};

export default Popup;
