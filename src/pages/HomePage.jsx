import React, { Component } from 'react';
import { MobileFooter, TopNavbar } from "../components";
import landingBackground from "../assets/images/landing-background.jpeg";
import rightArrow from "../assets/images/right-arrow.svg";


class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className='home-page'>
                <TopNavbar/>

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
