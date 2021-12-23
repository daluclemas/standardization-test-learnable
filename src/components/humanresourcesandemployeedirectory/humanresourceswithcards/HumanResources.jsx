import React from 'react';
import './HumanResources.css'
import Group6 from '../../assets/std/Group6.svg';
import Group7 from '../../assets/std/Group7.svg';
import Group77 from '../../assets/std/Group77.svg';

const HumanResources = () => {
    return (
        <div className="humanresourcecontainer">

          <div className="humanresourcetextcontainer">
            <h1>human resources</h1>
						<p>
							onboard new employees, manage the employee lifecycle and measure employee performance.
						</p>
					</div>

          <div className="humanresourcecards">
						<div className="cards">
							
							<div className="cardimage">
								<img src={Group6} alt="cardimage" />
							</div>

							<div className="cardtexts">
								<h3>
									employee management
								</h3>

								<p className="cardparagraph">
									from <span>
										hiring &amp; onboarding
									</span> to <span>retiring, </span>
									the <span>resource edge employee management</span> module eliminates all the complexities &amp; paperwork involved in managing your team.
								</p>
							</div>

						</div>

						{/* card two */}

						<div className="cards">
							
							<div className="cardimage">
								<img src={Group7} alt="cardimage" />
							</div>

							<div className="cardtexts">
								<h3>
									performance management
								</h3>

								<p className="cardparagraph">
									manage and track employee performance with our easy-to-use tools for goal setting, performance agreements and performance reviews.
								</p>
							</div>

						</div>

						{/* card three */}
						<div className="cards">
							
							<div className="cardimage">
								<img src={Group77} alt="cardimage" />
							</div>

							<div className="cardtexts">
								<h3>
									paid time off
								</h3>

								<p className="cardparagraph">
									employees can request for paid time off, vacations, sick leaves or educational leaves and get approvals all within <span>resource edge. </span>

									<span className="span">hr</span> managers can equally ensure compliance;
								</p>
							</div>

						</div>

					</div>
            
        </div>
    )
}

export default HumanResources
