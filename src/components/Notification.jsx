import React from "react";
import notifBellImg from "../assets/images/bell.svg";

export const Notification = (props) => {

    return (
        <div className='notification'>
			<img src={notifBellImg} alt='alarm icon'/>
            <div className='notif-header'>{props.title}</div>
			<div className='notif-content'>{props.message}</div>
		</div>
    )
};

export default Notification;