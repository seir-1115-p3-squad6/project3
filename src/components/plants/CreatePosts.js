import React, { useState } from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import axios from 'axios';
// import axios from 'axios';
/*  imported mui modal refernce: https://mui.com/components/modal/#main-content -> discussed with Zoe on 1/27 and was approved */
import './CreatePosts.styles.css';

function CreatePosts(props) {
	const handleOpen = () => setModal(true);
	const handleClose = () => setModal(false);


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
		light: '',
		moisture: '',
	});

	const handleChange = (event) => {
		event.preventDefault();
		setPlant({ ...plant, [event.target.id]: event.target.value });
		console.log(event.target.value);
	};

	const redirectToPlants = () => {
		window.location.pathname = '/plants';
	};

	const createNewPlant = async() => {
		await axios
			.post('http://localhost:3000/plants', plant)
			.then((res) => console.log(res.data))
			.catch((error) => console.log(error));
		handleClose();
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		createNewPlant();
		redirectToPlants();
	};

	return (
		<div className='create'>
			<Button onClick={handleOpen}>
				<AddCircleIcon className='modalBtn' />
			</Button>
			<Modal open={modal} onClose={handleClose} className='modal-bg'>
				<Box sx={{ ...style, width: 350 }} onSubmit={handleSubmit}>
					<CancelIcon onClick={handleClose} className='cancel-btn' />
					<Typography
						id='modal-modal-title'
						variant='h6'
						component='h2'
						className='form-title'>
						Create an Angel
					</Typography>
					<Typography
						id='modal-modal-description'
						sx={{ mt: 2 }}
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
						<input
							type='submit'
							onClick={handleSubmit}
							className='submit-btn'
						/>
					</Typography>
				</Box>
			</Modal>
		</div>
	);
}

export default CreatePosts;
