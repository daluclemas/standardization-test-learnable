import React from 'react';
import './Finance.css';
import clipboardone from '../../../assets/std/clipboardone.svg'
import wallet from '../../../assets/std/wallet.svg'

const Finance = () => {
    return (
        <div className='financeContainer'>

            <div className="finance">
                <h1>finance</h1>

                <p>
                    generate invoice, track expenditure, and manage complex payrolls for multiple teams and companies.
                </p>
            </div>

            <div className="voucherandpayroll">

                <div className="card">
                    <div className="cardphoto">
                        <img src={clipboardone} alt="voucher logo" />
                    </div>

                    <div className="cardText">
                        <h4><span>re</span> vouchers</h4>

                        <p>
                            track and manage expenditure for multiple teams across your organization using <span>resource edge vouchers.</span>
                        </p>
                    </div>
                </div>

                <div className="card">

                    <div className="cardphoto">
                        <img src={wallet} alt="payrollimage" />
                    </div>

                    <div className="cardText">
                        <h4>payroll</h4>

                        <p>our easy to use systems takes away the pain of managing complex payrolls for organizations of all sizes.</p>
                    </div>
                </div>

            </div>
            
        </div>
    )
}

export default Finance
