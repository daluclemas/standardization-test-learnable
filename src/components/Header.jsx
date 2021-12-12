import React from 'react';
import Navbar from './navbar/Navbar';
import ArtworkComponent from './artWorkComponent/ArtworkComponent';

const Header = () => {
    return (

      <div className="container">

				<div className="header">

					<Navbar />

					<ArtworkComponent />


				</div>

      </div>
      
    )
}

export default Header
