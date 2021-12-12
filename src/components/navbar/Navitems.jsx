import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import React, {useState} from 'react'
import About from './routepaths/About';
import Features from './routepaths/Features';
import Companyname from './routepaths/Companyname';
import Signin from '../signup-login/Signin';
import re from '../assets/std/re.svg';
import './Navbaritems.css'


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

									<img src={re} alt="imageoflogo" className="displayImage" />

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

            <Routes>

              <Route path="/" exact element={ <Companyname />} component={Companyname} />
                 
							<Route path='/features' component={Features} element={<Features />} />
									
							<Route path='/about' element={	<About />} component={About} />
								
							<Route path='/signUp' element={<Signin />} component={Signin} />
									
							<Route path='/signin' element={<Signin />} component={Signin} />
									
            </Routes>

        	</>
    )
}

export default Navitems
