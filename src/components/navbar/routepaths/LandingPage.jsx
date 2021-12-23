import React from 'react';

import LandingPageComponents from './landingPageComponents/LandingPageComponents';

import HumanResourcesandEmployeedirectory from '../../humanresourcesandemployeedirectory/HumanResourcesandEmployeedirectory'
import AdminandTravel from '../../adminandtravel/AdminandTravel';
import FinanceandPayroll from '../../financeandpayroll/FinanceandPayroll';
import Companies from '../../companiesimages/Companies';


const LandingPage = () => {
    return (
        <div style={{
            border: '1px hidden grey',
            width: '100%'
        }}>

            <LandingPageComponents />

           <HumanResourcesandEmployeedirectory />

           <AdminandTravel />

           <FinanceandPayroll />

           <Companies />
            

        </div>
    )
}

export default LandingPage

