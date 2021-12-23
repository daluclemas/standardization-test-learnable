import React from 'react';
import './Admin.css'
import plane from '../../assets/std/plane.svg'
import Group19838 from '../../assets/std/Group19838.svg'

const Admin = () => {
    return (
        <div className="admin">
					
            <div className="admintextcontainer">
              <h1>admin &amp; logistics</h1>
              <p>manage and track company assets as well as logistics for traveling employees.</p>
            </div>

            <div className="travelandasset">
							{/* travel and logistics */}

              <div className="travelandassetsection">
                <div className="photoContainer">
									<img src={plane} alt="photo" />
								</div>

								<div className="textsection">
									<h3>travel &amp; logistics</h3>
									<p>
										make travel requests, get approvals, and have access to travel information. 
									</p>
								</div>

							</div>

							{/* asset management */}

							<div className="travelandassetsection">
                <div className="photoContainer">
									<img src={Group19838} alt="photo" />
								</div>

								<div className="textsection">
									<h3>asset management</h3>
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
