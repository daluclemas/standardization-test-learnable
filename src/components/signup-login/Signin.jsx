import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import './Signin.css'
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut } from '@firebase/auth';
import {auth} from './firebase/Firebase'

const Signin = () => {
  const [email,setEmail] = useState('');

  const [passWord, setPassWord] = useState('');

  const [confirmPassword, setConfirmPassword] = useState('');

  const [user, setUser] = useState('');

  const [loading, setLoading] = useState(false);



  const register = async () => {

    setLoading(true);

    
    try{
      const user = createUserWithEmailAndPassword(auth,email,passWord);
    
    }catch(err){
      alert(err.message, err.code)
    }

    setLoading(false);
  }

  const logout = async ()=>{

    await signOut(auth)


  }

  onAuthStateChanged(auth,(currentuser)=>{

    setUser(currentuser);
  });

  
    return (
        <div className="signupcontainer">

          <h1>sign up</h1>

            <form onSubmit={(e)=>e.preventDefault()}>
                <div className="inputContainer">
                  <label htmlFor="email"> e-mail</label>

                  <div className="input">
                    <input type="email" onChange={(e)=>setEmail(e.target.value)} placeholder='enter e-mail...' />
                  </div>
                  
                </div>

                <div className="inputContainer">
                  <label htmlFor="password">password</label>

                  <div className="input">
                    <input type="password" onChange={(e)=>setPassWord(e.target.value)} placeholder="enter password..." />
                  </div>
                  
								</div>

                <div className="inputContainer">
                  <label htmlFor="confirmpassword">confirm password</label>

                  <div className="input">
                    <input type="password" onChange={(e)=>setConfirmPassword(e.target.value)} placeholder="confirm password..."  />
                  </div>
									
								</div>

								<div className="btnContainer">
									<button className="btnlogin" onClick={()=>register()} disabled={loading || user != null}>sign up</button>
								</div>

                <div className="btnContainer">
                  <button className="btnlogin" onClick={logout}>log out</button>
                </div>
            </form>

            <p>already have an account? <Link to='/signin' style={{color:'var(--blue-color)', textTransform:'capitalize', textDecoration:'none'}}>log in</Link></p>

            <p>current user:
              {user?.email}
            </p>
        </div>
    )
}

export default Signin
