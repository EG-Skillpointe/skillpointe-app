import React, { Component } from 'react';
import {AmbassadorCard, MobileFooter, TopNavbarBlue} from "../components";
import ambassadors from '../assets/mockData/ambassadors';
import industries from '../assets/mockData/industries';
import HamburgerModal from "../components/HamburgerModal";


class AmbassadorPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      bgColor: ''
    };
  }
  handleClick = () =>{
    this.setState({
      bgColor: '#f8a141'
    })
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

  render() {
    const modalOpened = this.state.showModal;

    return (
        <div className='home-page'>
          {/*conditionally rendered modal*/}
          {modalOpened ? (<HamburgerModal closeModal={this.closeModal} />) : (null)}

          {/*main contents of page*/}
          <TopNavbarBlue openModal={this.openModal} />
          <div className="flexbox-container">
            {industries.industries.map(industry => { return <button className='nav-button'
                                                                    style={{flex: '0 0 auto'}}>{industry.name}</button>})}
          </div>

          <div className="row" style={{margin:'0', paddingBottom:'20px', backgroundColor:'#ededed'}}>
            {ambassadors.ambassadors.map(ambassador => { return <div className="ambassador-card-div"> <AmbassadorCard ambassador={ambassador}/> </div>})}
          </div>

          <MobileFooter history={this.props.history}/>
        </div>
    )
  }
}

export default AmbassadorPage;
