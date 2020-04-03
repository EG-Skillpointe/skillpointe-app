import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Switch from "react-switch";
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
import arrowDown from '../assets/images/keyboard_arrow_down_24px_outlined.svg';
import welding from '../assets/images/welding.jpeg'
import image from '../assets/images/sponsor_tcsg.png'

const sponsor1 = {
    name: 'Atlanta, GA',
    location: 'Atlanta, GA'
}

class Training extends Component {

    constructor(props) {
        super(props);
        this.state = {
            switchChecked: false,
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

    handleSwitchChange = (checked) => {
        this.setState({ checked }, () => {
            console.log(`switch status: ${this.state.switchChecked}`)
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
            
                <div style={{width:"100%", height:"60px", backgroundColor:"#2D426B", display:"flex", alignItems:"center"}}>
                    <Link to="/training/search" style={{marginLeft:"20px"}}>
                        <button style={{height:"30px", backgroundColor:"#2D426B", outline:"0", border:"1px solid #EDEDED", borderRadius:"5px", color:"#EDEDED", display:"flex", justifyContent:"center", alignItems:"center"}}> 
                            <img src={arrowDown} style={{width:"18px", transform: "rotate(90deg)"}}/>
                            <p style={{color:"#EDEDED", padding:"0", margin:"0", fontSize:"12px", marginRight:"5px", lineHeight:"12px"}}>Back</p>
                        </button>
                    </Link>
                </div>

                <img src={welding} style={{width:"100%", height:"90px"}} />

                <div style={{borderTop:"4px solid #F8A141", width:"100%", height:"500px"}}>
                    <div style={{borderBottom:"1.5px solid #EDEDED", width:"100%", height:"50px", display:"flex", alignItems:"center", justifyContent:"center"}}>
                        <p style={{fontSize:"12px", lineHeight:"12px", margin:"0", position:"relative", left:"30px", marginRight:"120px"}}>Get alerts from this company</p>
                        <Switch onChange={this.handleSwitchChange} checked={this.state.checked} onColor="#2D426B" />
                    </div>

                    <div style={{border:"none", height:"120px", display:"flex", alignItems:"center"}}>
                        <div style={{width:"75px", height:"75px", marginLeft:"20px"}}>
                            <img src={image} alt="Cat"  style={{width:"100%", height:"100%", borderRadius:"5px"}}/>
                        </div>
                        
                        <div style={{marginLeft:"15px", textAlign:"left"}}>
                            <h5 className="job-title" style={{fontSize:"17px", marginTop:"0"}}>Employer</h5>
                            <h5 className="job-title" style={{fontSize:"17px"}}><b>FSCJ</b></h5>
                            <h6 className="job-text" style={{fontSize:"12px"}}>Atlanta, GA</h6>
                        </div>
                    </div>
                    
                </div>

                <MobileFooter history={this.props.history}/>
                <Footer mobileFooterPresent/>
            </div>
        )
    }
}

export default Training;
