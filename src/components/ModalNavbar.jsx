import React, { Component } from 'react';
import blueLogo from '../assets/images/skillpointelogo_blue.png';
import closeIcon from '../assets/images/close.png';

class ModalNavbar extends Component {

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
            <div className="modal-navbar">
                {/*<Link to="/" onClick={props.closeModal}>*/}
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
                    this.props.closeModal();
                }}/>
                {/*</Link>*/}
                <img style={{opacity:"1"}} className="close" src={closeIcon} onClick={this.props.closeModal}/>
            </div>
        )
    }
}

export default ModalNavbar;
