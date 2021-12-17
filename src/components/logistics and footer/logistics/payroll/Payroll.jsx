import React from 'react'
import './Payroll.css'
import payroll from '../../../assets/std/payroll.svg'

const Payroll = () => {
    return (
        <div className="payRollimageContainer">

            <div className="photoContainer">
                <img src={payroll} alt="imagecontainer" />
            </div>
            
        </div>
    )
}

export default Payroll
