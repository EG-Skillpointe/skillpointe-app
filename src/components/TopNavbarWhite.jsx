import React, {Component} from 'react';
import blueLogo from '../assets/images/skillpointelogo_blue.png';
import hamburger from '../assets/images/dark_hamburger_menu.png'
import closeIcon from "../assets/images/close.png";
import {Link} from "react-router-dom";


class TopNavbarWhite extends Component {

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
        console.log('getting signed in state');
        const user = JSON.parse(localStorage.getItem('user'));
        return user !== null;
    }

    render() {
        const signedIn = this.getSignInState();
        console.log(`signedIn: ${signedIn}`);
        const pageType = this.props.pageType;
        console.log(`pageType in modalNavbar: ${pageType}`);

        return (
            <div className="top-navbar white">
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

                {signedIn ? (null) : (<Link className="sign-in" to="/login" style={{color:"#2D426B"}}>Sign In/Up</Link>)}
                <img className="hamburger" src={hamburger} onClick={this.props.openModal}/>
            </div>
        )
    }
}

export default TopNavbarWhite;
