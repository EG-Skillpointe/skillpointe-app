import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {CardCarousel, MobileFooter, TopNavbar, TopNavbarBlue, Video, Footer} from "../components";
import landingBackground from "../assets/images/landing-background.jpeg";
import rightArrow from "../assets/images/right-arrow.svg";
import HamburgerModal from "../components/HamburgerModal";
import homepageVideo from "../assets/videos/Tammy_Ronstadt_Ambassador_ALT.mp4";


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
                        <p>SkillPointe is a movement celebrating skills-based professionals and their contributions.</p>
                        <Link to='./login'><button className='orange-button'>Join the Movement</button></Link>
                    </div>
                    <img className='landing-img' src={landingBackground} alt='landingBackground' />
                </div>

                <div className='home-about'>
                    <h1 style={{fontSize:"28px", fontWeight:"700", margin:"30px 0"}}>About SkillPointe</h1>
                    <Video video={homepageVideo} type='video/mp4'/>
                    <p align="left">
                        SkillPointe is championing a movement for skills-based workers.<br></br> <br></br>Skills-based professionals build things for us, care for us, and make our lives better. Despite their importance, these workers have been undervalued, and the shortage of skills-based labor continues to grow. Given the critical roles these professionals play in construction, healthcare, energy, manufacturing, and other fields, we created an online destination built explicitly for them.<br></br> <br></br>More than a simple job board, Skillpointe is a platform working to change the perception surrounding skills-based work. Within SkillPointe, job seekers can explore training opportunities, professionals can connect with potential employers, trainers can promote their programs, and students can explore career paths.<br></br> <br></br>We welcome you to join the SkillPointe movement.
                    </p>
                </div>

                <div>
                    <div className="home-arrow-header">
                        Explore Careers
                        <img src={rightArrow} alt="right-arrow"></img>
                    </div>
                    <CardCarousel cardType="ambassador"/>
                </div>

                <div>
                    <div className="home-arrow-header">
                        Find Jobs
                        <img src={rightArrow} alt="right-arrow"></img>
                    </div>
                    <CardCarousel cardType="job"/>
                </div>

                <div>
                    <div className="home-arrow-header">
                        Find Training
                        <img src={rightArrow} alt="right-arrow"></img>
                    </div>
                    <CardCarousel cardType="training"/>
                </div>
                
                <MobileFooter history={this.props.history}/>
                <Footer mobileFooterPresent/>
            </div>
        )
    }
}

export default HomePage;
