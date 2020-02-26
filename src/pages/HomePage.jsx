import React, { Component } from 'react';
import { MobileFooter, TopNavbar, TopNavbarBlue } from "../components";
import landingBackground from "../assets/images/landing-background.jpeg";
import rightArrow from "../assets/images/right-arrow.svg";
import HamburgerModal from "../components/HamburgerModal";

class HomePage extends Component {

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
            <div className='home-page'>
                {/*conditionally rendered modal*/}
                {modalOpened ? (<HamburgerModal closeModal={this.closeModal} />) : (null)}

                {/*main contents of page*/}
                <TopNavbarBlue openModal={this.openModal} absolute transparent/>
                
                <div className='home-landing'>
                    <div className='landing-content'>
                        <h1>Get Excited About Your Future</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                        <button className='orange-button'>Join the Movement</button>
                    </div>
                    <img className='landing-img' src={landingBackground} alt='landingBackground' />
                </div>

                <div className='home-about'>
                    <h1>About SkillPointe</h1>
                    <img className='' src={landingBackground} alt='landingBackground' />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
                        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                        sunt in culpa qui officia deserunt mollit anim id est laborum."
                    </p>
                </div>

                <div className="home-arrow-header">
                    Explore Careers
                    <img src={rightArrow} alt="right-arrow"></img>
                </div>

                <div className="home-arrow-header">
                    Find Jobs
                    <img src={rightArrow} alt="right-arrow"></img>
                </div>

                <div className="home-arrow-header">
                    Find Training
                    <img src={rightArrow} alt="right-arrow"></img>
                </div>
                
                <MobileFooter history={this.props.history}/>
            </div>
        )
    }
}

export default HomePage;
