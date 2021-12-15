import React from 'react';
import Footer from './footer/Footer';
import Logistics from './logistics/Logistics';
import './LogisticsAndFooter.css';

const LogisticsAndFooter = () => {
    return (
        <div className="logisticsandfootercontainer">

            <Logistics />

            <Footer />
            
        </div>
    )
}

export default LogisticsAndFooter
