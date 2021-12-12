import React from 'react';
import './HumanResources.css';
import Employeemanagement from './humanresourcescards/employeemanagement/Employeemanagement';
import PaidTimeOff from './humanresourcescards/paidtimeoff/PaidTimeOff';
import PerformanceManagement from './humanresourcescards/performancemanagement/PerformanceManagement';


const HumanResources = () => {
    return (
        <div  className="humanResources ">

            <div className="humanresourcetext">
                <h1>human resources</h1>

                <p>onboard new employees, manage the employee lifecycle and measure employee performance.</p>
            </div>

            <div className="cardsContainer">

                <Employeemanagement />

                <PerformanceManagement />

                <PaidTimeOff />

            </div>
            
        </div>
    )
}

export default HumanResources
