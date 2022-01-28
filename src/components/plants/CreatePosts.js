import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import axios from 'axios';
// import axios from 'axios';
/*  imported mui modal refernce: https://mui.com/components/modal/#main-content -> discussed with Zoe on 1/27 and was approved */

function CreatePosts(props) {
	const navigate = useNavigate();
	const handleOpen = () => setModal(true);
	const handleClose = () => setModal(false);
	const style = {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: 400,
		height: 400,
		bgcolor: 'background.paper',
		border: '2px solid #000',
		boxShadow: '10px 5px 5px red',
		p: 4,
	};

	const [modal, setModal] = useState(false);
	const [plant, setPlant] = useState({
		name: '',
		scientific_name: '',
		image: '',
		description: '',
		purchase_link: '',
	});

	const handleChange = (event) => {
		event.preventDefault();
		setPlant({ ...plant, [event.target.id]: event.target.value });
		console.log(event.target.value);
	};

	const redirectToPlants = () => {
		window.location.pathname = '/plants';
	}

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
			<Modal open={modal} onClose={handleClose}>
				<Box sx={style} onSubmit={handleSubmit}>
					<Typography id='modal-modal-title' variant='h6' component='h2'>
						Create an Angel
					</Typography>
					<Typography id='modal-modal-description' sx={{ mt: 2 }}>
						<label htmlFor='name'>Plant Name:</label>
						<input
							type='text'
							onChange={handleChange}
							id='name'
							value={plant.name}
						/>
						<label htmlFor='scientific_name'>scientific_name:</label>
						<input
							type='text'
							onChange={handleChange}
							id='scientific_name'
							value={plant.scientific_name}
						/>
						<label htmlFor='image'>Image URl:</label>
						<input
							type='text'
							onChange={handleChange}
							id='image'
							value={plant.image}
						/>
						<label htmlFor='description'>Description:</label>
						<input
							type='text'
							onChange={handleChange}
							id='description'
							value={plant.description}
						/>
						<label htmlFor='purchase_link'>Purchase Link:</label>
						<input
							type='text'
							onChange={handleChange}
							id='purchase_link'
							value={plant.purchase_link}
						/>
						<input type='submit' onClick={handleSubmit} />
					</Typography>

					<CancelIcon onClick={handleClose} />
				</Box>
			</Modal>
		</div>
	);
}

export default CreatePosts;
