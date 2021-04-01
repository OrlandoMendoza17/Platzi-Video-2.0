import React from 'react';
import Header from '@components/widgets/Header';
import Footer from '@components/widgets/Footer';

const Layout = ({color, children, justify}) =>(
  <div className={`Layout ${color}`}>
    <Header/>
    <main className={`${justify || ''}`}>
      { children }
    </main>
    <Footer/>
  </div>
)

export default Layout; 