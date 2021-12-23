import React from 'react'
import Admin from './admin/Admin'
import './AdminandTravel.css'
import Travel from './travel/Travel'

const AdminandTravel = () => {
    return (
        <div className="adminandtravel">
            
            <Admin />

            <Travel />
        </div>
    )
}

export default AdminandTravel
