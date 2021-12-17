import React from 'react';
import tenece from '../../../assets/std/tenece.svg';
import unn from '../../../assets/std/unn.svg'
import genesys from '../../../assets/std/genesys.svg'
import estate from '../../../assets/std/estate.svg'
import './Companies.css'

const Companies = () => {
    return (
        <div className='companiesImage'>

            <div className="companiesImageContainer">
                <img src={unn} alt="tenece" />
            </div>

            <div className="companiesImageContainer">
                <img src={tenece} alt="unn" />
            </div>

            <div className="companiesImageContainer">

                <img src={estate} alt="genesys" />

            </div>


            <div className="companiesImageContainer">
                <img src={genesys} alt="estate" />
            </div>

            
            
            
            
        </div>
    )
}

export default Companies
