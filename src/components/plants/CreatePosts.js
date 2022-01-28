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
		width: 600,
		height: 300,
		bgcolor: 'background.paper',
		border: '2px solid #000',
		boxShadow: '0px 5px 5px',
		p: 4,
		display: 'flex',
		justifyContent: 'center',
		margin: 'auto',
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

	const createNewPlant = () => {
		axios
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
				<AddCircleIcon />
			</Button>
			<Modal open={modal} onClose={handleClose} className='modal-bg'>
				<Box sx={style} onSubmit={handleSubmit}>
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
							<label htmlFor='image'>Image URl:</label>
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
						<input
							type='submit'
							onClick={handleSubmit}
							className='submit-btn'
						/>
						<div className='column-2'>
							<form action=''>
								<h4 className='choices'> Light:</h4>

								<label htmlFor='light'>high light</label>
								<input
									type='radio'
									id='light'
									name='light'
									value='high'
									checked={plant.light === 'high'}
									onChange={handleChange}
								/>
								<label htmlFor='light'> low light</label>
								<input
									type='radio'
									id='light'
									name='light'
									value='light'
									checked={plant.light === 'low'}
									onChange={handleChange}
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
								/>
								<label htmlFor='moisture'>Low</label>
								<input
									type='radio'
									id='moisture'
									name='light'
									value='low'
									checked={plant.moisture === 'low'}
									onChange={handleChange}
								/>
							</form>
						</div>
					</Typography>
					<CancelIcon onClick={handleClose} className='cancel-btn' />
				</Box>
			</Modal>
		</div>
	);
}

export default CreatePosts;
