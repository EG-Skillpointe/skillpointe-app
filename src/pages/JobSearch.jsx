import React, { Component } from 'react';
import { JobsCard, TopNavbarWhite, Footer, SearchBar, Filter, MobileFooter, HamburgerModal, FeaturedJobs } from "../components";
import job from '../assets/mockData/jobs';
import Modal from 'react-modal';
import comp1 from '../assets/images/delta.png';
import comp2 from '../assets/images/company2.png';
import Button from "react-bootstrap/Button";



class JobSearch extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            filteredJobs: job.jobs,
            searchResult: [],
            location: '',
            showPopUp: false
        };
    }

    componentDidMount() {
        window.scrollTo(0, 0);

        if(localStorage.getItem('location')) {
            this.setState({location: localStorage.getItem('location')})
        } else {
            this.togglePopup();
        }

        localStorage.setItem('location', 'Atlanta, GA');
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
        // let result = job.jobs.Filter(job => (job.title.toLowerCase().includes(searchText.toLowerCase()) || job.company.toLowerCase().includes(searchText.toLowerCase())));
        console.log('Result', searchText);
        // if(result){
        //     this.setState({searchResult: result,
        //                          filteredJobs: result});
        // }
    };

    onAllow = () => {
        localStorage.setItem('location', 'Atlanta, GA');
        this.setState({showPopUp: !this.state.showPopUp})
    };


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

        const cards = this.state.filteredJobs.map(job => <JobsCard job={job} />)

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
                
                <SearchBar search={this.doSearch} headerTitle={"Find Jobs"} location={this.state.location} placeholder={'Search for employment opportunities...'}/>

                <h4 className='featured-jobs-heading'>Featured Jobs</h4>

                <FeaturedJobs comp1={comp1} comp2={comp2} />

                <div style={{marginTop:"30px"}}>
                    { cards }
                </div>

                <MobileFooter history={this.props.history}/>
                <Footer mobileFooterPresent/>
            </div>
        )
    }
}

export default JobSearch;
