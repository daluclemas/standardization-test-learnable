import React from 'react'
import './Travel.css'
import directreportone from '../../assets/std/directreportone.svg'

const Travel = () => {
    return (
        <div className='travelcontainer'>
            <div className="travelimagecontainer">
                <img src={directreportone} alt="travel image" />
            </div>
        </div>
    )
}

export default Travel
