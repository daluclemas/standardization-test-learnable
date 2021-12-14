import React, {useState,useEffect} from 'react';
import EmployeeCards from './EmployeeCards';
import employeeData from './employeeInfo';
import './Search.css';

const Search = () => {

	const [employeeInfo, setEmployeeInfo] = useState([]);

	const [values, setValues] = useState('');

	const [filtered, setFiltered] = useState([]);

	useEffect(()=>{

		setEmployeeInfo(employeeData);
	},[]);

	const handleClick = (e) =>{

		e.preventDefault();
	}

	const handleSearch =(searchItem)=>{

		setValues(searchItem);

		if (searchItem !== ''){
			
			const filteredData = employeeInfo.filter(item=>{
				return item.name.toLowerCase().includes(searchItem.toLowerCase());
			});

			setFiltered(filteredData);
		}else{


			setFiltered(employeeInfo);
		}

	}

	


    return (
        <div className="searchContainer">

          <div className="greyBarTop"></div>

          <h5 className="employeeText">employees</h5>

          <form onSubmit={handleClick}>

						<div className="inputContainer">
							
							<input type="text" value={values} placeholder="search..." onChange={(e)=>handleSearch(e.target.value)} />

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

						{values.length > 1 ? 
							filtered.map((items,index)=>{
								return (
									<EmployeeCards items={items} key={index} />
								);
							})

						:
							employeeInfo.map((items,index)=>{
								return (
									<EmployeeCards items={items} key={index} />
								);
							})
						}
					</div>

            
        </div>
    )
}

export default Search
