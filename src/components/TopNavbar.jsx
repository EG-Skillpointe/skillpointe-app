import React from 'react';
import whiteLogo from '../assets/images/skillpointlogo_white.png';

export const TopNavbar = (props) => {
    return (
        <div className="top-navbar">
            <img className="logo" src={whiteLogo} />
            {/*<div className="sign-in">Sign In</div>*/}
        </div>
    )
};

export default TopNavbar;

