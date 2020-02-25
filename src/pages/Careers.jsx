import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {AmbassadorCard, CardCarousel, TopNavbarBlue} from '../components'
import HamburgerModal from "../components/HamburgerModal";


class Careers extends Component {

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
            <div>
                {/*conditionally rendered modal*/}
                {modalOpened ? (<HamburgerModal closeModal={this.closeModal} />) : (null)}

                <TopNavbarBlue openModal={this.openModal} />
                <h1>Careers PAGE!</h1>
                <CardCarousel/>
                <Link to="/">Home</Link>
            </div>
        )
    }
}

export default Careers;
