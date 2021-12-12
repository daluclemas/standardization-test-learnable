import React from 'react';
import notification from '../../assets/std/notification.svg';
import Avatar from '../../assets/std/Avatar.svg';
import './RightNav.css';

const RightNav = () => {
    return (
      <div className="rightNavContainer">

				<img src={notification} alt="notification" className="notificationImg" />
				<img src={Avatar} alt="avatar" className="Avatar" />
  
      </div>
    )
}

export default RightNav
