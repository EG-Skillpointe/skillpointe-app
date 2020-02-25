import React from 'react';
import { Link } from "react-router-dom";
import { MobileFooter, ModalNavbar } from "../components";

const HamburgerModal = (props) => {
    return (
        <div className="hamburger-modal">
            <ModalNavbar closeModal={props.closeModal}/>

            <div className="modal-body">
                <Link className="" to="/" onClick={props.closeModal}>Main</Link>
                <Link className="" to="" onClick={props.closeModal}>Explore Careers</Link>
                <Link className="" to="/jobsearch" onClick={props.closeModal}>Find Job</Link>
                <Link className="" to="/training" onClick={props.closeModal}>Find Training</Link>
                <Link className="" to="" onClick={props.closeModal}>Find People</Link>
                <Link className="" to="" onClick={props.closeModal}>Additional Resrouces</Link>
                <Link className="" to="" onClick={props.closeModal}>Contact</Link>
                {/*<Link className="" to="/login">Login</Link>*/}
            </div>

            {/*<MobileFooter history={this.props.history}/>*/}
        </div>
    )
};

export default HamburgerModal;
