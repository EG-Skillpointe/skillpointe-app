import React from 'react';

export const Video = (props) => {
  return (
    <div className='video-comp'>
        <video controls preload="metadata">
            <source src={`${props.video}#t=0.5`} type={props.type}/>
        </video>
    </div>
)};

export default Video;