import React, {useState,useEffect} from 'react';
import EmployeeCards from './EmployeeCards';
import employeeData from './employeeInfo';
import './Search.css';

const Search = () => {

	const [employeeInfo, setEmployeeInfo] = useState(employeeData);

	const [values, setValues] = useState('');

	const handleClick = (e) =>{

		e.preventDefault();
	}





    return (
        <div className="searchContainer">

          <div className="greyBarTop"></div>

          <h5 className="employeeText">employees</h5>

          <form onSubmit={handleClick}>

						<div className="inputContainer">
							
							<input type="text" value={values} placeholder="search..." onChange={(e)=>setValues(e.target.value)} />

							<div className="searchicon">
								<i className="fas fa-search"></i>
							</div>
						</div>

          </form>

					<div className="fourGreyBars">
						<div className="greyBars"></div>
						<div className="greyBars"></div>
						<div className="greyBars"></div>
						<div className="greyBars"></div>
					</div>

					<div className="imagCards">
						{employeeInfo.map((items, index)=>{
							
							return (
								<EmployeeCards items={items} key={index} />
							);

						})}
					</div>

            
        </div>
    )
}

export default Search
