import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CreatePosts from './CreatePosts';
import FavoriteIcon from '@mui/icons-material/Favorite';
import './plants.css';

function Plants(props) {
	const [plants, setPlants] = useState([]);

	const url = 'http://localhost:3000/plants';

	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((json) => {
				setPlants(json);
			})
			.catch(console.error);
	}, []);
	return (
		<section>
			<CreatePosts />
			<div className='card-container'>
				{plants.map((plant) =>
					!plant.favorite ? (
						<div className='card' key={plant._id}>
							<Link to={`${plant._id}`}>
								{/* <div className='card'> */}
								{/* <div className='card-image'> */}
								<img
									src={plant.image}
									alt={plant.name}
									className='card-image'
								/>
								{/* </div>
								<div className='card-title'> */}
								<h3 className='card-name'>{plant.name}</h3>
								{/* </div> */}
								{/* </div> */}
							</Link>
							<FavoriteIcon className='anti-heart'></FavoriteIcon>
						</div>
					) : (
						<div key={plant._id} className='card'>
							<Link to={`${plant._id}`}>
								{/* <div className='card'> */}
								{/* <div className='card-image'> */}
								<img
									src={plant.image}
									alt={plant.name}
									className='card-image'
								/>
								{/* </div> */}
								{/* <div className='card-title'> */}
								<h3 className='card-name'>{plant.name}</h3>
								{/* </div> */}
								{/* </div> */}
							</Link>
							<FavoriteIcon className='heart'></FavoriteIcon>
						</div>
					)
				)}
			</div>
		</section>
	);
}

export default Plants;
