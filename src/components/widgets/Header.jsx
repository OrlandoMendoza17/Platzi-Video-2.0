import React from 'react';
import brandLogo from '../../assets/images/logo-platzi-video-BW2.png';
import userImage from '../../assets/images/user-icon.png';

const Header = () =>(
  <div className="Header">
    <img className="Header__brand-logo" src={brandLogo} alt="brand-logo"/>
    <div className="Header__user-settings">
      <img className="Header__user-settings--image" src={userImage} alt="brand-logo"/>
      <span className="Header__user-settings--name">Usuario</span>
    </div>
  </div>
)

export default Header;
