import React, {Component} from 'react';
import hamburger from '../assets/images/hamburger_menu.png'
import {Link} from "react-router-dom";
import blueLogo from "../assets/images/skillpointelogo_blue.png";


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

                    this.props.closeModal();
                }}/>

                {signedIn ? (null) : (<Link className="sign-in" to="/login">Sign In/Up</Link>)}
                <img className="hamburger" src={hamburger} onClick={this.props.openModal}/>
            </div>
        )
    }
}

export default TopNavbarBlue;
