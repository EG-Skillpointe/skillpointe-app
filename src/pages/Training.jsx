import React, { Component } from 'react';
import {TopNavbarWhite, TrainingCard, Footer, FilterTab, Search} from "../components";
import { MobileFooter } from "../components";
import HamburgerModal from "../components/HamburgerModal";
import school from "../assets/mockData/school";


class Training extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            searchResults: school.schools
        };
    }
    doSearch = (searchText) => {
        let result = school.schools.filter(school => (school.name.toLowerCase().includes(searchText.toLowerCase())));
        console.log('Result',result);
        if(result){
            this.setState({searchResults: result});
        }
    };

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
        {this.state.searchResults.map(school => { cards.push(<div style={{margin: "10px", height:"210px"}}><TrainingCard school={school}/></div>)}) }
        const modalOpened = this.state.showModal;

        return (
            <div>
                {/*conditionally rendered modal*/}
                {modalOpened ? (<HamburgerModal pageType="training" history={this.props.history} closeModal={this.closeModal} />) : (null)}

                {/*main contents of page*/}
                <TopNavbarWhite history={this.props.history} openModal={this.openModal} closeModal={this.closeModal} />
                {/* TODO: Pass in actual data to prevent error in training page */}
                <Search search={this.doSearch} location={"Atlanta, GA"}/>
                <div style={{marginTop:"12px"}}>
                  {cards}
                </div>
              <MobileFooter history={this.props.history}/>
              <Footer mobileFooterPresent/>
            </div>
        )
    }
}

export default Training;
