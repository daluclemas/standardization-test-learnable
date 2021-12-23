import React from 'react';
import employeedirectory from '../../assets/std/employeedirectory.svg';
import './EmployeeDirectory.css';

const EmployeeDirectory = () => {
    return (
        <div className="employeedirectoryContainer">
            <div className="imgContainer">
                <img src={employeedirectory} alt="employeedirectory" />
            </div>
            
        </div>
    )
}

export default EmployeeDirectory
