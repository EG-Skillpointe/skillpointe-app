import React from 'react';
import whiteLogo from '../assets/images/skillpointlogo_white.png';
import hamburger from '../assets/images/hamburger_menu.png'

export const TopNavbar = (props) => {
    return (
        <div className="top-navbar">
            <img className="logo" src={whiteLogo} />
            {/*<div className="sign-in">Sign In</div>*/}
            <img className="hamburger" src={hamburger} />
        </div>
    )
};

export default TopNavbar;

