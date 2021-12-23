import React from 'react'
import './Companies.css'
import unn from '../assets/std/unn.svg'
import tenece from '../assets/std/tenece.svg'
import estate from '../assets/std/estate.svg'
import genesys from '../assets/std/genesys.svg'

const Companies = () => {
    return (
        <div className="companieslogos">
            <div className="companylogo">
                <img src={unn} alt="" />
            </div>


            <div className="companylogo">
                <img src={tenece} alt="" />
            </div>

            <div className="companylogo">
                <img src={estate} alt="" />
            </div>

            <div className="companylogo">
                <img src={genesys} alt="" />
            </div>

        </div>
    )
}

export default Companies
