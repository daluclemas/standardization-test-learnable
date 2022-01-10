import { BrowserRouter as Router, Link, Routes, Route, useNavigate } from 'react-router-dom';
import React, {useState, useContext, useEffect} from 'react'
import About from './routepaths/About';
import Features from './routepaths/Features';
// import Companyname from './routepaths/LandingPage';
import Signin from '../signup-login/Signin';
import Login from '../signup-login/Login'
import re from '../assets/std/re.svg';
import './Navbaritems.css'
import LandingPage from './routepaths/LandingPage';
import ErrorPage from './routepaths/ErrorPage';
import Dashboard from '../signup-login/Dashboard';
import { AuthProvider } from '../signup-login/Mycontext';
import {motion} from 'framer-motion'



const Navitems = () => {

	const [navToggle, setNavToggle] = useState(false);

	const click = navToggle ? 'active': '';

	const handleClick = () =>{

		setNavToggle(true);
		// setNavToggle(!navToggle);

	}

	const timesClick = () =>{
		setNavToggle(false)
	}

	const parentVariant = {
		visible:{
			opacity:1,
			transition:{
				when:"beforeChildren",
				staggerChildren:0.3,
				duration:1
			}
		},

		hidden:{
			opacity:0
			
		}
	}

	const kidVariant={
		visible:{
			opacity:1
		},
		
		hidden:{
			opacity:0
		}
	}


    return (
        		<>
            	<motion.nav variants={parentVariant}
								animate= "visible" 
								initial = "hidden"
							>
                {/* company name */}
                <motion.div className="companyNameandLogo" variants={kidVariant}>

                  <h3 className="companyName">
                    <Link to='/' style={{textDecoration:'none', color:'var(--blue-color)'}}>resource edge</Link>
                        
                	</h3>

									{/* <img src={re} alt="imageoflogo" className="displayImage" /> */}

									<Link to ='/'>

										<img src={re} alt="imageoflogo" className="displayImage" />
									</Link>

            		</motion.div>

            		{/* hamburgericon */}
            		<motion.div className="icon" onClick={handleClick} variants={kidVariant}>
                	<div className={`hamburgerIcon ${click}`}></div>
                	<div className={`hamburgerIcon ${click}`}></div>
                	<div className={`hamburgerIcon ${click}`}></div>
            		</motion.div>

            		{/* navtems */}
            		<motion.div className={`listGroup  ${navToggle ? 'active':'' }`} variants={parentVariant}>

									<motion.div className="timesContainer" style={{width:"100%", marginBottom:'10px', paddingRight:'50px',paddingTop:'20px'}} variants={kidVariant}>
										<i className="fas fa-times" onClick={timesClick} style={{textAlign:'right',width:"100%"}}></i>
									</motion.div>

                	<motion.ul className="unorderedLists">
                    <motion.li variants={kidVariant}>
                      <Link to = '/features' style={{textDecoration:'none', color:'var(--dark-blue-color)', textTransform: 'capitalize'}}> features</Link>
                    </motion.li>

                    <motion.li variants={kidVariant}>
                      <Link to = '/about' style={{textDecoration:'none', color:'var(--dark-blue-color)', textTransform: 'capitalize'}}> About</Link>
                    </motion.li>
                	</motion.ul>

                	<motion.div className="btnContainers">

                    <motion.div className="signUpContainer" variants={kidVariant}>

											<button className="signUp">
                      	<Link to ='/signup' style={{textDecoration:'none', color:'var(--dark-blue-color)'}}>sign up</Link>
                    	</button>

										</motion.div>

                    
										<motion.div className="signInContainer" variants={kidVariant}>

											<button className="signIn">
                      	<Link to ='/signin' style={{textDecoration:'none', color:'white'}}>sign in</Link>
                    	</button>

											

										</motion.div>

                	</motion.div>

            		</motion.div>

            	</motion.nav>

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
