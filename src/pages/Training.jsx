import React, { Component } from 'react';
import {
    TopNavbarWhite,
    TrainingCard,
    Footer,
    FilterTab,
    SearchBar,
    WeldingSchools,
    SchoolCard,
    Filter,
    FeaturedJobs,
    FeaturedTraining
} from "../components";
import { MobileFooter } from "../components";
import HamburgerModal from "../components/HamburgerModal";
import school from "../assets/mockData/school";
import comp1 from '../assets/images/fscj_transparent.png';
import comp2 from '../assets/images/tulsa-welding.png';


const sponsor1 = {
    name: 'Atlanta, GA',
    location: 'Atlanta, GA'
}

class Training extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            searchResults: school.schools
        };
    }

    doSearch = (searchText) => {
        let result = school.schools.filter( school => {
            return (school.name.toLowerCase().includes(searchText.toLowerCase()) || school.description.toLowerCase().includes(searchText.toLowerCase()) )
        });
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
        let cards = this.state.searchResults.map(school => <SchoolCard school={school}/> );
        const modalOpened = this.state.showModal;

        return (
            <div>
                {/*conditionally rendered modal*/}
                {modalOpened ? (<HamburgerModal pageType="training" history={this.props.history} closeModal={this.closeModal} />) : (null)}

                {/*main contents of page*/}
                <TopNavbarWhite history={this.props.history} openModal={this.openModal} closeModal={this.closeModal} />

                {/* TODO: Pass in actual data to prevent error in training page */}
                <SearchBar search={this.doSearch} headerTitle={"Find Training"} location={"Atlanta, GA"} placeholder={'Search for training opportunities...'}/>

                
                <h4 className='featured-jobs-heading'>Featured Training</h4>
                <FeaturedTraining comp1={comp1} comp2={comp2} />
                
                <div style={{marginTop:"30px", marginBottom: "30px"}}>
                    { cards }
                </div>

                <MobileFooter history={this.props.history}/>
                <Footer mobileFooterPresent/>
            </div>
        )
    }
}

export default Training;
