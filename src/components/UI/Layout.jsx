import React from 'react';
import Header from '@components/widgets/Header';
import Footer from '@components/widgets/Footer';
import PropTypes from 'prop-types';

const Layout = ({page, color, children, justify}) =>(
  <div className={`Layout ${color}`}>
    <Header page={page}/>
    <main className={`${justify || ''}`}>
      { children }
    </main>
    <Footer/>
  </div>
)

Layout.propTypes = {
  color: PropTypes.string,
  justify: PropTypes.string,
  page: PropTypes.oneOf(['Login']),
}

export default Layout; 