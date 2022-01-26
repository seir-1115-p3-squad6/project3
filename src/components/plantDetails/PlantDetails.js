import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';

function PlantDetails(props) {
	const { id } = useParams();
	// const navigate = useNavigate();
	const [plant, setPlant] = useState(null);

	function getPlant() {
		const url = `http://localhost:3000/plants/:${id}`;
		fetch(url)
			.then((res) => {
				return res.json();
			})
			.then((res) => {
				setPlant(res);
			});
	}

	useEffect(() => {
		getPlant();
	}, [plant]);

	
if(!plant) {
    return <h1>loading plants</h1>
}
	return (
		<div className='plant-card'>
			<h1>here i am PlantDetails</h1>
			<img src={plant.image} alt={plant.name} />
			<h1>{plant.name}</h1>
		</div>
	);
}

export default PlantDetails;
