import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import './plantDetails.css';
import { useNavigate } from 'react-router-dom';

const PlantDetails = () => {
	const { id } = useParams();
	// const history = useHistory();
	const [plant, setPlant] = useState(null);

	const url = `http://localhost:3000/plants/${id}`;

	const navigate = useNavigate();

	function getPlant() {
		fetch(url)
			.then((res) => res.json())
			.then((json) => {
				setPlant(json);
			});
	}

	useEffect(() => {
		getPlant();
	}, [plant]);

	// referred to iceCream api for reference
	// referenced this tutorial on useNavigate https://www.digitalocean.com/community/tutorials/react-react-router-v6
	const handleDelete = async () => {
		await axios.delete(url);
		navigate(`/plants`, { replace: true });
	};

	if (!plant) {
		return <h1>loading plants</h1>;
	}
	return (
		<div className='plant-card'>
			<div>
				<img src={plant.image} alt={plant.name} />
			</div>
			<div className='plant-info-div'>
				<h1>{plant.name}</h1>

				<h2> Scientific Name: {plant.scientific_name}</h2>
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
				<button onClick={handleDelete}>Kill This Plant</button>
			</div>
		</div>
	);
};

export default PlantDetails;
