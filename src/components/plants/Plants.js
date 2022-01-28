import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CreatePosts from './CreatePosts';
import FavoriteIcon from '@mui/icons-material/Favorite';
import axios from 'axios';

function Plants(props) {
	const [plants, setPlants] = useState([]);

	const url = 'https://seir1115-plants-api.herokuapp.com/plants';

	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((json) => {
				setPlants(json);
			})
			.catch(console.error);
	}, []);
	return (
		<section className='container'>
			<CreatePosts />
			{plants.map((plant) =>
				!plant.favorite ? (
					<div>
						<Link to={`${plant._id}`} key={plant._id}>
							<div className='card'>
								<div className='card-image'>
									<img src={plant.image} alt={plant.name} />
								</div>
								<div className='card-title'>
									<h3>{plant.name}</h3>
								</div>
							</div>
						</Link>
						<FavoriteIcon className='heart'></FavoriteIcon>
					</div>
				) : (
					<div>
						<Link to={`${plant._id}`} key={plant._id}>
							<div className='card'>
								<div className='card-image'>
									<img src={plant.image} alt={plant.name} />
								</div>
								<div className='card-title'>
									<h3>{plant.name}</h3>
								</div>
							</div>
						</Link>
						<FavoriteIcon className='heartAlive'></FavoriteIcon>
					</div>
				)
			)}
		</section>
	);
}

export default Plants;

// const handleFavorite = async () => {
// 	await axios.put(url, { favorite: true });
// 	console.log(plant.favorite);
// };

// const handleUnfavorite = async () => {
// 	await axios.put(url, { favorite: false });
// 	console.log(plant.favorite);
// };

// <button onClick={handleFavorite}>Heart</button>
// <button onClick={handleUnfavorite}>Anti-Heart</button>

// <p>Heart</p>
