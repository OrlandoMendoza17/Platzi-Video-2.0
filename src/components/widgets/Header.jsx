import React, { useState } from 'react';
import brandLogo from '../../assets/images/logo-platzi-video-BW2.png';
import userImage from '../../assets/images/user-icon.png';
import LoginButton from '../../components/UI/LoginButton';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = (props) => {
  const { page } = props
  const [isLogged, setIsLogged] = useState(false)

  return (
    <div className="Header">
      <Link className="Header__brand-logo" to="/">
        <img className="Header__brand-logo--image" src={brandLogo} alt="brand-logo" />
      </Link>

      {
        isLogged ?
          <div className="Header__user-settings">
            <img className="Header__user-settings--image" src={userImage} alt="user-image" />
            <span className="Header__user-settings--name">Perfil</span>
            <ul className="Header__user-settings--options">
              <li>Cuenta</li>
              <li>Cerrar Sesión</li>
            </ul>
          </div>
          :
          <div className="Header__start-session">
            <LoginButton page={page} />
          </div>
      }
    </div>
  )
}

Header.propTypes = {
  page: PropTypes.oneOf(['Login'])
}

export default Header;
