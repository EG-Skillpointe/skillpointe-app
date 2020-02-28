import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {CardCarousel, MobileFooter, TopNavbar, TopNavbarBlue, Video, Footer, TopNavbarWhite} from "../components";
import landingBackground from "../assets/images/landing-background.jpeg";
import rightArrow from "../assets/images/right-arrow.svg";
import HamburgerModal from "../components/HamburgerModal";
import homepageVideo from "../assets/videos/Tammy_Ronstadt_Ambassador_ALT.mp4";


class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        };
    }

    openModal = () => {
        console.log('opening modal');
        this.setState({showModal: true},() => {
            console.log(`showModal status: ${this.state.showModal}`)
        });
    };

    closeModal = () => {
        console.log('closing modal');
        this.setState({showModal: false}, () => {
            console.log(`showModal status: ${this.state.showModal}`)
        });
    };

    render() {
        const modalOpened = this.state.showModal;

        return (
            <div className='sign-up-page'>
                {/*conditionally rendered modal*/}
                {modalOpened ? (<HamburgerModal pageType="home" history={this.props.history} closeModal={this.closeModal} />) : (null)}

                {/*main contents of page*/}
                <TopNavbarWhite history={this.props.history} openModal={this.openModal} closeModal={this.closeModal} absolute transparent/>
            </div>
        )
    }
}

export default SignUp;
