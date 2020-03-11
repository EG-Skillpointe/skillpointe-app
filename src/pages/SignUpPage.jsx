import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Switch from "react-switch";
import { Form, Button, ButtonGroup } from 'react-bootstrap';
import { TopNavbarWhite } from "../components";
import HamburgerModal from "../components/HamburgerModal";
import {authService} from "../services/auth.service";

const selectedButton = {
    backgroundColor:"#2D426B",
    color:"#FFFFFF",
    border: "1.5px solid #2D426B"
};

class SignUpPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            switchChecked: false,
            showModal: false,
            userForm: {
                userId: 111,
                userName: "JSmith",
                firstName: "John",
                lastName: "Smith",
                emailAddress: "jsmith111@gmail.com",
                userType: null,
                userDescription: null,
                industry: []
            }
        };
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    handleSwitchChange = (checked) => {
        this.setState({ checked }, () => {
            console.log(`switch status: ${this.state.switchChecked}`)
        });
    };

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

    onUserDescriptionFormChange = (event) => {
        let userForm = {...this.state.userForm};
        userForm.userDescription = event.target.id;

        this.setState({userForm: userForm}, () =>{
            console.log(`userDescription status: ${this.state.userForm.userDescription}`)
        });
    };

    onReasonForJoiningFormChange = (event) => {
        let userType;

        switch(event.target.id) {
            case "Find a Job":
                console.log(`doing type ${event.target.id} login...`);
                userType = 3;
                break;

            case "Explore Careers":
                console.log(`doing type ${event.target.id} login...`);
                userType = 1;
                break;

            case "Find Training":
                console.log(`doing type ${event.target.id} login...`);
                userType = 2;
                break;

            case "Find People":
                // do Facebook login - jobs
                console.log(`doing type ${event.target.id} login...`);
                userType = 4;
                break;

            default: console.log('userType not found. Type:', event.target.id);
        }

        let userForm = {...this.state.userForm};
        userForm.userType = userType;

        this.setState({userForm: userForm}, () =>{
            console.log(`userType status: ${this.state.userForm.userType}`)
        });
    };

    onIndustryFormButtonClick = (event) => {
        let userForm = {...this.state.userForm};
        let industry = [...userForm.industry];

        // if reason for joining exists in industry state, remove it
        if (industry.includes(event.target.value)) {
            let index = industry.indexOf(event.target.value);
            industry.splice(index, 1);
        }
        // if reason for joining doesn't exist in industry state, add it
        else {
            industry.push(event.target.value);
        }

        // set state with changed industries
        userForm.industry = industry;
        this.setState({userForm: userForm}, () => {
            console.log(this.state);
        });
    };

    checkButtonSelection = (industryInput) => {
        let industry = [...this.state.userForm.industry];

        if (industry.includes(industryInput)) {
            return selectedButton;
        }
        else {
            return null;
        }
    };

    signUpFormLogin = (isDefaultUser) => {
        let userForm = {...this.state.userForm};
        let userType = userForm.userType;
        let res;

        console.log(`userType in login: ${userType}`);

        if (isDefaultUser) {
            console.log('defaultUser in login');
            userType = 'default';
            userForm.userType = 1;
            userForm.userDescription = "Student";
            userForm.industry = [];
        }

        switch(userType) {
            case 1:
                // login career
                console.log(`doing type ${userType} login...`);
                res = authService.login(userForm);
                if(res) {
                    this.props.history.push("/")
                    // this.props.history.push("/training")
                }
                break;

            case 2:
                // login training
                console.log(`doing type ${userType} login...`);
                res = authService.login(userForm);
                if(res) {
                    this.props.history.push("/")
                    // this.props.history.push("/training")
                }
                break;

            case 3:
                // login job
                console.log(`doing type ${userType} login...`);
                res = authService.login(userForm);
                if(res) {
                    this.props.history.push("/")
                    // this.props.history.push("/training")
                }
                break;

            case 4:
                // login people
                console.log(`doing type ${userType} login...`);
                res = authService.login(userForm);
                if(res) {
                    this.props.history.push("/")
                    // this.props.history.push("/training")
                }
                break;

            default:
                // default login
                console.log('default login type: ', userType);
                console.log(`default login userForm: ${JSON.stringify(userForm)}`);
                res = authService.login(userForm);
                if(res) {
                    this.props.history.push("/")
                    // this.props.history.push("/training")
                }
                break;
        }

        console.log('login finished.');
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
                    <p style={{margin:"10px auto 20px", lineHeight: "16px", width: "85%"}}>These questions help us determine the most relevant content to show you. Helping you find what you want, faster.</p>

                    <h2 onClick={() => this.signUpFormLogin(true)} style={{fontSize:"14px", color:"#F8A141"}}>To skip select Create Account.</h2>

                    <Form className="sign-up-form" style={{}} onChange={(event) => {this.onUserDescriptionFormChange(event)}}>
                        <h1 style={{marginTop:"0", marginBottom:"15px", fontSize:"18px", textAlign:"left"}}>Which of the following best describes you?</h1>
                        {['radio'].map(type => (
                            <div key={`default-${type}`} className="mb-3" style={{textAlign:"left"}}>
                                <Form.Check
                                    type={type}
                                    label={'Student'}
                                    id={'Student'}
                                    name="groupOfUserTypeRadios"
                                    className="radio-button"
                                />

                                {/*<Form.Check*/}
                                {/*    type={type}*/}
                                {/*    label={'Employer'}*/}
                                {/*    id={'Employer'}*/}
                                {/*    name="groupOfUserTypeRadios"*/}
                                {/*    className="radio-button"*/}
                                {/*/>*/}

                                <Form.Check
                                    type={type}
                                    label={'Job Seeker'}
                                    id={'Job Seeker'}
                                    name="groupOfUserTypeRadios"
                                    className="radio-button"
                                />

                                <Form.Check
                                    type={type}
                                    label={'Professional'}
                                    id={'Professional'}
                                    name="groupOfUserTypeRadios"
                                    className="radio-button"
                                />
                            </div>
                        ))}
                    </Form>

                    <Form className="sign-up-form" style={{}} onChange={(event) => {this.onReasonForJoiningFormChange(event)}}>
                        <h1 style={{marginTop:"0", marginBottom:"15px", fontSize:"18px", textAlign:"left"}}>My primary reason for joining SkillPointe is to:</h1>
                        {['radio'].map(type => (
                            <div key={`default-${type}`} className="mb-3" style={{textAlign:"left"}}>
                                <Form.Check
                                    type={type}
                                    label={'Explore Careers'}
                                    id='Explore Careers'
                                    name="groupOfReasonForJoiningRadios"
                                    className="radio-button"
                                />

                                <Form.Check
                                    type={type}
                                    label={'Find a Job'}
                                    id='Find a Job'
                                    name="groupOfReasonForJoiningRadios"
                                    className="radio-button"
                                />

                                <Form.Check
                                    type={type}
                                    label={'Find Training'}
                                    id='Find Training'
                                    name="groupOfReasonForJoiningRadios"
                                    className="radio-button"
                                />

                                <Form.Check
                                    type={type}
                                    label={'Find People'}
                                    id='Find People'
                                    name="groupOfReasonForJoiningRadios"
                                    className="radio-button"
                                />
                            </div>
                        ))}
                    </Form>

                    <Form className="sign-up-form" style={{}}>
                        <h1 style={{marginTop:"0", marginBottom:"15px", fontSize:"18px", textAlign:"left"}}>What career am I interested in? Select one or more.</h1>
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
                            <Button onClick={(event) => this.onIndustryFormButtonClick(event)} value='Human Services' className="form-button" style={this.checkButtonSelection('Human Services')}>
                                Human Services
                            </Button>
                        </ButtonGroup>
                    </Form>

                    <label style={{display:"flex", justifyContent:"center", alignItem:"center", marginTop:"25px", textAlign:"center !important"}}>
                        <p style={{margin:"auto 10px auto 0"}}>Make Profile Public</p>
                        <Switch onChange={this.handleSwitchChange} checked={this.state.checked} onColor="#2D426B"/>
                    </label>

                    <Button onClick={() => this.signUpFormLogin(false)} style={{background:"#F8A141", border:"none", marginTop:"40px", fontSize:"18px"}}>
                         Create Account
                    </Button>
                </div>
            </div>
        )
    }
}

export default SignUpPage;
