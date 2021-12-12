import React from 'react';
import Group6 from '../../../assets/std/Group6.svg';
import './Employeemanagement.css'

const Employeemanagement = () => {
    return (
        <div className="cardContent">

            <div className="cardImage">

                <img src={Group6} alt="" />

            </div>

            <div className="cardBody">
                <h3 className="cardHeading textCapitalize">employee management</h3>
                
                <p className="cardParagraph">from hiring & Onboarding to Retiring, the <span className="cardSpan">resource edge employee management </span> module eliminates all the complexities & paperwork involved in managing your team. </p>

            </div>
            
        </div>
    )
}

export default Employeemanagement
