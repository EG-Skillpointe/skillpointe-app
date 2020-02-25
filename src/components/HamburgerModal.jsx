import React from 'react';
import { Link } from "react-router-dom";
import { MobileFooter, ModalNavbar } from "../components";

const HamburgerModal = (props) => {
    return (
        <div className="hamburger-modal">
            <ModalNavbar closeModal={props.closeModal}/>

            <div className="modal-body">
                {/*<Link to="/training">Training</Link>*/}
                {/*<Link to="/jobsearch">Job Search</Link>*/}
                {/*<Link to="/login">Login</Link>*/}
            </div>

            {/*<MobileFooter history={this.props.history}/>*/}
        </div>
    )
};

export default HamburgerModal;
