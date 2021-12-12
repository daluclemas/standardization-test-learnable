import React from 'react';
import './Search.css';

const Search = () => {
    return (
        <div className="searchContainer">

          <div className="greyBarTop"></div>

          <h5 className="employeeText">employees</h5>

          <form >

						<div className="inputContainer">
							<input type="text" value='' placeholder="search..." onChange='' />

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

            
        </div>
    )
}

export default Search
