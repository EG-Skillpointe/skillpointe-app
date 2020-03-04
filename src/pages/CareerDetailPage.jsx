import React, { Component } from 'react';
import {
    MobileFooter,
    TopNavbarBlue,
    Footer,
    Video,
    WeldingAmbassadorCard
} from "../components";

import HamburgerModal from "../components/HamburgerModal";
import landingBackground from "../assets/images/landing-background.jpeg";
import homepageVideo from "../assets/videos/Tammy_Ronstadt_Ambassador_ALT.mp4";

class CareerDetailPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        };
    }

    componentDidMount() {
        window.scrollTo(0, 0);
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
            <div className='welding-page'>
                {/*conditionally rendered modal*/}
                {modalOpened ? (<HamburgerModal pageType="home" history={this.props.history} closeModal={this.closeModal} />) : (null)}

                {/*main contents of page*/}
                <TopNavbarBlue history={this.props.history} openModal={this.openModal} closeModal={this.closeModal} absolute transparent/>

                <>
                    <div className='welding-landing-content'>
                        <h1 style={{color:"white"}}>Welding</h1>
                        <p style={{marginTop:"10px", color:"white"}}>
                            Welders join things together with metals. Detail-oriented and skilled in manual dexterity, welders perform an number
                            of roles within various industries.
                        </p>
                    </div>

                    <WeldingAmbassadorCard/>

                    <img className='landing-img' src={landingBackground} alt='landingBackground' />
                </>

                <MobileFooter history={this.props.history}/>
                <Footer mobileFooterPresent/>
            </div>
        )
    }
}

export default CareerDetailPage;
