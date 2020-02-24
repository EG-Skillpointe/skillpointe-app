import React, { Component } from 'react';
import dCareers from "../assets/images/d_explore.png";
import dJobs from "../assets/images/d_jobs.png";
import dTraining from "../assets/images/d_training.png";
import dPeople from "../assets/images/d_people.png";

class MobileFooter extends Component {

    redirect = (path, state) => {
        this.props.history.push({
            pathname: path,
            state: state
        });
    }

    render() {
        return (
            <div className='mobile-footer'>
                <div className='footer-items'>
                    <div className="item" onClick={() => this.redirect("/careers")}>
                        <img src={dCareers} alt="" width="24" height="24"></img>
                        <div>Explore Careers</div>
                    </div>

                    <div className="item" onClick={() => this.redirect("/jobsearch")}>
                        <img src={dJobs} alt="" width="24" height="24"></img>
                        <div>Find Jobs</div>
                    </div>

                    <div className="item" onClick={() => this.redirect("/training")}>
                        <img src={dTraining} alt="" width="24" height="24"></img>
                        <div>Find Training</div>
                    </div>

                    <div className="item" onClick={() => this.redirect("/login")}>
                        <img src={dPeople} alt="" width="24" height="24"></img>
                        <div>Find People</div>
                    </div>
                    
                </div>
            </div>
    )}
}

export default MobileFooter;