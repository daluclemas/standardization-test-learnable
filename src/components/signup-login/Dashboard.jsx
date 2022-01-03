import React,{useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import './Dashboard.css'
import { AuthContext } from './Mycontext'


const Dashboard = () => {

    let navigate = useNavigate();

    const {logout, user} = useContext(AuthContext);

    const logOut = ()=>{
        logout();
        navigate('/signin');
    }


 
    return (
        <div className='dashboardcontainer'>
            <div className="dashboardContent">
                <h1>dashboard</h1>

                <p><span>welcome :</span> {user?.email}</p>

                <div className=" dashboardbtn btnContainer ">
                    <button className="btnlogin" onClick={logOut}>log out</button>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
