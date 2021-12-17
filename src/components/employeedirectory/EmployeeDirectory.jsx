import React from 'react';

import './EmployeeDirectory.css'

import employeedirectory from '../assets/std/employeedirectory.svg'


const EmployeeDirectory = () => {
    return (
        <div className="employeeDirectory">

            <div className="photoContainer">

                <img src={employeedirectory} alt="employeedirectory" />
            </div>
            
        </div>
    )
}

export default EmployeeDirectory
