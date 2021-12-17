import React from 'react'

import plane from '../../../assets/std/plane.svg';

import Group19838 from '../../../assets/std/Group19838.svg'

import './Admin.css';

const Admin = () => {
    return (
        <div className="adminandlogistics">

            <div className="adminContain">

               <h1>admin & logistics</h1> 

               <p>manage and track company assets as well as logistics for traveling employees</p>
            </div>

            <div className="logisticAndTravel">

                <div className="travelAndLogistics">

                   <div className="logoImgContainer">
                       <img src={plane} alt="logo" />
                   </div>

                   <div className="tlTextContainer">
                       <h4>travel & logistics</h4>

                       <p>make travel requests, get approvals, and have access to travel information.</p>
                   </div>

                </div> 


                <div className="travelAndLogistics">

                    <div className="logoImgContainer">
                        <img src={Group19838} alt="logo" />
                    </div>

                    <div className="tlTextContainer">
                        <h4>asset management</h4>

                        <p>
                           manage the acquisition, assignment, and disposition of assets seamlessly.

                        </p>
                    </div>

                </div> 


            </div>

            
        </div>
    )
}

export default Admin
