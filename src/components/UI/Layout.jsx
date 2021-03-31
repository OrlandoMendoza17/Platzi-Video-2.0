import React from 'react';
import Header from '@components/widgets/Header';
import Footer from '@components/widgets/Footer';

const Layout = (props) =>(
  <div className="Layout">
    <Header/>
    <main>
      {
        props.children
      }
    </main>
    <Footer/>
  </div>
)

export default Layout; 