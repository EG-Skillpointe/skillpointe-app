import React, {Component} from 'react';
import whiteLogo from '../assets/images/skillpointlogo_white.png';
import hamburger from '../assets/images/hamburger_menu.png'
import {Link} from "react-router-dom";
import blueLogo from "../assets/images/skillpointelogo_blue.png";

// function getSignInState() {
//     const user = JSON.parse(localStorage.getItem('user'));
//     return user !== null;
// }
//
// export const TopNavbarBlue = (props) => {
//     console.log(`props in TopNavbarBlue: ${JSON.stringify(props)}`);
//     const signedIn = getSignInState();
//     console.log(`signedIn state: ${signedIn}`);
//
//     return (
//         <div className={`top-navbar blue ${props.absolute ? 'nav-absolute' : ''} ${props.transparent ? 'nav-transparent' : ''}`}>
//             <img className="logo" src={whiteLogo} />
//             {/*conditionally rendered modal*/}
//             {signedIn ? (null) : (<Link className="sign-in" to="/login">Sign In</Link>)}
//             <img className="hamburger" src={hamburger} onClick={props.openModal}/>
//         </div>
//     )
// };
//
// export default TopNavbarBlue;


class TopNavbarBlue extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    redirect = (path, state) => {
        this.props.history.push({
            pathname: path,
            state: state
        });
    };

    getSignInState() {
        const user = JSON.parse(localStorage.getItem('user'));
        return user !== null;
    }

    render() {
        const signedIn = this.getSignInState();
        const pageType = this.props.pageType;
        console.log(`pageType in modalNavbar: ${pageType}`);

        return (
            <div className={`top-navbar blue ${this.props.absolute ? 'nav-absolute' : ''} ${this.props.transparent ? 'nav-transparent' : ''}`}>
                <img className="logo" src={blueLogo} onClick={() => {
                    if (pageType === "home") {
                        this.redirect('/');
                    }
                    else if (pageType === "career-landing") {
                        this.redirect('/career-landing');
                    }
                    else if (pageType === "careers") {
                        this.redirect('/careers');
                    }
                    else if (pageType === "training") {
                        this.redirect('/training');
                    }
                    else if (pageType === "job") {
                        this.redirect('/jobsearch');
                    }
                    else {
                        this.redirect('/');
                    }

                    // this.props.closeModal();
                }}/>

                {signedIn ? (null) : (<Link className="sign-in" to="/login">Sign In</Link>)}
                <img className="hamburger" src={hamburger} onClick={this.props.openModal}/>
            </div>
        )
    }
}

export default TopNavbarBlue;
