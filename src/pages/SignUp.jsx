import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Form, Button, ButtonGroup } from 'react-bootstrap';
import { MobileFooter, TopNavbar, TopNavbarBlue, Footer, TopNavbarWhite} from "../components";
import HamburgerModal from "../components/HamburgerModal";


class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            userType: null,
            reasonForJoining: null,
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

    onFormChange = (event) => {
        console.log('\n');
        console.log(`event in onFormChange: ${event}`);
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

                    <Form className="sign-up-form" style={{}} onChange={(event) => {this.onFormChange(event)}}>
                        <h1 style={{marginTop:"10px", marginBottom:"10px", fontSize:"18px", textAlign:"left"}}>Which of the following best describes you?</h1>
                        {['radio'].map(type => (
                            <div key={`default-${type}`} className="mb-3" style={{textAlign:"left"}}>
                                <Form.Check
                                    type={type}
                                    label={'Student'}
                                    id={`disabled-default-${type}`}
                                />

                                <Form.Check
                                    type={type}
                                    label={'Employer'}
                                    id={`disabled-default-${type}`}
                                />

                                <Form.Check
                                    type={type}
                                    label={'Job Seeker'}
                                    id={`disabled-default-${type}`}
                                />

                                <Form.Check
                                    type={type}
                                    label={'School Representative'}
                                    id={`disabled-default-${type}`}
                                />
                            </div>
                        ))}
                    </Form>

                    <Form className="sign-up-form" style={{}} onChange={(event) => {this.onFormChange(event)}}>
                        <h1 style={{marginTop:"10px", marginBottom:"10px", fontSize:"18px", textAlign:"left"}}>My primary reason for joining SkillPointe is to:</h1>
                        {['radio'].map(type => (
                            <div key={`default-${type}`} className="mb-3" style={{textAlign:"left"}}>
                                <Form.Check
                                    style={{}}
                                    type={type}
                                    label={'Student'}
                                    id={`disabled-default-${type}`}
                                />

                                <Form.Check
                                    style={{}}
                                    type={type}
                                    label={'Employer'}
                                    id={`disabled-default-${type}`}
                                />

                                <Form.Check
                                    style={{}}
                                    type={type}
                                    label={'Job Seeker'}
                                    id={`disabled-default-${type}`}
                                />

                                <Form.Check
                                    style={{}}
                                    type={type}
                                    label={'School Representative'}
                                    id={`disabled-default-${type}`}
                                />
                            </div>
                        ))}
                    </Form>

                    <Form className="sign-up-form" style={{}} onChange={(event) => {this.onFormChange(event)}}>
                        <h1 style={{marginTop:"10px", marginBottom:"10px", fontSize:"18px", textAlign:"left"}}>My primary reason for joining SkillPointe is to:</h1>
                        <ButtonGroup style={{display:"flex", flexWrap:"wrap", justifyContent:"center"}}>
                            <Button value='Healthcare' className="form-button">
                                Healthcare
                            </Button>
                            <Button value='Energy' className="form-button">
                                Energy
                            </Button>
                            <Button value='Communications' className="form-button">
                                Communications
                            </Button>
                            <Button value='Public Services' className="form-button">
                                Public Services
                            </Button>
                            <Button value='Hospitality' className="form-button">
                                Hospitality
                            </Button>
                            <Button value='Transportation' className="form-button">
                                Transportation
                            </Button>
                            <Button value='Information Technology' className="form-button">
                                Information Technology
                            </Button>
                            <Button value='Manufacturing' className="form-button">
                                Manufacturing
                            </Button>
                            <Button value='Construction' className="form-button">
                                Construction
                            </Button>
                        </ButtonGroup>
                    </Form>
                </div>
            </div>
        )
    }
}

export default SignUp;
