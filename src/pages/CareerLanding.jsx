import React, { Component } from 'react';
import {CareerCard, MobileFooter, TopNavbar, TopNavbarBlue} from "../components";
import landingBackground from "../assets/images/landing-background1.png";
import construction from "../assets/images/construction.jpg";
import communication from "../assets/images/communications.jpg";
import energy from "../assets/images/energy.jpg";
import healthcare from "../assets/images/healthcare.jpg";
import hospitality from "../assets/images/hospitality.jpg";
import humanService from "../assets/images/human_services.jpg";
import informationTechnology from "../assets/images/information_technology.jpg"
import manufacturing from "../assets/images/manufacturing.jpg";
import publicSafety from "../assets/images/public_safety.jpg";
import transportation from "../assets/images/transportation.jpg";

import HamburgerModal from "../components/HamburgerModal";

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
                  <CareerCard name="Construction" image={construction}/>
                  <CareerCard name="Communication" image={communication}/>
                  <CareerCard name="Energy" image={energy}/>
                  <CareerCard name="Healthcare" image={healthcare}/>
                  <CareerCard name="Manufacturing" image={manufacturing}/>
                  <CareerCard name="Hospitality" image={hospitality}/>
                  <CareerCard name="Human Services" image={humanService}/>
                  <CareerCard name="Information Technology" image={informationTechnology}/>
                  <CareerCard name="Transportation" image={transportation}/>
                  <CareerCard name="Public Safety" image={publicSafety}/>
                </div>

              <MobileFooter history={this.props.history}/>
            </div>
        )
    }
}

export default CareerLanding;
