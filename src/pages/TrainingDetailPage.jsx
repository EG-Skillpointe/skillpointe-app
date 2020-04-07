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
import landingBackground from '../assets/images/landing-background1.png'

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
            program1Collapse: false,
            program2Collapse: false,
            program3Collapse: false,
            program4Collapse: false
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

    handleCollapseClick = (event) => {
        console.log(event.target.value);

        switch(event.target.value) {
            case 'Program1':
                const program1Collapse = this.state.program1Collapse;
                this.setState({
                        program1Collapse: !program1Collapse,
                        program2Collapse: false,
                        program3Collapse: false,
                        program4Collapse: false
                    }, () => {
                    console.log(`program1Collapse: ${this.state.program1Collapse}`)
                });
                break;

            case 'Program2':
                const program2Collapse = this.state.program2Collapse;
                this.setState({
                        program1Collapse: false,
                        program2Collapse: !program2Collapse,
                        program3Collapse: false,
                        program4Collapse: false
                    }, () => {
                    console.log(`program2Collapse: ${this.state.program2Collapse}`)
                });
                break;

            case 'Program3':
                const program3Collapse = this.state.program3Collapse;
                this.setState({
                    program1Collapse: false,
                    program2Collapse: false,
                    program3Collapse: !program3Collapse,
                    program4Collapse: false
                    }, () => {
                    console.log(`program3Collapse: ${this.state.program3Collapse}`)
                });
                break;

            case 'Program4':
                const program4Collapse = this.state.program4Collapse;
                this.setState({
                    program1Collapse: false,
                    program2Collapse: false,
                    program3Collapse: false,
                    program4Collapse: !program4Collapse
                    }, () => {
                    console.log(`program4Collapse: ${this.state.program4Collapse}`)
                });
                break;

            default:
                console.log('Program not found');
                break;
        }
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

                <img className='landing-img' src={landingBackground} alt='landingBackground' style={{height:"10vh"}}/>

                <div style={{borderTop:"4px solid #F8A141", width:"100%"}}>
                    <div style={{margin: '10px 0'}}>
                        <VideoCarousel />
                    </div>

                    <div className="address-box">
                        <AddressBox />
                    </div>

                    <div style={{marginBottom: '15px'}}>
                        <div style={{border:"solid 1px #E5E5E5", background:"#F5F5F5", textAlign:"left", padding:"20px 0 20px 20px", marginLeft:"20px", marginRight:"20px"}}>
                            <p style={{width: "90%"}}>
                                Description. Anim pariatur cliche reprehenderit,
                                enim eiusmod high life accusamus terry richardson ad squid. Nihil
                                anim keffiyeh helvetica, craft beer labore wes anderson cred
                                nesciunt sapiente ea proident. Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                    </div>

                    <div style={{border:"solid 1px #E5E5E5", background:"#F5F5F5", textAlign:"left", margin:"auto", marginBottom:"20px", width:"90%", borderRadius:"5px"}}>
                        <div className="collapsed-articles" style={{display:"flex", flexWrap:"wrap", justifyContent:"center"}}>
                            <Button onClick={this.handleCollapseClick} value="Program1" style={{ marginBottom: '1rem', width:"100%" }}>Program 1</Button>
                            <Collapse isOpen={this.state.program1Collapse} style={{ width:"100%" }}>
                                <Card>
                                    <CardBody style={{ paddingBottom: "10px"}}>
                                    Anim pariatur cliche reprehenderit,
                                    enim eiusmod high life accusamus terry richardson ad squid. Nihil
                                    anim keffiyeh helvetica, craft beer labore wes anderson cred
                                    nesciunt sapiente ea proident.
                                    </CardBody>
                                </Card>
                            </Collapse>

                            <Button onClick={this.handleCollapseClick} value="Program2" style={{ marginBottom: '1rem', width:"100%" }}>Program 2</Button>
                            <Collapse isOpen={this.state.program2Collapse} style={{ width:"100%" }}>
                                <Card>
                                    <CardBody style={{ paddingBottom: "10px"}}>
                                    Anim pariatur cliche reprehenderit,
                                    enim eiusmod high life accusamus terry richardson ad squid. Nihil
                                    anim keffiyeh helvetica, craft beer labore wes anderson cred
                                    nesciunt sapiente ea proident.
                                    </CardBody>
                                </Card>
                            </Collapse>

                            <Button onClick={this.handleCollapseClick} value="Program3" style={{ marginBottom: '1rem', width:"100%" }}>Program 3</Button>
                            <Collapse isOpen={this.state.program3Collapse} style={{ width:"100%" }}>
                                <Card>
                                    <CardBody style={{ paddingBottom: "10px"}}>
                                    Anim pariatur cliche reprehenderit,
                                    enim eiusmod high life accusamus terry richardson ad squid. Nihil
                                    anim keffiyeh helvetica, craft beer labore wes anderson cred
                                    nesciunt sapiente ea proident.
                                    </CardBody>
                                </Card>
                            </Collapse>

                            <Button onClick={this.handleCollapseClick} value="Program4" style={{ width:"100%" }}>Program 4</Button>
                            <Collapse isOpen={this.state.program4Collapse} style={{ width:"100%" }}>
                                <Card>
                                    <CardBody style={{ paddingBottom: "10px"}}>
                                    Anim pariatur cliche reprehenderit,
                                    enim eiusmod high life accusamus terry richardson ad squid. Nihil
                                    anim keffiyeh helvetica, craft beer labore wes anderson cred
                                    nesciunt sapiente ea proident.
                                    </CardBody>
                                </Card>
                            </Collapse>
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
