import React from 'react'
import Admin from './adminandlogistics/Admin'
import Companies from './companyimages/Companies'
import Finance from './finance/Finance'
import './Logistics.css'
import Payroll from './payroll/Payroll'
import Travel from './travelandlogi/Travel'

const Logistics = () => {
    return (
        <div className="logisticContainer">

            <Admin />

            <Travel />

            <Finance />

            <Payroll />
            
            <Companies />
        </div>
    )
}

export default Logistics
