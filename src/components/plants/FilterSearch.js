import React, {useState, useEffect} from 'react';
import './FilterSearch.styles.css';

function FilterSearch({ plants, handleSearch }) {
	// const [filteredPlants, setFilteredPlants] = useState(plants)
	// const handleSearch = (event) => {
	// 	let value = event.target.value.toLowerCase();
	// 	let result = [];
	// 	console.log(value);
	// 	result = plants.filter((plant) => {
	// 		return plant.name.search(value) !== -1;
	// 	});
	// 	setFilteredPlants(result);
	// 	console.log(filteredPlants);
	// };
	return (
		<div className='filterSearchBar'>
			<label>Search:</label>
			<input
				type='text'
				className='searchInput'
				placeholder='search...'
				onChange={(event) => handleSearch(event)}
			/>
		</div>
	);
}

export default FilterSearch;
