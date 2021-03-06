import React from 'react';
import Button from "react-bootstrap/Button";


export const FeaturedJobs = (props) => {
  	return (
		<div className='featured-jobs'>
			<div>
				<div className='img-container'>
					<img src={props.comp1} alt=''/>
				</div>

				<label>2 Days Ago</label>

				<h6>Ground Support</h6>

				<label>Multiple Locations</label>

				<Button className="card-button" style={{ fontSize:"12px", height:"20px", textAlign:"center", lineHeight:"6px" }}>Learn More</Button>
			</div>

			<div>
				<div className='img-container'>
					<img src={props.comp2} alt=''/>
				</div>

				<label>4 Days Ago</label>

				<h6>Repair Tool Tech</h6>

				<label>Atlanta, GA</label>

				<Button className="card-button" style={{ fontSize:"12px", height:"20px", textAlign:"center", lineHeight:"6px" }}>Learn More</Button>
			</div>
        </div>
  	)
};

export default FeaturedJobs;
