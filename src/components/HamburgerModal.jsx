import React from 'react';
import { Link } from "react-router-dom";
import { MobileFooter, ModalNavbar } from "../components";

const HamburgerModal = (props) => {
    return (
        <div className="hamburger-modal">
            <ModalNavbar closeModal={props.closeModal}/>

            <div className="modal-body">
                <Link className="" to="/">Main</Link>
                <Link className="" to="">Explore Careers</Link>
                <Link className="" to="/jobsearch">Find Job</Link>
                <Link className="" to="/training">Find Training</Link>
                <Link className="" to="">Find People</Link>
                <Link className="" to="">Additional Resrouces</Link>
                <Link className="" to="">Contact</Link>
                {/*<Link className="" to="/login">Login</Link>*/}
            </div>

            {/*<MobileFooter history={this.props.history}/>*/}
        </div>
    )
};

export default HamburgerModal;
