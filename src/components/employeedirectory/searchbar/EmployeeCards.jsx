import React from 'react'

const EmployeeCards = ({items}) => {
    return (
		<div className="staffInfoDiv" >

			<div className="avatarContainer">
				<img src={items.avatar} alt="img" />
			</div>

			<h5>{items.name}</h5>

			<div className="cardsBar"></div>
			
		</div>
    )
}

export default EmployeeCards
