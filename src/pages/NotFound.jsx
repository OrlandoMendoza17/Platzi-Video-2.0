import React from 'react';
import Layout from '../components/UI/Layout';
import NotFoundSearches from '../components/UI/NoFoundSearches';

const NotFound = () =>(
  <Layout page="Login" color="gradient" justify="justify-flex">
    <NotFoundSearches>
      <h1 style={{fontWeight: 'bold'}}>404: Page Not Found! :(</h1>
    </NotFoundSearches>
  </Layout>
)

export default NotFound;