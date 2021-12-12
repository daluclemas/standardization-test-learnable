import React from 'react';
import re from '../../assets/std/re.svg';
import './LeftNav.css';

const LeftNav = () => {
    return (
        <div className="leftNavContainer">

            <div className="barIcon">
                <div className="barIcons"></div>
                <div className="barIcons"></div>
                <div className="barIcons"></div>
            </div>

            <div className="imgLogoContainer">

                <img src={re} alt="logo" />

            </div>

            <div className="leftNavText">
                <h5>employee directory</h5>
            </div>
        </div>
    )
}

export default LeftNav
