import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

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
		<section className='container'>
			{plants.map((plant) => {
				return (
					<div className='card'>
						<div className='card-image'>
							<img src={plant.image} alt={plant.name} />
						</div>
						<div className='card-title'>
							<h3>{plant.name}</h3>
						</div>
					</div>
				);
			})}
		</section>
	);
}

export default Plants;
