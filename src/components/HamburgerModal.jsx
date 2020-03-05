import React from 'react';
import { Link } from "react-router-dom";
import { ModalNavbar } from "../components";

const HamburgerModal = (props) => {
    console.log(`props.pageType in hamburgerModal: ${props.pageType}`);
    let home;
    let careerLandingOrange;
    let jobOrange;
    let trainingOrange;
    let peopleOrange;
    let additionalResourcesOrange;
    let contactOrange;

    switch(props.pageType) {
        case 'home':
            home = {
                color: "#F8A141"
            };
            break;

        case 'career-landing':
            careerLandingOrange = {
                color: "#F8A141"
            };
            break;

        case 'job':
            jobOrange = {
                color: "#F8A141"
            };
            break;

        case 'training':
            trainingOrange = {
                color: "#F8A141"
            };
            break;
    }

    return (
        <div className="hamburger-modal">
            <ModalNavbar pageType={props.pageType} history={props.history} closeModal={props.closeModal}/>

            <div className="modal-body">
                <Link style={home} to="/" onClick={props.closeModal}>Home</Link>
                <Link style={careerLandingOrange} to="career-landing" onClick={props.closeModal}>Explore Careers</Link>
                <Link style={jobOrange} to="/jobsearch" onClick={props.closeModal}>Find Job</Link>
                <Link style={trainingOrange} to="/training" onClick={props.closeModal}>Find Training</Link>
                <Link style={peopleOrange} to="/peoplesearch" onClick={props.closeModal}>Find People</Link>
                <Link style={additionalResourcesOrange} to="" onClick={props.closeModal}>Additional Resources</Link>
                <Link style={contactOrange} to="" onClick={props.closeModal}>Contact</Link>
                {/*<Link className="" to="/login">Login</Link>*/}
            </div>

            {/*<MobileFooter history={this.props.history}/>*/}
        </div>
    )
};

export default HamburgerModal;
