import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {TopNavbarWhite, TrainingCard} from "../components";
import { MobileFooter } from "../components";
import HamburgerModal from "../components/HamburgerModal";



class Training extends Component {

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

                {/*main contents of page*/}
                <TopNavbarWhite openModal={this.openModal} />
                <h1>Training PAGE!</h1>
                // TODO: Pass in actual data to prevent error in training page
                <TrainingCard school={{name:'boopity boppity', location: 'boopity boppity way'}}/>
                <Link to="/">Home</Link>
                <MobileFooter history={this.props.history}/>
            </div>
        )
    }
}

export default Training;
