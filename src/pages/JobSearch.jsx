import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { JobsCard, TopNavbarWhite, Footer} from "../components";
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
        {job.jobs.map(job => { cards.push(<div style={{margin: "10px", height:"210px"}}><JobsCard job={job}/></div>)}) }
        const modalOpened = this.state.showModal;

        return (
            <div>
                {/*conditionally rendered modal*/}
                {modalOpened ? (<HamburgerModal pageType="job" history={this.props.history} closeModal={this.closeModal} />) : (null)}

                {/*main contents of page*/}
                <TopNavbarWhite openModal={this.openModal}/>
                    <div style={{marginTop:"30px"}}>
                        {cards}
                    </div>
                <MobileFooter history={this.props.history}/>
                <Footer mobileFooterPresent/>
            </div>
        )
    }
}

export default JobSearch;
