import React, {useState, useContext, useRef} from 'react'
import { Link, useNavigate } from 'react-router-dom'

// import Dashboard from './Dashboard';

import './Login.css'
import { AuthContext } from './Mycontext'

const Login = () => {

    const {login,user} = useContext(AuthContext);

    let navigate = useNavigate();

    const [email,setEmail] = useState('');

    const [passWord, setPassWord] = useState('');

    const emailRef = useRef();

    const passwordRef = useRef();

    const [error, setError] = useState('');

    const [loading, setLoading] = useState(false);



    const logIn = (e) =>{
        e.preventDefault();

        

        if(emailRef.current.value === '' || passwordRef.current.value === ''){

            // setLoading(true);
            return  setError('check for inputs');
            
        }


        try{
            setError('')
            login(emailRef.current.value,passwordRef.current.value);
            navigate('/dashboard');
        }catch{
            setError('user not found');
        }

       setLoading(true);

    }
    
  
    return (
        <div className="logincontainer">

            <h1>log in</h1>

           <form onSubmit={logIn}>

               {error && <p style={{border:'2px solid red',
                    background:'rgba(255,0,0,0.3)',
                    borderRadius:'5px',
                    padding:'10px',
                    width:'100%',
                    margin:'20px auto'
                }}>{error}</p>}

                <div className="inputContainer">
                    <label htmlFor="emaillogin">e-mail</label>

                    <div className="input">
                      <input type="email" onChange={(e)=>setEmail(e.target.value)} placeholder="enter email..."ref={emailRef} />  
                    </div>
                   
                </div>

               <div className="inputContainer">
                   <label htmlFor="passwordlogin">password</label>

                   <div className="input">
                        <input type="password" onChange={(e)=>setPassWord(e.target.value)} placeholder='enter password...' ref={passwordRef}  />
                   </div>
                  
                </div>

                <div className="btnContainer">
                    <button className="btnlogin"  disabled={loading }>log in</button>
                </div>

                <p style={{marginTop:'20px'}}>forgot password?  
                    <Link to='/reset' style={{color:'var(--blue-color',textTransform:'capitalize', textDecoration:'none'}}> reset.</Link>
                </p>

           </form>

           <p>need an account ? 
               <Link to ='/signup' style={{color:'var(--blue-color)', textTransform:'capitalize', textDecoration:'none'}}> sign up</Link>
           </p>

        </div>
    )
}

export default Login
