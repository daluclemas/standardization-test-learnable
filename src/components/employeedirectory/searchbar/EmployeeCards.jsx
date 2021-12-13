import React from 'react'

const EmployeeCards = ({items}) => {
    return (
		<div className="staffInfoDiv" >

			<div className="avatarContainer">
				<img src={items.avatar} alt="img" />
			</div>

			<h3>{items.name}</h3>

			<div></div>
			
		</div>
    )
}

export default EmployeeCards
