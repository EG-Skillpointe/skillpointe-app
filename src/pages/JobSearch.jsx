import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { JobsCard, TopNavbarBlue} from "../components";
import { MobileFooter } from "../components";
import HamburgerModal from "../components/HamburgerModal";
import job from '../assets/mockData/jobs';

class JobSearch extends Component {

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
        let cards = [];
        {job.jobs.map(job => { cards.push(<JobsCard job={job}/>)}) }
        const modalOpened = this.state.showModal;

        return (
            <div>
                {/*conditionally rendered modal*/}
                {modalOpened ? (<HamburgerModal closeModal={this.closeModal} />) : (null)}

                {/*main contents of page*/}
                <TopNavbarBlue openModal={this.openModal}/>
                {cards}
                <Link to="/">Home</Link>
                <MobileFooter history={this.props.history}/>
            </div>
        )
    }
}

export default JobSearch;
