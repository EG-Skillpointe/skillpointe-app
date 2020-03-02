import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Form, Button, ButtonGroup } from 'react-bootstrap';
import { MobileFooter, Footer, TopNavbarWhite} from "../components";
import HamburgerModal from "../components/HamburgerModal";

const selectedButton = {
    backgroundColor:"#2D426B",
    color:"#FFFFFF"
};

class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            userType: null,
            reasonForJoining: null,
            industry: []
        };
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

    onUserTypeFormChange = (event) => {
        this.setState({userType:event.target.id}, () =>{
            console.log(`userType status: ${this.state.userType}`)
        });
    };

    onReasonForJoiningFormChange = (event) => {
        this.setState({reasonForJoining:event.target.id}, () =>{
            console.log(`reasonForJoining status: ${this.state.reasonForJoining}`)
        });
    };

    onIndustryFormButtonClick = (event) => {
        console.log('\n');
        console.log(`event in onFormButtonClick: ${event.target.value}`);

        let industry = [...this.state.industry];

        // if reason for joining exists in state, remove it
        if (industry.includes(event.target.value)) {
            let index = industry.indexOf(event.target.value);
            industry.splice(index, 1);

            this.setState({industry:industry}, () => {
                console.log(this.state);
            });
        }
        // if reason for joining doesn't exist in state, add it
        else {
            industry.push(event.target.value);

            this.setState({industry:industry}, () => {
                console.log(this.state);
            });
        }
    };

    onSubmitForm = () => {
        console.log('Form Submitted!');
    };

    checkButtonSelection = (industryInput) => {
        console.log('buttonSelection function');
        let industry = [...this.state.industry];

        if (industry.includes(industryInput)) {
            return selectedButton;
        }
        else {
            return null;
        }
    };

    render() {
        const modalOpened = this.state.showModal;

        return (
            <div className='sign-up-page'>
                {/*conditionally rendered modal*/}
                {modalOpened ? (<HamburgerModal pageType="home" history={this.props.history} closeModal={this.closeModal} />) : (null)}

                {/*main contents of page*/}
                <TopNavbarWhite history={this.props.history} openModal={this.openModal} closeModal={this.closeModal} absolute transparent/>

                <div className='sign-up' style={{margin: "30px auto", width:"85%"}}>
                    <h1 style={{margin:"0"}}>Personalize</h1>
                    <h1 style={{margin:"0"}}>Your Experience</h1>
                    <p style={{margin:"10px 0", lineHeight: "16px"}}>These questions help us determine the most relevant content to show you. Helping you find what you want, faster.</p>

                    <Link to="/" style={{fontSize:"16px"}}>To skip select Create Account.</Link>

                    <Form className="sign-up-form" style={{}} onChange={(event) => {this.onUserTypeFormChange(event)}}>
                        <h1 style={{marginTop:"10px", marginBottom:"10px", fontSize:"18px", textAlign:"left"}}>Which of the following best describes you?</h1>
                        {['radio'].map(type => (
                            <div key={`default-${type}`} className="mb-3" style={{textAlign:"left"}}>
                                <Form.Check
                                    type={type}
                                    label={'Student'}
                                    id={'Student'}
                                    name="groupOfUserTypeRadios"
                                />

                                <Form.Check
                                    type={type}
                                    label={'Employer'}
                                    id={'Employer'}
                                    name="groupOfUserTypeRadios"
                                />

                                <Form.Check
                                    type={type}
                                    label={'Job Seeker'}
                                    id={'Job Seeker'}
                                    name="groupOfUserTypeRadios"
                                />

                                <Form.Check
                                    type={type}
                                    label={'School Representative'}
                                    id={'School Representative'}
                                    name="groupOfUserTypeRadios"
                                />
                            </div>
                        ))}
                    </Form>

                    <Form className="sign-up-form" style={{}} onChange={(event) => {this.onReasonForJoiningFormChange(event)}}>
                        <h1 style={{marginTop:"10px", marginBottom:"10px", fontSize:"18px", textAlign:"left"}}>My primary reason for joining SkillPointe is to:</h1>
                        {['radio'].map(type => (
                            <div key={`default-${type}`} className="mb-3" style={{textAlign:"left"}}>
                                <Form.Check
                                    type={type}
                                    label={'Find a Job'}
                                    id='Find a Job'
                                    name="groupOfReasonForJoiningRadios"
                                />

                                <Form.Check
                                    type={type}
                                    label={'Explore Careers'}
                                    id='Explore Careers'
                                    name="groupOfReasonForJoiningRadios"
                                />

                                <Form.Check
                                    type={type}
                                    label={'Find Training'}
                                    id='Find Training'
                                    name="groupOfReasonForJoiningRadios"
                                />

                                <Form.Check
                                    type={type}
                                    label={'Find People'}
                                    id='Find People'
                                    name="groupOfReasonForJoiningRadios"
                                />
                            </div>
                        ))}
                    </Form>

                    <Form className="sign-up-form" style={{}}>
                        <h1 style={{marginTop:"10px", marginBottom:"10px", fontSize:"18px", textAlign:"left"}}>Which industry are you interested in? Select one or more.</h1>
                        <ButtonGroup style={{display:"flex", flexWrap:"wrap", justifyContent:"center"}}>
                            <Button onClick={(event) => this.onIndustryFormButtonClick(event)} value='Healthcare' className="form-button" style={this.checkButtonSelection('Healthcare')}>
                                Healthcare
                            </Button>
                            <Button onClick={(event) => this.onIndustryFormButtonClick(event)} value='Energy' className="form-button" style={this.checkButtonSelection('Energy')}>
                                Energy
                            </Button>
                            <Button onClick={(event) => this.onIndustryFormButtonClick(event)} value='Communications' className="form-button" style={this.checkButtonSelection('Communications')}>
                                Communications
                            </Button>
                            <Button onClick={(event) => this.onIndustryFormButtonClick(event)} value='Public Services' className="form-button" style={this.checkButtonSelection('Public Services')}>
                                Public Services
                            </Button>
                            <Button onClick={(event) => this.onIndustryFormButtonClick(event)} value='Hospitality' className="form-button" style={this.checkButtonSelection('Hospitality')}>
                                Hospitality
                            </Button>
                            <Button onClick={(event) => this.onIndustryFormButtonClick(event)} value='Transportation' className="form-button" style={this.checkButtonSelection('Transportation')}>
                                Transportation
                            </Button>
                            <Button onClick={(event) => this.onIndustryFormButtonClick(event)} value='Information Technology' className="form-button" style={this.checkButtonSelection('Information Technology')}>
                                Information Technology
                            </Button>
                            <Button onClick={(event) => this.onIndustryFormButtonClick(event)} value='Manufacturing' className="form-button" style={this.checkButtonSelection('Manufacturing')}>
                                Manufacturing
                            </Button>
                            <Button onClick={(event) => this.onIndustryFormButtonClick(event)} value='Construction' className="form-button" style={this.checkButtonSelection('Construction')}>
                                Construction
                            </Button>
                        </ButtonGroup>
                    </Form>

                    <Button onClick={this.onSubmitForm} style={{background:"#F8A141", border:"none", marginTop:"40px", fontSize:"18px"}}>
                         Create Account
                    </Button>
                </div>
            </div>
        )
    }
}

export default SignUp;
