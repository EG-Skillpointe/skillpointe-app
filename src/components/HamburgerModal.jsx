import React from 'react';
import { Link } from "react-router-dom";
import { ModalNavbar } from "../components";
import { authService } from '../services/auth.service';

const HamburgerModal = (props) => {
    console.log(`props.pageType in hamburgerModal: ${props.pageType}`);
    let home;
    let careerLandingOrange;
    let jobOrange;
    let trainingOrange;
    let peopleOrange;
    let additionalResourcesOrange;
    let contactOrange;
    let logout;

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

        case 'logout':
            logout = {
                color: "#F8A141"
            };
            break;
    }

    return (
        <div className="hamburger-modal">
            <ModalNavbar pageType={props.pageType} history={props.history} closeModal={props.closeModal}/>

            <div className="modal-body">
                <Link style={home} to="/" onClick={props.closeModal}>Home</Link>
                <Link style={careerLandingOrange} to="/career-landing" onClick={props.closeModal}>Explore Careers</Link>
                <Link style={jobOrange} to="/jobsearch" onClick={props.closeModal}>Find Job</Link>
                <Link style={trainingOrange} to="/training" onClick={props.closeModal}>Find Training</Link>
                <Link style={peopleOrange} to="" onClick={props.closeModal}>Find People</Link>
                <Link style={logout} to="/" onClick={() => {authService.logout(); props.closeModal();}}>Log Out</Link>
            </div>

            {/*<MobileFooter history={this.props.history}/>*/}
        </div>
    )
};

export default HamburgerModal;
