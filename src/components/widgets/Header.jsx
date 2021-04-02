import React, {Component} from 'react';
import brandLogo from '@images/logo-platzi-video-BW2.png';
import userImage from '@images/user-icon.png';
import LoginButton from '@components/UI/LoginButton';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
class Header extends Component{
  
  state = {
    isLogged: false,
  }
  
  render(){
    const { isLogged } = this.state
    const { page } = this.props
    return(
      <div className="Header">
        <Link className="Header__brand-logo" to="/">
          <img className="Header__brand-logo--image" src={brandLogo} alt="brand-logo"/>
        </Link>
        
        {
          isLogged ?          
            <div className="Header__user-settings">
              <img className="Header__user-settings--image" src={userImage} alt="user-image"/>
              <span className="Header__user-settings--name">Perfil</span>
              <ul className="Header__user-settings--options">
                <li>Cuenta</li>
                <li>Cerrar Sesión</li>
              </ul>
            </div>
          :
            <div className="Header__start-session">
              <LoginButton page={page}/>
            </div>
        }
      </div>
    )
  }
}

Header.propTypes = {
  page: PropTypes.oneOf(['Login'])
}

export default Header;
