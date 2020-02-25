import React from 'react';
import { Link } from "react-router-dom";
import blueLogo from '../assets/images/skillpointelogo_blue.png';
import hamburger from '../assets/images/hamburger_menu.png'

export const TopNavbarWhite = (props) => {
    console.log('\n');
    console.log(`props in TopNavbarWhite: ${JSON.stringify(props)}`);

    return (
        <div className="top-navbar white">
            <img className="logo" src={blueLogo}/>
            <img className="hamburger" src={hamburger} onClick={props.openModal}/>
        </div>
    )
};

export default TopNavbarWhite;
