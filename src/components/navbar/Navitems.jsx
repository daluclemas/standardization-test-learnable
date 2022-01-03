import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import React, {useState} from 'react'
import About from './routepaths/About';
import Features from './routepaths/Features';
import Companyname from './routepaths/LandingPage';
import Signin from '../signup-login/Signin';
import Login from '../signup-login/Login'
import re from '../assets/std/re.svg';
import './Navbaritems.css'
import LandingPage from './routepaths/LandingPage';
import ErrorPage from './routepaths/ErrorPage';
import Dashboard from '../signup-login/Dashboard';
import { AuthProvider } from '../signup-login/Mycontext';


const Navitems = () => {

	const [navToggle, setNavToggle] = useState(false);

	const click = navToggle ? 'active': '';

	const handleClick = () =>{

		setNavToggle(!navToggle);

	}


    return (
        		<>
            	<nav>
                {/* company name */}
                <div className="companyNameandLogo">

                  <h3 className="companyName">
                    <Link to='/' style={{textDecoration:'none', color:'var(--blue-color)'}}>resource edge</Link>
                        
                	</h3>

									{/* <img src={re} alt="imageoflogo" className="displayImage" /> */}

									<Link to ='/'>

										<img src={re} alt="imageoflogo" className="displayImage" />
									</Link>

            		</div>

            		{/* hamburgericon */}
            		<div className="icon" onClick={handleClick}>
                	<div className={`hamburgerIcon ${click}`}></div>
                	<div className={`hamburgerIcon ${click}`}></div>
                	<div className={`hamburgerIcon ${click}`}></div>
            		</div>

            		{/* navtems */}
            		<div className={`listGroup  ${navToggle ? 'active':'' }`}>

                	<ul className="unorderedLists">
                    <li>
                      <Link to = '/features' style={{textDecoration:'none', color:'var(--dark-blue-color)', textTransform: 'capitalize'}}> features</Link>
                    </li>

                    <li>
                      <Link to = '/about' style={{textDecoration:'none', color:'var(--dark-blue-color)', textTransform: 'capitalize'}}> About</Link>
                    </li>
                	</ul>

                	<div className="btnContainers">

                    <div className="signUpContainer">

											<button className="signUp">
                      	<Link to ='/signup' style={{textDecoration:'none', color:'var(--dark-blue-color)'}}>sign up</Link>
                    	</button>

										</div>

                    
										<div className="signInContainer">

											<button className="signIn">
                      	<Link to ='/signin' style={{textDecoration:'none', color:'white'}}>sign in</Link>
                    	</button>

										</div>

                	</div>

            		</div>

            	</nav>

            <AuthProvider>
							<Routes>

								<Route path="/" exact element={ <LandingPage />} />
	 
								<Route path='/features'  element={<Features />} />
		
								<Route path='/about' element={	<About />}  />


	
								<Route path='/signUp' element={<Signin />}  />
		
								<Route path='/signin' element={<Login />} />

								<Route path='/dashboard' element={<Dashboard />} />

								<Route path='*' element={<ErrorPage /> } />
		
							</Routes>
							
						</AuthProvider>

        	</>
    )
}

export default Navitems
