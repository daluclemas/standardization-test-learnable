import React, { useState, useRef, useContext } from 'react'
import {Link, useNavigate } from 'react-router-dom'
import { AuthContext } from './Mycontext'
import './Signin.css'


const Signin = () => {

  const {register,user} = useContext(AuthContext);

  let navigate = useNavigate();

  const emailRef = useRef();

  const passWordRef = useRef();

  const confirmPasswordRef = useRef();

  const [email, setEmail] = useState('');

  const [ passWord, setPassWord] = useState('');

  const [confirmPassword, setConfirmPassword] = useState('');

  const [error, setError] = useState('');

  const [loading, setLoading] = useState(false);

  const signup = (e)=>{

    e.preventDefault();

    if(passWordRef.current.value !==  confirmPasswordRef.current.value){

      return setError('check that your passwords match');


    }
    
    
    try{
 
      register(emailRef.current.value,passWordRef.current.value);

      navigate('/dashboard');
      
    }catch{
      setError('user not found');
    }

    setLoading(true);

  
  }

  
    return (
        <div className="signupcontainer">

          <h1>sign up</h1>

            <form onSubmit={signup}>

            {error && <p style={{border:'2px solid red',
                    background:'rgba(255,0,0,0.3)',
                    borderRadius:'5px',
                    padding:'10px',
                    width:'100%',
                    margin:'20px auto'
                }}>{error}</p>}


                <div className="inputContainer">
                  <label htmlFor="email"> e-mail</label>

                  <div className="input">
                    <input type="email" onChange={(e)=>setEmail(e.target.value)} placeholder='enter e-mail...' ref={emailRef} />
                  </div>
                  
                </div>

                <div className="inputContainer">
                  <label htmlFor="password">password</label>

                  <div className="input">
                    <input type="password" onChange={(e)=>setPassWord(e.target.value)} placeholder="enter password..." ref={passWordRef} />
                  </div>
                  
								</div>

                <div className="inputContainer">
                  <label htmlFor="confirmpassword">confirm password</label>

                  <div className="input">
                    <input type="password" onChange={(e)=>setConfirmPassword(e.target.value)} placeholder="confirm password..." ref={confirmPasswordRef} />
                  </div>
									
								</div>

								<div className="btnContainer">
									{/* <button className="btnlogin" onClick={()=>register()} disabled={loading || user != null}>sign up</button> */}

                  <button className="btnlogin"  disabled={loading}>sign up</button>
								</div>

                
            </form>

            <p>already have an account? <Link to='/signin' style={{color:'var(--blue-color)', textTransform:'capitalize', textDecoration:'none'}}>log in</Link></p>

        
        </div>
    )
}

export default Signin
