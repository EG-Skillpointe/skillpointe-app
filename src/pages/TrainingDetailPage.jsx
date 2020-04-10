import React, { Component } from 'react';
import {Link} from "react-router-dom";
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import {
    TopNavbarWhite,
    Footer,
    SchoolCard,
    AddressBox
} from "../components";
import {VideoCarousel} from "../components/VideoCarousel";
import { MobileFooter } from "../components";
import HamburgerModal from "../components/HamburgerModal";
import school from "../assets/mockData/school";
import arrowDown from '../assets/images/keyboard_arrow_down_24px_outlined.svg';
import schoolImage from '../assets/images/fscj_transparent.png'
import programs from "../assets/mockData/programs";


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
        let healthcareCards = programs.Healthcare.map((program) => {
            return <Card>
                <CardBody style={{ padding: "0 10px 20px 10px"}}>
                    <h4>{program.jobType}</h4>
                    <h5>{program.program}</h5>
                    <a href={program.link}>More info</a>
                </CardBody>
            </Card>
        });

        console.log(healthcareCards);

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

                <div style={{width:"100%", height:"80px", borderBottom:"4px solid #F8A141", display:"flex", alignItems:"center"}}>
                    <img src={schoolImage} style={{width:"100px", height:"60px", marginLeft:"20px"}}/>
                    <h3 style={{margin:"0", height:"auto", fontSize:"20px", marginLeft:"0px", fontFamily: "Roboto"}}>FSCJ at Jacksonville</h3>
                </div>

                <div style={{borderTop:"4px solid #F8A141", width:"100%"}}>
                    <div style={{margin: '10px auto 0 auto', width: "90%"}}>
                        <VideoCarousel />
                    </div>

                    <div className="address-box">
                        <AddressBox />
                    </div>

                    <div style={{marginBottom: '15px'}}>
                        <div style={{border:"solid 1px #E5E5E5", background:"#F5F5F5", textAlign:"left", padding:"20px 0 20px 20px", marginLeft:"20px", marginRight:"20px"}}>
                            <p style={{width: "90%"}}>
                            FSCJ is growing its reputation as the largest, most dynamic and most influential college in Florida. Offering 13 bachelor’s degrees, 45 associate degrees and more than 100 technical certificates and workforce certifications, FSCJ has degree options for everyone.
                            <br/><br/>
                            We offer flexible class schedules to include online classes, hybrid courses and traditional college classes to meet the individual needs of our students.
                            <br/><br/>
                            With one of the lowest tuition rates for in-state residents, FSCJ is one of the most affordable community colleges in the United States. Our students can also benefit from financial aid options and scholarship opportunities to help with the cost of tuition, books and fees.
                            </p>
                        </div>
                    </div>

                    <div style={{border:"solid 1px #E5E5E5", background:"#F5F5F5", textAlign:"left", margin:"auto", marginBottom:"20px", width:"90%", borderRadius:"5px"}}>
                        <h1 style={{fontSize:"24px"}}>Programs</h1>
                        <div className="collapsed-articles" style={{display:"flex", flexWrap:"wrap", justifyContent:"center"}}>

                            <Button onClick={this.handleCollapseClick} value="Program1" style={{ marginBottom: '1rem', width:"100%" }}>Construction</Button>
                            <Collapse isOpen={this.state.program1Collapse} style={{ width:"100%" }}>
                                <Card>
                                    <CardBody style={{ padding: "0 10px 20px 10px"}}>
                                        <h4>HVAC Mechanic & Installer</h4>
                                        <h5>Heating, Ventilation, Air-Conditioning/Refrigeration, W.C.</h5>
                                        <a href="https://www.fscj.edu/academics/areas-of-study/construction-manufacturing/5604">More info</a>
                                    </CardBody>

                                    <CardBody style={{ padding: "0 10px 20px 10px"}}>
                                        <h4>HVAC Mechanic & Installer</h4>
                                        <h5>Heating, Ventilation, Air-Conditioning/Refrigeration I, W.C.</h5>
                                        <a href="https://www.fscj.edu/academics/areas-of-study/construction-manufacturing/5604">More info</a>
                                    </CardBody>

                                    <CardBody style={{ padding: "0 10px 20px 10px"}}>
                                        <h4>HVAC Mechanic & Installer</h4>
                                        <h5>Heating, Ventilation, Air-Conditioning/Refrigeration II, W.C.</h5>
                                        <a href="https://www.fscj.edu/academics/areas-of-study/construction-manufacturing/5604">More info</a>
                                    </CardBody>
                                </Card>
                            </Collapse>

                            <Button onClick={this.handleCollapseClick} value="Program2" style={{ marginBottom: '1rem', width:"100%" }}>Healthcare</Button>
                            <Collapse isOpen={this.state.program2Collapse} style={{ width:"100%" }}>
                                <Card>
                                    <CardBody style={{ padding: "0 10px 20px 10px"}}>
                                        <h4>Respiratory therapist</h4>
                                        <h5>Respiratory Care, A.S.</h5>
                                        <a href="https://www.fscj.edu/academics/areas-of-study/health-human-services/respiratory-care-as">More info</a>
                                    </CardBody>

                                    <CardBody style={{ padding: "0 10px 20px 10px"}}>
                                        <h4>Dental hygienist</h4>
                                        <h5>Dental Hygiene, A.S.</h5>
                                        <a href="https://www.fscj.edu/academics/areas-of-study/health-human-services/Dental-Hygiene">More info</a>
                                    </CardBody>

                                    <CardBody style={{ padding: "0 10px 20px 10px"}}>
                                        <h4>Dental hygienist</h4>
                                        <h5>Dental Hygiene, W.C.</h5>
                                        <a href="https://www.fscj.edu/academics/areas-of-study/health-human-services/dental-assisting-wc">More info</a>
                                    </CardBody>

                                    <CardBody style={{ padding: "0 10px 20px 10px"}}>
                                        <h4>Occupational therapy assistant</h4>
                                        <h5>Occupational Therapy Assistant, A.S.</h5>
                                        <a href="https://www.fscj.edu/academics/areas-of-study/health-human-services/Occupational-Therapy-Assistant">More info</a>
                                    </CardBody>
                                </Card>
                            </Collapse>

                            <Button onClick={this.handleCollapseClick} value="Program3" style={{ marginBottom: '1rem', width:"100%" }}>Manufacturing</Button>
                            <Collapse isOpen={this.state.program3Collapse} style={{ width:"100%" }}>
                            <Card>
                                    <CardBody style={{ padding: "0 10px 20px 10px"}}>
                                        <h4>Electrical & electronics engineering tech</h4>
                                        <h5>Engineering Technology (Advanced Manufacturing), A.S.</h5>
                                        <a href="https://www.fscj.edu/academics/areas-of-study/construction-manufacturing/engineering-technology-as">More info</a>
                                    </CardBody>

                                    <CardBody style={{ padding: "0 10px 20px 10px"}}>
                                        <h4>Industrial machinery mechanic</h4>
                                        <h5>Pneumatics, Hydraulics and Motors for Manufacturing, T.C.</h5>
                                        <a href="https://www.fscj.edu/academics/areas-of-study/construction-manufacturing/Pneumatics-Hydraulics-and-Motors-for-Manufacturing">More info</a>
                                    </CardBody>

                                    <CardBody style={{ padding: "0 10px 20px 10px"}}>
                                        <h4>CNC Machinist</h4>
                                        <h5>CNC Machinist/Fabricator, T.C.</h5>
                                        <a href="https://www.fscj.edu/academics/areas-of-study/construction-manufacturing/cnc-machinist-tc">More info</a>
                                    </CardBody>
                                </Card>
                            </Collapse>

                            <Button onClick={this.handleCollapseClick} value="Program4" style={{ width:"100%" }}>Public Service</Button>
                            <Collapse isOpen={this.state.program4Collapse} style={{ width:"100%" }}>
                            <Card>
                                    <CardBody style={{ padding: "0 10px 20px 10px"}}>
                                        <h4>Fire inspector & investigator</h4>
                                        <h5>Fire Science Technology A.S.</h5>
                                        <a href="https://www.fscj.edu/academics/areas-of-study/public-safety-security/fire-science-technology-as">More info</a>
                                    </CardBody>

                                    <CardBody style={{ padding: "0 10px 20px 10px"}}>
                                        <h4>Fire inspector & investigator</h4>
                                        <h5>Fire Officer Supervisor T.C.</h5>
                                        <a href="https://www.fscj.edu/academics/areas-of-study/public-safety-security/fire-officer-supervisor-tc">More info</a>
                                    </CardBody>

                                    <CardBody style={{ padding: "0 10px 20px 10px"}}>
                                        <h4>Police & sheriff patrol office</h4>
                                        <h5>Florida Law Enforcement Academy W.C.</h5>
                                        <a href="https://www.fscj.edu/academics/areas-of-study/public-safety-security/florida-law-enforcement-academy-wc">More info</a>
                                    </CardBody>

                                    <CardBody style={{ padding: "0 10px 20px 10px"}}>
                                        <h4>Police & sheriff patrol office</h4>
                                        <h5>Crossover from Correctional Officer to Law Enforcement Officer W.C.</h5>
                                        <a href="https://www.fscj.edu/academics/areas-of-study/public-safety-security/crossover-from-correctional-officer-to-law-enforcement-officer-wc">More info</a>
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
