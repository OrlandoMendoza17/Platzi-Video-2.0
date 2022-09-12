import React from 'react';
import Button from '../../components/widgets/Button';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const LoginButton = ({page}) =>(
  <>
    {
      (page !== 'Login') &&
      <Link to="/Login">
        <Button type="bold big" >
          Iniciar Sesión
        </Button>
      </Link>
    }
  </>
)

LoginButton.propTypes = {
  page: PropTypes.oneOf(['Login'])
}

export default LoginButton;