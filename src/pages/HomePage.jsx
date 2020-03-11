import React, { Component } from 'react';
import { MobileFooter, TopNavbarBlue, Footer, RegularHomepage, PersonalizedHomepage } from "../components";
import HamburgerModal from "../components/HamburgerModal";


class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showModal: false
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

    render() {
        const modalOpened = this.state.showModal;
        var user = JSON.parse(localStorage.getItem('user'));

        const homepage = (user && user != null) ? <PersonalizedHomepage/> : <RegularHomepage history={this.props.history}/>;

        return (
            <div className='home-page'>
                {/*conditionally rendered modal*/}
                {modalOpened ? (<HamburgerModal pageType="home" history={this.props.history} closeModal={this.closeModal} />) : (null)}

                {/*main contents of page*/}
                <TopNavbarBlue history={this.props.history} openModal={this.openModal} closeModal={this.closeModal} absolute transparent/>
                
                { homepage }
                
                <MobileFooter history={this.props.history}/>
                <Footer mobileFooterPresent/>
            </div>
        )
    }
}

export default HomePage;
