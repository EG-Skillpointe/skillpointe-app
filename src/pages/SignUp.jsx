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

                    <Form style={{display:"flex", flexDirection:"column"}} onChange={(event) => {this.onFormChange(event)}}>
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

                    <Form style={{display:"flex", flexDirection:"column"}} onChange={(event) => {this.onFormChange(event)}}>
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

                    <Form style={{display:"flex", flexDirection:"column"}} onChange={(event) => {this.onFormChange(event)}}>
                        <h1 style={{marginTop:"10px", marginBottom:"10px", fontSize:"18px", textAlign:"left"}}>My primary reason for joining SkillPointe is to:</h1>
                        <ButtonGroup style={{display:"flex", flexWrap:"wrap", justifyContent:"center"}}>
                            <Button value='Healthcare' style={{margin:"10px", borderRadius:"5px"}}>
                                Healthcare
                            </Button>
                            <Button value='Energy' style={{margin:"5px", borderRadius:"5px"}}>
                                Energy
                            </Button>
                            <Button value='Communications' style={{margin:"5px", borderRadius:"5px"}}>
                                Communications
                            </Button>
                            <Button value='Public Services' style={{margin:"5px", borderRadius:"5px"}}>
                                Public Services
                            </Button>
                            <Button value='Hospitality' style={{margin:"5px", borderRadius:"5px"}}>
                                Hospitality
                            </Button>
                            <Button value='Transportation' style={{margin:"5px", borderRadius:"5px"}}>
                                Transportation
                            </Button>
                            <Button value='Information Technology' style={{margin:"5px", borderRadius:"5px"}}>
                                Information Technology
                            </Button>
                            <Button value='Manufacturing' style={{margin:"5px", borderRadius:"5px"}}>
                                Manufacturing
                            </Button>
                            <Button value='Construction' style={{margin:"5px", borderRadius:"5px"}}>
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
