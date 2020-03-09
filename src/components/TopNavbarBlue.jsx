import React from 'react';
import whiteLogo from '../assets/images/skillpointlogo_white.png';
import hamburger from '../assets/images/hamburger_menu.png'
import {Link} from "react-router-dom";

function getSignInState() {
    const user = JSON.parse(localStorage.getItem('user'));
    return user !== null;
}

export const TopNavbarBlue = (props) => {
    console.log(`props in TopNavbarBlue: ${JSON.stringify(props)}`);
    const signedIn = getSignInState();
    console.log(`signedIn state: ${signedIn}`);

    return (
        <div className={`top-navbar blue ${props.absolute ? 'nav-absolute' : ''} ${props.transparent ? 'nav-transparent' : ''}`}>
            <img className="logo" src={whiteLogo} />
            {/*conditionally rendered modal*/}
            {signedIn ? (null) : (<Link className="sign-in" to="/login">Sign In</Link>)}
            <img className="hamburger" src={hamburger} onClick={props.openModal}/>
        </div>
    )
};

export default TopNavbarBlue;
