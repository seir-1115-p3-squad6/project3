import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';

function PlantDetails(props) {
	const { id } = useParams();
	// const navigate = useNavigate();
	const [plant, setPlant] = useState(null);

	function getPlant() {
		const url = `http://localhost:3000/plants/${id}`;
		fetch(url)
			.then((res) => res.json())
			.then((json) => {
				setPlant(json);
			});
	}

	useEffect(() => {
		getPlant();
	}, [plant]);

	if (!plant) {
		return <h1>loading plants</h1>;
	}
	return (
		<div className='plant-card'>
			<h1>{plant.name}</h1>
			<h2> Scientific Name: {plant.scientific_name}</h2>
			<img src={plant.image} alt={plant.name} />
			<p>Descrition: {plant.description}</p>
			<ul>
				<li>Moisture: requires {plant.moisture} moisture</li>
				<li>Light: requires {plant.light} light</li>
			</ul>
			<button>
				<a className='plant-purchase' href={plant.purchase_link}>
					Purchace Plant here
				</a>
			</button>
		</div>
	);
}

export default PlantDetails;
