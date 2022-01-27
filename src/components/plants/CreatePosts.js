import React, { useState } from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
/*  imported mui modal refernce: https://mui.com/components/modal/#main-content -> discussed with Zoe on 1/27 and was approved */

function CreatePosts(props) {
	const [modal, setModal] = useState(false);

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

	const handleChange = (event) => {
		event.preventDefault();
		console.log(event.target.value);
	};

	return (
		<div className='create'>
			<Button onClick={handleOpen}>
				<AddCircleIcon />
			</Button>
			<Modal open={modal} onClose={handleClose}>
				<Box sx={style}>
					<Typography id='modal-modal-title' variant='h6' component='h2'>
						Create an Angel
					</Typography>
					<Typography id='modal-modal-description' sx={{ mt: 2 }}>
						<label htmlFor='name'>Plant Name:</label>
						<input type='text' onChange={handleChange} id='name' />
						<label htmlFor='scientific-name'>Scientific Name:</label>
						<input type='text' onChange={handleChange} id='scientific-name' />
						<label htmlFor='image'>Image URl:</label>
						<input type='text' onChange={handleChange} id='image' />
						<label htmlFor='description'>Description:</label>
						<input type='text' onChange={handleChange} id='description' />
						<label htmlFor='purchase_link'>Purchase Link:</label>
						<input type='text' onChange={handleChange} id='purchase_link' />
						<button>Submit</button>
					</Typography>
				</Box>
			</Modal>
		</div>
	);
}

export default CreatePosts;
