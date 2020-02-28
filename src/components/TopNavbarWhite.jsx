import React, {Component} from 'react';
import blueLogo from '../assets/images/skillpointelogo_blue.png';
import hamburger from '../assets/images/dark_hamburger_menu.png'
import closeIcon from "../assets/images/close.png";


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

    render() {
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
                <img className="hamburger" src={hamburger} onClick={this.props.openModal}/>
            </div>
        )
    }
}

export default TopNavbarWhite;
