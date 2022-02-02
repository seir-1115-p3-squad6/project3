import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CreatePosts from './CreatePosts';
import FavoriteIcon from '@mui/icons-material/Favorite';
import './plants.css';

function Plants(props) {
	const [plants, setPlants] = useState([]);
	const [filteredPlants, setFilteredPlants] = useState(plants);

	const url = 'https://seir1115-plants-api.herokuapp.com/plants';

	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((json) => {
				setPlants(json);
				setFilteredPlants(json);
			})
			.catch(console.error);
	}, []);
		const handleSearch = (event) => {
			let value = event.target.value.toLowerCase();
			let result = [];
			console.log(value);
			result = plants.filter((plant) => {
				return plant.name.toLowerCase().search(value) !== -1;
			});
			setFilteredPlants(result);
			console.log(filteredPlants);
		};
	return (
		<section>
			<CreatePosts plants={plants} handleSearch={handleSearch} />
			
			<div className='card-container'>
				{filteredPlants.map((plant) =>
					!plant.favorite ? (
						<div className='card' key={plant._id}>
							<Link to={`${plant._id}`}>
								<div className='card-img-contain'>
									<img
										src={plant.image}
										alt={plant.name}
										className='card-image'
									/>
								</div>

								<h3 className='card-name'>{plant.name}</h3>
							</Link>
							<FavoriteIcon className='non-heart'></FavoriteIcon>
						</div>
					) : (
						<div key={plant._id} className='card'>
							<Link to={`${plant._id}`}>
								<div className='card-img-contain'>
									<img
										src={plant.image}
										alt={plant.name}
										className='card-image'
									/>
								</div>

								<h3 className='card-name'>{plant.name}</h3>
							</Link>
							<FavoriteIcon className='red-heart'></FavoriteIcon>
						</div>
					)
				)}
			</div>
		</section>
	);
}

export default Plants;
