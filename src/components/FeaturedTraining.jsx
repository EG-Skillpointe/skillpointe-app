import React from 'react';
import Button from "react-bootstrap/Button";


export const FeaturedTraining = (props) => {
  	return (
		<div className='featured-jobs'>
			<div>
				<div className='img-container'>
					<img src={props.comp1} alt=''/>
				</div>

				{/* <label>2 Days Ago</label> */}

				<h6>Georgia Piedmont</h6>

				<label>Dekalb, GA</label>

				<Button className="card-button" style={{ fontSize:"12px", height:"20px", textAlign:"center", lineHeight:"6px" }}>Learn More</Button>
			</div>

			<div>
				<div className='img-container'>
					<img src={props.comp2} alt=''/>
				</div>

				{/* <label></label> */}

				<h6>TCSG Atlanta</h6>

				<label>Atlanta, GA</label>

				<Button className="card-button" style={{ fontSize:"12px", height:"20px", textAlign:"center", lineHeight:"6px" }}>Learn More</Button>
			</div>
        </div>
  	)
};

export default FeaturedTraining;
