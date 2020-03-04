import React, { Component } from 'react';
import {JobsCard, TopNavbarWhite, Footer, FilterTab, SearchBar, Popup} from "../components";
import { MobileFooter } from "../components";
import HamburgerModal from "../components/HamburgerModal";
import job from '../assets/mockData/jobs';
import Modal from 'react-modal';


class JobSearch extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            filteredJobs: job.jobs,
            searchResult: [],
            location: '',
            showPopUp: true
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

    doFilter = (cond) => {
        let filtered = [];
        if(cond === 'popular'){
            filtered = job.jobs;
        } else {
            filtered = this.state.searchResult.filter(obj => obj.industry === cond);
        }
        this.setState({filteredJobs: filtered})
    };

    togglePopup = () => {
        this.setState({
            showPopUp: !this.state.showPopUp
        });
    };

    doSearch = (searchText) => {

        let result = job.jobs.filter(job => (job.title.toLowerCase().includes(searchText.toLowerCase()) || job.company.toLowerCase().includes(searchText.toLowerCase())));
        console.log('Result',result);
        if(result){
            this.setState({searchResult: result,
                                 filteredJobs: result});
        }
    };

    onAllow = () => {
        localStorage.setItem('location', 'Atlanta, GA');
        this.setState({showPopUp: !this.state.showPopUp})
    };

    componentDidMount() {

        if(localStorage.getItem('location')){

            this.setState({location: localStorage.getItem('location')})
        }else {
            this.togglePopup();
        }
    }

    render() {
        const defaultStyles = {
            content : {
                top                   : '50%',
                left                  : '50%',
                right                 : 'auto',
                bottom                : 'auto',
                marginRight           : '-40%',
                transform             : 'translate(-50%, -50%)',
            }
        };
        let cards = [];
        {this.state.filteredJobs.map(job => { cards.push(<div style={{margin: "10px", height:"210px"}}><JobsCard job={job}/></div>)}) }
        const modalOpened = this.state.showModal;

        return (
            <div>
                {/*conditionally rendered modal*/}
                {modalOpened ? (<HamburgerModal pageType="job" history={this.props.history} closeModal={this.closeModal} />) : (null)}
                {/*main contents of page*/}
                <Modal isOpen={this.state.showPopUp} onRequestClose={this.togglePopup}
                       contentLabel="Delete Check"
                       style={defaultStyles}
                >
                    <h2 style={{padding:'10px'}}>SkillPointe would like to use your current location?</h2>
                    <button className="popup-button"  onClick={this.togglePopup}>Don't Allow</button>
                    <button className="popup-button"  onClick={this.onAllow}>Allow</button>
                </Modal>
                <TopNavbarWhite history={this.props.history} openModal={this.openModal} closeModal={this.closeModal} />
                <SearchBar filter={this.doFilter} location={this.state.location} search={this.doSearch}/>
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
