import React from 'react';
import { Video } from '../components/Video';
import homepageVideo from "../assets/videos/Tammy_Ronstadt_Ambassador_ALT.mp4";


export const AmbassadorHomepageCardV2 = (props) => {

	return (
		<div className="career-ambassador-card-v2 container">
			<div className="content">
                <h4>{props.industry} Ambassador: {props.firstname}</h4>
				<Video video={homepageVideo} type='video/mp4'/>
				<p>{props.description}</p>
			</div>
		</div>
	)
};

export default AmbassadorHomepageCardV2;
