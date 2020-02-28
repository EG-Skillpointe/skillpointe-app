import React, { Component } from 'react';
import {SignIn, SignUp, TopNavbarWhite, Footer} from "../components";
import {authService} from "../services/auth.service";
// import logo from "../assets/images/logo.png";
// import loginImage from "../assets/images/login-image.jpeg";
// import careersImg from "../assets/images/Explore_Careers.png";
// import jobsImg from "../assets/images/Find_Jobs.png";
// import trainingImg from "../assets/images/Find_Training.png";
// import peopleImg from "../assets/images/Find_People.png";
import HamburgerModal from "../components/HamburgerModal";

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            signInToggle: true,
            showModal: false
        };
    }

    componentDidMount() {
        
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

    toggleSignIn = () => {
        this.setState({
            signInToggle: !this.state.signInToggle
        });
    }

    login = (type) => {
        console.log('login clicked with type:', type);

        switch(type) {
            case 1: { // do Regular login - careers
                console.log(`doing type ${type} login...`);
                let res = authService.login(userType1);
                if(res) {
                    this.props.history.push("/career-landing")
                }
            } break;
            case 2: { // do Google login - training
                console.log(`doing type ${type} login...`);
                let res = authService.login(userType2);
                if(res) {
                    this.props.history.push("/training")
                }
            } break;
            case 3: { // do Facebook login - jobs
                console.log(`doing type ${type} login...`);
                let res = authService.login(userType3);
                if(res) {
                    this.props.history.push("/jobsearch")
                }
            } break;
            default: console.log('login type not found. Type:', type);
        }
        
        // let res = authService.login();
        console.log('login finished.');
    }

    logout() {
        console.log('logout clicked 1')
        authService.logout();
    }


    render() {
        const modalOpened = this.state.showModal;

        const googleButton = 
            <button className="tp-login-button goog" onClick={() => this.login(2)}>
                <div className="tp-login-contents">
                    <div>
                        <svg height="20" viewBox="0 0 512 512" width="20" xmlns="http://www.w3.org/2000/svg">
                        <g fill="none" fillRule="evenodd"><path d="M482.56 261.36c0-16.73-1.5-32.83-4.29-48.27H256v91.29h127.01c-5.47 29.5-22.1 54.49-47.09 71.23v59.21h76.27c44.63-41.09 70.37-101.59 70.37-173.46z" fill="#4285f4"></path><path d="M256 492c63.72 0 117.14-21.13 156.19-57.18l-76.27-59.21c-21.13 14.16-48.17 22.53-79.92 22.53-61.47 0-113.49-41.51-132.05-97.3H45.1v61.15c38.83 77.13 118.64 130.01 210.9 130.01z" fill="#34a853"></path><path d="M123.95 300.84c-4.72-14.16-7.4-29.29-7.4-44.84s2.68-30.68 7.4-44.84V150.01H45.1C29.12 181.87 20 217.92 20 256c0 38.08 9.12 74.13 25.1 105.99l78.85-61.15z" fill="#fbbc05"></path><path d="M256 113.86c34.65 0 65.76 11.91 90.22 35.29l67.69-67.69C373.03 43.39 319.61 20 256 20c-92.25 0-172.07 52.89-210.9 130.01l78.85 61.15c18.56-55.78 70.59-97.3 132.05-97.3z" fill="#ea4335"></path><path d="M20 20h472v472H20V20z"></path></g>
                        </svg>
                    </div>
                    <span className="tp-login-span">Continue with Google</span>
                </div>
            </button>

        const facebookButton = 
            <button className="tp-login-button fb" onClick={() => this.login(3)}>
                <div className="tp-login-contents">
                    <img className="img" src="https://static.xx.fbcdn.net/rsrc.php/v3/yN/r/szGrb_tkxMW.png" alt="" width="24" height="24"></img>
                    <span className="tp-login-span fb-span">Continue with Facebook</span>
                </div>
            </button>


        return (
            <>
            {/*conditionally rendered modal*/}
            {modalOpened ? (<HamburgerModal pageType="home" history={this.props.history} closeModal={this.closeModal} />) : (null)}

            {/*main contents of page*/}
            <TopNavbarWhite history={this.props.history} openModal={this.openModal} closeModal={this.closeModal}/>

            <div className="login-container">
                <div className="login-block">

                    <div className="login-heading">
                        {/* <img className="logo" src={logo} alt="Logo" /> */}
                        <label className="heading">Join The Movement</label>
                        <p>Explore career paths.<br></br>
                            Connect with schools and employers.</p>
                        
                    </div>
                    
                    {
                        this.state.signInToggle
                        ? <SignIn toggle={this.toggleSignIn} login={this.login}/> 
                        : <>
                            <label className="sub-heading">Join Skillpointe today.</label>
                            <SignUp toggle={this.toggleSignIn} login={this.login}/>
                        </>
                        
                    }

                    <div className="text-strikethru">
                        <div className="line"></div>
                        <div className="text">OR</div>
                    </div>
                    { googleButton }
                    { facebookButton }
                </div>

                {/* <div className="login-footer-image">
                    <img className="img" src={loginImage} alt="LoginFooterImage" />
                    <div className="overlay">
                        <div className="overlay-text-block">
                            <div className="overlay-text">
                                <img src={careersImg} alt="" width="24" height="24"></img>
                                Explore Careers
                            </div>
                            <div className="overlay-text">
                                <img src={jobsImg} alt="" width="24" height="24"></img>
                                Get Hired
                            </div>
                            <div className="overlay-text">
                                <img src={trainingImg} alt="" width="24" height="24"></img>
                                Find Training
                            </div>
                            <div className="overlay-text">
                                <img src={peopleImg} alt="" width="24" height="24"></img>
                                Join the movement...
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
            <Footer/>
            </>
        );
    }
}

// Careers
const userType1 = {
    userID: 111,
    userType: 1,
    userName: "JSmith",
    firstName: "John",
    lastName: "Smith",
    emailAddress: "jsmith111@gmail.com",
}

// Training
const userType2 = {
    userID: 222,
    userType: 2,
    userName: "HJohnson",
    firstName: "Howard",
    lastName: "Johnson",
    emailAddress: "HJohnson222@gmail.com",
}

// Jobs
const userType3 = {
    userID: 333,
    userType: 3,
    userName: "ERobertson",
    firstName: "Eric",
    lastName: "Robertson",
    emailAddress: "erobertson333@gmail.com",
}

export default Login;
