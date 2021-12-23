import React from 'react'
import clipboardone from '../../assets/std/clipboardone.svg';
import wallet from '../../assets/std/wallet.svg'

const Finance = () => {
    return (
			<div className="admin">
					
			<div className="admintextcontainer">
				<h1>finance</h1>
				<p>generate invoices, track expenditure, and manage complex payrolls for multiple teams and companies .</p>
			</div>

			<div className="travelandasset">
			

				<div className="travelandassetsection">
					<div className="photoContainer">
						<img src={clipboardone} alt="photo" />
					</div>

					<div className="textsection">
						<h3><span style={{textTransform:'uppercase'}}>re</span> vouchers</h3>
						<p>
						track and manage expenditure for multiple teams across organization using <span style={{textTransform:'capitalize'}}>resource edge vouchers</span>
						</p>
					</div>

				</div>

				

				<div className="travelandassetsection">
					<div className="photoContainer">
						<img src={wallet} alt="photo" />
					</div>

					<div className="textsection">
						<h3>payroll</h3>
						<p>
							our easy to use systems takes away the pain of managing complex payrolls for organisations of all sizes.
						</p>
					</div>
					
				</div>

			</div>
			
	</div>
    )
}

export default Finance
