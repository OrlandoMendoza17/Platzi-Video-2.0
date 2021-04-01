import React from 'react';
import Header from '@components/widgets/Header';
import Footer from '@components/widgets/Footer';

const Layout = ({color, children}) =>(
  <div className={`Layout ${color}`}>
    <Header/>
    <main>
      { children }
    </main>
    <Footer/>
  </div>
)

export default Layout; 