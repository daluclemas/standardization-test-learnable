import React from 'react';
import Group77 from '../../../assets/std/Group77.svg';
import './PaidTimeOff.css';

const PaidTimeOff = () => {
    return (
        <div className="cardContent gridSpan">

            
          <div className="cardImage">

          	<img src={Group77} alt="image" />

          </div>

					<div className="cardBody">
						<h3 className="cardHeading">paid time-off</h3>

						<p className="cardParagraph">
							Employees can request for paid time off, vacations, sick leaves or educational leaves and get approvals all within <span className="cardSpan">resource edge.</span> <span className="hr">hr</span> managers can equally ensure compliance.
						</p>

					</div>
            
        </div>
    )
}

export default PaidTimeOff
