import React, { useState } from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import axios from 'axios';
import FilterSearch from './FilterSearch';
import { useNavigate } from 'react-router-dom';

/*  imported mui modal refernce: https://mui.com/components/modal/#main-content -> discussed with Zoe on 1/27 and was approved */
import './CreatePosts.styles.css';

function CreatePosts({handleSearch, plants}) {
	const handleOpen = () => setModal(true);
	const handleClose = () => setModal(false);

	const navigate = useNavigate();

	const style = {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		bgcolor: 'rgb(169, 177, 167, 1)',
		border: '2px solid #000',
		boxShadow: '0px 5px 5px',
		p: 2,
		margin: 'auto',
		maxWidth: '100%',
		maxHeight: '100%',
	};

	const [modal, setModal] = useState(false);
	const [plant, setPlant] = useState({
		name: '',
		scientific_name: '',
		image: '',
		description: '',
		purchase_link: '',
		difficulty: '',
		light: '',
		moisture: '',
	});

	const handleChange = (event) => {
		event.preventDefault();
		setPlant({ ...plant, [event.target.id]: event.target.value });
	};

	const createNewPlant = async () => {
		await axios.post('https://seir1115-plants-api.herokuapp.com/plants', plant);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		createNewPlant();

		navigate(`/`, { replace: true });
		handleClose();
	};

	return (
		<div className='create'>
			<div className='sub-heading'>
				<FilterSearch plants={plants} handleSearch={handleSearch} className='filterSearchBar'/>
				<div className='createPostBtn'>
					<p className='add-paragraph'>Don't see what you're looking for?</p>
					<AddCircleIcon className='modalBtn' onClick={handleOpen} />
				</div>
			</div>

			<Modal open={modal} onClose={handleClose} className='modal-bg'>
				<Box sx={{ ...style, width: 350 }} onSubmit={handleSubmit}>
					<CancelIcon onClick={handleClose} className='cancel-btn' />
					<Typography
						id='modal-modal-title'
						component='div'
						className='form-title'>
						Add a plant
					</Typography>
					<Typography
						id='modal-modal-description'
						sx={{ mt: 2 }}
						component='div'
						className='form'>
						<div className='column-1'>
							<label htmlFor='name'>Plant Name:</label>
							<input
								type='text'
								onChange={handleChange}
								id='name'
								value={plant.name}
								className='modal__plant-name'
							/>
							<label htmlFor='scientific_name'>Scientific Name:</label>
							<input
								type='text'
								onChange={handleChange}
								id='scientific_name'
								value={plant.scientific_name}
								className='modal__scientific-name'
							/>
							<label htmlFor='image'>Image URL:</label>
							<input
								type='text'
								onChange={handleChange}
								id='image'
								value={plant.image}
								className='modal__imageUrl'
							/>
							<label htmlFor='description'>Description:</label>
							<input
								type='text'
								onChange={handleChange}
								id='description'
								value={plant.description}
								className='modal__description'
							/>
							<label htmlFor='purchase_link'>Purchase Link:</label>
							<input
								type='text'
								onChange={handleChange}
								id='purchase_link'
								value={plant.purchase_link}
								className='modal__description'
							/>
						</div>
						<div className='column-2'>
							<form action=''>
								<h4 className='choices'> Difficulty:</h4>
								<label htmlFor='difficulty'>Beginner</label>
								<input
									type='radio'
									id='difficulty'
									name='difficulty'
									value='beginner'
									checked={plant.difficulty === 'beginner'}
									onChange={handleChange}
									className='modal__radio-name'
								/>
								<label htmlFor='difficulty'>Moderate</label>
								<input
									type='radio'
									id='difficulty'
									name='difficulty'
									value='moderate'
									checked={plant.difficulty === 'moderate'}
									onChange={handleChange}
									className='modal__radio-name'
								/>
								<label htmlFor='difficulty'>Advanced</label>
								<input
									type='radio'
									id='difficulty'
									name='difficulty'
									value='advanced'
									checked={plant.difficulty === 'advanced'}
									onChange={handleChange}
									className='modal__radio-name'
								/>
							</form>
							<form action=''>
								<h4 className='choices'> Light:</h4>
								<label htmlFor='light'>High</label>
								<input
									type='radio'
									id='light'
									name='light'
									value='high'
									checked={plant.light === 'high'}
									onChange={handleChange}
									className='modal__radio-name'
								/>
								<label htmlFor='light'>Low</label>
								<input
									type='radio'
									id='light'
									name='light'
									value='low'
									checked={plant.light === 'low'}
									onChange={handleChange}
									className='modal__radio-name'
								/>
							</form>
							<form action=''>
								<h4 className='choices'> Moisture:</h4>
								<label htmlFor='moisture'>High</label>
								<input
									type='radio'
									id='moisture'
									name='light'
									value='high'
									checked={plant.moisture === 'high'}
									onChange={handleChange}
									className='modal__radio-name'
								/>
								<label htmlFor='moisture'>Low</label>
								<input
									type='radio'
									id='moisture'
									name='light'
									value='low'
									checked={plant.moisture === 'low'}
									onChange={handleChange}
									className='modal__radio-name'
								/>
							</form>
						</div>
						<button onClick={handleSubmit} className='submit-btn'>
							Submit
						</button>
					</Typography>
				</Box>
			</Modal>
		</div>
	);
}

export default CreatePosts;
