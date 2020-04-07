import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Switch from "react-switch";
import { Collapse, Button, CardBody, Card } from 'reactstrap';
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
import {VideoCarousel} from "../components/VideoCarousel";

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
            currentTab: "",
            collapseStatus: false
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

    // handleTabSwitch = (event) => {
    //     this.setState({ currentTab: event.target.innerText }, () => {
    //         console.log(`currentTab: ${this.state.currentTab}`);
    //     });
    // };

    handleCollapseClick = (event) => {
        const collapseStatus = this.state.collapseStatus;

        this.setState({ collapseOpen: !collapseStatus }, () => {
            console.log(`collapseOpen: ${this.state.collapseOpen}`);
        });
    };

    render() {
        let cards = this.state.searchResults.map(school => <SchoolCard school={school}/> );
        const modalOpened = this.state.showModal;

        // let tab;

        // switch(this.state.currentTab) {
        //     case "About Us":
        //         tab = 
        //             <>
        //                 <div style={{marginBottom:"20px"}}>
        //                     <VideoCarousel/>
        //                 </div>

        //                 <AddressBox />
        //                 <p style={{padding:"20px", textAlign:"left"}}>
        //                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        //                     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        //                     Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
        //                     sunt in culpa qui officia deserunt mollit anim id est laborum.
        //                 </p>
        //             </>
        //     break;

        //     case "Training":
        //         tab = 
        //             <p style={{padding:"20px", textAlign:"left"}}>
        //                 Duo mazim nemore et, ad suas scripserit sed. Pro ne ludus fuisset ocurreret, iriure salutandi eloquentiam qui id. Ea has decore periculis maluisset, ubique viderer te pro.
        //                     Pro veniam possim impetus ut, nonumes ocurreret an duo. At ipsum definitiones qui, qui ex erat nulla, ut vel modus fastidii platonem. Pro id alia postulant. Per ea velit iriure.
        //             </p>
        //     break;

        //     default: 
        //         tab = 
        //             <>
        //                 <div style={{marginBottom:"20px"}}>
        //                     <VideoCarousel/>
        //                 </div>

        //                 <AddressBox />

        //                 <p style={{padding:"20px", textAlign:"left"}}>
        //                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        //                     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        //                     Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
        //                     sunt in culpa qui officia deserunt mollit anim id est laborum.
        //                 </p>
        //             </>
        //     break;
        // }

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

                <div style={{borderTop:"4px solid #F8A141", width:"100%"}}>
                    <VideoCarousel/>

                    <div className="address-box">
                        <AddressBox />
                    </div>

                    <div className="collapsed-articles">
                        <Button onClick={this.handleCollapseClick} style={{ marginBottom: '1rem', width:"90%" }}>Toggle</Button>
                        <Collapse isOpen={this.state.collapseOpen}>
                            <Card>
                                <CardBody>
                                Anim pariatur cliche reprehenderit,
                                enim eiusmod high life accusamus terry richardson ad squid. Nihil
                                anim keffiyeh helvetica, craft beer labore wes anderson cred
                                nesciunt sapiente ea proident.
                                </CardBody>
                            </Card>
                        </Collapse>

                        <Button onClick={this.handleCollapseClick} style={{ marginBottom: '1rem', width:"90%" }}>Toggle</Button>
                        <Collapse isOpen={this.state.collapseOpen}>
                            <Card>
                                <CardBody>
                                Anim pariatur cliche reprehenderit,
                                enim eiusmod high life accusamus terry richardson ad squid. Nihil
                                anim keffiyeh helvetica, craft beer labore wes anderson cred
                                nesciunt sapiente ea proident.
                                </CardBody>
                            </Card>
                        </Collapse>

                        <Button onClick={this.handleCollapseClick} style={{ marginBottom: '1rem', width:"90%" }}>Toggle</Button>
                        <Collapse isOpen={this.state.collapseOpen}>
                            <Card>
                                <CardBody>
                                Anim pariatur cliche reprehenderit,
                                enim eiusmod high life accusamus terry richardson ad squid. Nihil
                                anim keffiyeh helvetica, craft beer labore wes anderson cred
                                nesciunt sapiente ea proident.
                                </CardBody>
                            </Card>
                        </Collapse>

                        <Button onClick={this.handleCollapseClick} style={{ marginBottom: '1rem', width:"90%" }}>Toggle</Button>
                        <Collapse isOpen={this.state.collapseOpen}>
                            <Card>
                                <CardBody>
                                Anim pariatur cliche reprehenderit,
                                enim eiusmod high life accusamus terry richardson ad squid. Nihil
                                anim keffiyeh helvetica, craft beer labore wes anderson cred
                                nesciunt sapiente ea proident.
                                </CardBody>
                            </Card>
                        </Collapse>
                    </div>
                </div>

                <MobileFooter history={this.props.history}/>
                <Footer mobileFooterPresent/>
            </div>
        )
    }
}

export default Training;
