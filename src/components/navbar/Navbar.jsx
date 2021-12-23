import React from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import FooterRender from '../footerComponent/FooterRender';
import Navitems from './Navitems';


const Navbar = () => {
    return (
        <Router>

			<Navitems /> 

            <FooterRender />

        </Router>
    )
}

export default Navbar
