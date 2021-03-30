import React from 'react';
import brandLogo from '@images/logo-platzi-video-BW2.png';
import userImage from '@images/user-icon.png';

const Header = () =>(
  <div className="Header">
    <img className="Header__brand-logo" src={brandLogo} alt="brand-logo"/>
    <div className="Header__user-settings">
      <img className="Header__user-settings--image" src={userImage} alt="user-image"/>
      <span className="Header__user-settings--name">Perfil</span>
      <ul className="Header__user-settings--options">
        <li>Cuenta</li>
        <li>Cerrar Sesión</li>
      </ul>
    </div>
  </div>
)

export default Header;
