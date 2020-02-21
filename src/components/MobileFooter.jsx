import React, { Component } from 'react';

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
                    <div onClick={() => this.redirect("/training")}>
                        Explore Careers
                    </div>
                    <div onClick={() => this.redirect("/jobsearch", {})}>
                        Find a Job
                    </div>
                    <div onClick={() => this.redirect("/login", {})}>
                        Find Training
                    </div>
                </div>
            </div>
    )}
}

export default MobileFooter;