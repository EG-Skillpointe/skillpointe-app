import React, { Component } from 'react';
import { JobsCard, TopNavbarWhite, Footer, FilterTab, PeopleCard} from "../components";
import { MobileFooter } from "../components";
import HamburgerModal from "../components/HamburgerModal";
import job from '../assets/mockData/jobs';

class PeopleSearch extends Component {

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
        let cards = [];
        cards.push(<PeopleCard/>)
        cards.push(<PeopleCard/>)

        const modalOpened = this.state.showModal;

        return (
            <div>
                {/*conditionally rendered modal*/}
                {modalOpened ? (<HamburgerModal pageType="job" history={this.props.history} closeModal={this.closeModal} />) : (null)}

                {/*main contents of page*/}

                <TopNavbarWhite history={this.props.history} openModal={this.openModal} closeModal={this.closeModal} />
                    <div style={{marginTop:"15px"}}>
                        {cards}
                    </div>
                <MobileFooter history={this.props.history}/>
                <Footer mobileFooterPresent/>
            </div>
        )
    }
}

export default PeopleSearch;
