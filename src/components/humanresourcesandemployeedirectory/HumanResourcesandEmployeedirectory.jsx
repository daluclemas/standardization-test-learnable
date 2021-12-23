import React from 'react'
import EmployeeDirectory from './employeedirectory/EmployeeDirectory'
import HumanResources from './humanresourceswithcards/HumanResources'
import './HumanResourcesandEmployeedirectory.css'

const HumanResourcesandEmployeedirectory = () => {
    return (
        <div className='humanresourcesandemployeedirectory'>

            <HumanResources />
            <EmployeeDirectory />
            
        </div>
    )
}

export default HumanResourcesandEmployeedirectory
