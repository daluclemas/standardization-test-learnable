import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from '@firebase/auth';
import {auth} from './firebase/Firebase';
// import Dashboard from './Dashboard';

import './Login.css'

const Login = () => {

    let navigate = useNavigate();

    const [email,setEmail] = useState('');

    const [passWord, setPassWord] = useState('');

    
    const [loading, setLoading] = useState(false);
    
    const login = async ()=>{

        setLoading(true);

        try{
            const user = signInWithEmailAndPassword(auth, email,passWord)
        }catch(err){
            console.log(err.message)
        }

        setLoading(false);

        navigate('/dashboard');
    }

    return (
        <div className="logincontainer">

            <h1>log in</h1>

           <form onSubmit={(e)=>e.preventDefault()}>

                <div className="inputContainer">
                    <label htmlFor="emaillogin">e-mail</label>

                    <div className="input">
                      <input type="email" onChange={(e)=>setEmail(e.target.value)} placeholder="enter email..." />  
                    </div>
                   
                </div>

               <div className="inputContainer">
                   <label htmlFor="passwordlogin">password</label>

                   <div className="input">
                        <input type="password" onChange={(e)=>setPassWord(e.target.value)} placeholder='enter password...' />
                   </div>
                  
                </div>

                <div className="btnContainer">
                    <button className="btnlogin" onClick={login}  disabled={loading}>log in</button>
                </div>

           </form>

           <p>need an account ? 
               <Link to ='/signup' style={{color:'var(--blue-color)', textTransform:'capitalize', textDecoration:'none'}}> sign up</Link>
           </p>

        </div>
    )
}

export default Login
