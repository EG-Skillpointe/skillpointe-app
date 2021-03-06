import React, { Component } from 'react';
import { TopNavbarWhite, Footer, Search, PeopleCard, PeopleConnectCard} from "../components";
import { MobileFooter } from "../components";
import HamburgerModal from "../components/HamburgerModal";

class PeopleSearch extends Component {

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

    doSearch = (searchText) => {
        // let result = school.schools.Filter(school => (school.name.toLowerCase().includes(searchText.toLowerCase())));
        console.log('searchText', searchText);
        // if(result){
        //     this.setState({searchResults: result});
        // }
    };

    render() {
        let cards = [];
        cards.push(<PeopleCard name="Jane Willis" title="Health Administrator" image="jane.jpeg"/>)
        cards.push(<PeopleCard name="Kelly Shaw" title="Physical Therapist" image="kelly.jpg"/>)
        
        let connectCards = [
            <PeopleConnectCard name="Jeffery Hart" title="Electrician" image='Viraj.jpg'/>,
            <PeopleConnectCard name="Ashely Rossdale" title="Nurse" image="Ashely.jpg"/>
        ]

        const modalOpened = this.state.showModal;

        return (
            <div className="find-people">
                {/*conditionally rendered modal*/}
                {modalOpened ? (<HamburgerModal pageType="job" history={this.props.history} closeModal={this.closeModal} />) : (null)}

                {/*main contents of page*/}

                <TopNavbarWhite history={this.props.history} openModal={this.openModal} closeModal={this.closeModal} />
                <Search search={this.doSearch} headerTitle={"Find People"} location={"Atlanta, GA"} placeholder={'Expand your network...'}/>
                    <div style={{marginTop:"8px", backgroundColor: "#DADADA", paddingBottom:"5px", borderBottom:"1px solid #c1c1c1" }}>
                        <div style={{display:"flex", margin:"0 5%", justifyContent: "space-between", height: "52px"}}>
                            <div className="people-container-invitation-label">Invitations</div>
                            <div className="people-container-see-all-label">See All 3</div>
                        </div>
                        {cards}
                    </div>
                    <div style={{backgroundColor: "#DADADA", paddingBottom:"30px"}}>
                        <div style={{display:"flex", margin:"0 5%", justifyContent: "space-between", padding: "10px 0"}}>
                            <div className="people-container-invitation-label">People you may know</div>
                        </div>
                        {connectCards}
                    </div>
                <MobileFooter history={this.props.history}/>
                <Footer mobileFooterPresent/>
            </div>
        )
    }
}

export default PeopleSearch;
