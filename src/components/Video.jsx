import React from 'react';

export const Video = (props) => {
  return (
    <div className='video-comp'>
        <video controls>
            <source src={props.video} type={props.type}/>
        </video>
    </div>
)};

export default Video;