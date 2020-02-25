import React from 'react';
import blueLogo from '../assets/images/skillpointelogo_blue.png';
import closeIcon from '../assets/images/close.png';

export const ModalNavbar = (props) => {
    console.log(`props in Modal's navbar: ${JSON.stringify(props)}`);

    return (
        <div className="modal-navbar">
            <img className="logo" src={blueLogo}/>
            <img className="close" src={closeIcon} onClick={props.closeModal}/>
        </div>
    )
};

export default ModalNavbar;
