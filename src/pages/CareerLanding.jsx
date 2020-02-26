import React, { Component } from 'react';
import {CareerCard, MobileFooter, TopNavbar, TopNavbarBlue, TrainingCard} from "../components";
import landingBackground from "../assets/images/landing-background1.png";
import industries from '../assets/mockData/industries';

import HamburgerModal from "../components/HamburgerModal";
import school from "../assets/mockData/school";

class CareerLanding extends Component {

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
                <TopNavbarBlue openModal={this.openModal} />

                <div className='home-landing' >
                    <div className='landing-content' style={{width:'85%'}}>
                        <h1>Find Your Path</h1>
                        <p style={{margin:"15px"}}>Choosing a career is challenging. Let us help you narrow your search with Skillpointe's Career Compass, a strength-based assessment designed to help you find jobs that fit your skills and needs</p>
                        <button className='orange-button' style={{width:'65%'}}>Career Compass</button>
                    </div>
                    <img className='landing-img' src={landingBackground} alt='landingBackground'/>
                </div>

                <div>
                    <h1 className="career-title">Explore by Industry</h1>
                    <p className="career-card-text">
                      Beginning your search? Select one of the industries below to hear from an industry ambassador, explore training, and view jobs.
                    </p>
                </div>
              <div className="row" style={{margin:'0', paddingBottom:'20px'}}>
                  {industries.industries.map(industry => { return <CareerCard industry={industry}/>})}
                </div>

              <MobileFooter history={this.props.history}/>
            </div>
        )
    }
}

export default CareerLanding;