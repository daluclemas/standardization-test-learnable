import React from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import Navitems from './Navitems';


const Navbar = () => {
    return (
        <Router>

			<Navitems /> 

        </Router>
    )
}

export default Navbar
