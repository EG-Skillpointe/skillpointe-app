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
    FeaturedTraining,
    AddressBox
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
            searchResults: school.schools,
            currentTab: ""
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

    handleTabSwitch = (event) => {
        this.setState({ currentTab: event.target.innerText }, () => {
            console.log(`currentTab: ${this.state.currentTab}`);
        });
    };

    render() {
        let cards = this.state.searchResults.map(school => <SchoolCard school={school}/> );
        const modalOpened = this.state.showModal;

        let tab;

        switch(this.state.currentTab) {
            case "About Us":
                tab = 
                    <>
                        <AddressBox />
                        <p style={{padding:"20px", textAlign:"left"}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                            sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </>
            break;

            case "Training":
                tab = 
                    <p style={{padding:"20px", textAlign:"left"}}>
                        Duo mazim nemore et, ad suas scripserit sed. Pro ne ludus fuisset ocurreret, iriure salutandi eloquentiam qui id. Ea has decore periculis maluisset, ubique viderer te pro.
                            Pro veniam possim impetus ut, nonumes ocurreret an duo. At ipsum definitiones qui, qui ex erat nulla, ut vel modus fastidii platonem. Pro id alia postulant. Per ea velit iriure.
                    </p>
            break;

            default: 
                tab = 
                    <>
                        <AddressBox />
                        <p style={{padding:"20px", textAlign:"left"}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                            sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </>
            break;
        }

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

                <div style={{borderTop:"4px solid #F8A141", width:"100%"}}>
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

                <div>
                    <div style={{borderBottom:"2px solid #EDEDED", width:"100%", display:"flex", alignItems: "left", fontSize:"16px"}}>
                        <div style={{marginLeft:"20px", paddingBottom:"6px", fontWeight:"500", color:"#2D426B"}} onClick={(event) => this.handleTabSwitch(event)}>About Us</div>
                        <div style={{marginLeft:"20px", paddingBottom:"6px", fontWeight:"500", color:"#2D426B"}} onClick={(event) => this.handleTabSwitch(event)}>Training</div>
                        <div style={{marginLeft:"20px", paddingBottom:"6px", fontWeight:"500", color:"#2D426B"}}>Locations</div>
                    </div>

                    <div style={{paddingTop:"20px"}}>
                        {tab}
                    </div>

                </div>

                <MobileFooter history={this.props.history}/>
                <Footer mobileFooterPresent/>
            </div>
        )
    }
}

export default Training;
