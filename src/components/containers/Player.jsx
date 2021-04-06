import React from 'react';
import Layout from '@components/UI/Layout';
import Button from '../widgets/Button';

const Player = () => {
  return(
    <Layout>
      <div className="Player">
        <video className="Player__video" autoPlay controls>
          <source src=""/>
        </video>
        <div className="Player__back">
          <Button type="bold">
            Regresar
          </Button>
        </div>
      </div>
    </Layout>    
  )
}

export default Player;