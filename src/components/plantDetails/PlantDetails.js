import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import './plantDetails.css';
import { useNavigate } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';

const PlantDetails = () => {
	const { id } = useParams();

	const [plant, setPlant] = useState(null);

	const url = `https://seir1115-plants-api.herokuapp.com/plants/${id}`;

	const navigate = useNavigate();

	async function getPlant() {
		await fetch(url)
			.then((res) => res.json())
			.then((res) => {
				setPlant(res);
			});
	}

	useEffect(() => {
		getPlant();
	}, []);

	const handleFavorite = async () => {
		await axios.put(url, { favorite: true });
		getPlant();
		// Tyler helped us figure out this issue during officehours (issue ticker: #27)
	};

	const handleUnfavorite = async () => {
		await axios.put(url, { favorite: false });
		getPlant();
		
	};

	// referred to iceCream api for reference
	// referenced this tutorial on useNavigate https://www.digitalocean.com/community/tutorials/react-react-router-v6
	const handleDelete = async () => {
		await axios.delete(url);
		navigate(`/plants`, { replace: true });
	};

	if (!plant) {
		return <h1>loading plants</h1>;
	}
	if (!plant.favorite) {
		return (
			<div className='plant-full-container'>
				<h1 className='plant-name'>{plant.name}</h1>
				<div className='plant-card'>
					<div className='plant-image-container'>
						<img className='plant-img' src={plant.image} alt={plant.name} />
						<FavoriteIcon
							width='60'
							height='60'
							onClick={handleFavorite}
							className='anti-heart'
						/>
					</div>
					<div className='plant-info-div'>
						<h2 className='sci-name'>
							{' '}
							Scientific Name: {plant.scientific_name}
						</h2>
						<h4 className='description'>Description:</h4>
						<p className='plant-description'> {plant.description}</p>
						<ul className='ul-plant'>
							<li>
								<strong>Difficulty Level:</strong> {plant.difficulty}
							</li>
							<li>
								<strong>Moisture:</strong> requires {plant.moisture} moisture
							</li>
							<li>
								<strong>Light:</strong> requires {plant.light} light
							</li>
						</ul>
						<div className='buttons'>
							<button className='button'>
								<a
									className='plant-purchase'
									href={plant.purchase_link}
									target='_blank'
									rel='noreferrer'>
									Purchase Plant here
								</a>
							</button>
							<button className='button' onClick={handleDelete}>
								Kill This Plant
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	} else {
		return (
			<div className='plant-full-container'>
				<h1 className='plant-name'>{plant.name}</h1>
				<div className='plant-card'>
					<div className='plant-image-container'>
						<img className='plant-img' src={plant.image} alt={plant.name} />
						<FavoriteIcon
							onClick={handleUnfavorite}
							className='heart'
							width='60'
							height='60'
						/>
					</div>
					<div className='plant-info-div'>
						<h2 className='sci-name'>
							Scientific Name: {plant.scientific_name}
						</h2>
						<h4 className='description'>Description:</h4>
						<p className='plant-description'>{plant.description}</p>
						<ul className='ul-plant'>
							<li>
								<strong>Difficulty Level:</strong> {plant.difficulty}
							</li>
							<li>
								{' '}
								<strong>Moisture:</strong> requires {plant.moisture} moisture
							</li>
							<li>
								{' '}
								<strong>Light:</strong> requires {plant.light} light
							</li>
						</ul>
						<div className='buttons'>
							<button className='button'>
								<a
									className='plant-purchase'
									href={plant.purchase_link}
									target='_blank'
									rel='noreferrer'>
									Purchase Plant here
								</a>
							</button>
							<button className='button' onClick={handleDelete}>
								Kill This Plant
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
};

export default PlantDetails;
