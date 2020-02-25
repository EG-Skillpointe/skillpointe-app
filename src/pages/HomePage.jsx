import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { MobileFooter, TopNavbarBlue } from "../components";
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
            <div>
                {/*conditionally rendered modal*/}
                {modalOpened ? (<HamburgerModal closeModal={this.closeModal} />) : (null)}

                {/*main contents of page*/}
                <TopNavbarBlue openModal={this.openModal} />
                <h1>HOME PAGE!</h1>
                <Link to="/training">Training  </Link>
                <Link to="/jobsearch">Job Search  </Link>
                <Link to="/login">Login</Link>
                <MobileFooter history={this.props.history}/>
            </div>
        )
    }
}

export default HomePage;
