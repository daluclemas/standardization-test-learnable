import React from 'react';
import LeftNav from './directorynav/LeftNav';
import RightNav from './directorynav/RightNav';
import './EmployeeDirectory.css'
import Search from './searchbar/Search';


const EmployeeDirectory = () => {
    return (
        <div className="employeeDirectory">

            <div className="navigationContainer">
                <LeftNav />
                <RightNav />
            </div>

            <Search />
            
        </div>
    )
}

export default EmployeeDirectory
