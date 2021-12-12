import React from 'react';
import './ArtworkComponent.css';
import person from '../assets/std/person.svg';

const ArtworkComponent = () => {
    return (
        <div className='artworkContainer'>

          <div className="textContainer">

            <h1 className="headerText">throw paper work into the trash where it belongs.</h1>

            <p className="headerParagraph">
              eliminate all hassle involved in managing people operations by managing it.
            </p>

          </div>

          <div className="imgContainer">

            <img src={person} alt="person-logo" />

          </div>
            
        </div>
    )
}

export default ArtworkComponent
