import React, { useState } from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

function CreatePosts(props) {
    const [open, setOpen] = useState(false);
    const [modal, setModal] = useState(false);

    const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
    const style = {
			position: 'absolute',
			top: '50%',
			left: '50%',
			transform: 'translate(-50%, -50%)',
			width: 400,
			bgcolor: 'background.paper',
			border: '2px solid #000',
			boxShadow: 24,
			p: 4,
		};
        

    return (
			<div className='create'>
				<Button onClick={handleOpen}>
					<AddCircleIcon />
				</Button>
				<Modal open={open} onClose={handleClose}>
					<Box sx={style}>
						<Typography id='modal-modal-title' variant='h6' component='h2'>
							Create an Angel
						</Typography>
						<Typography id='modal-modal-description' sx={{ mt: 2 }}>
							Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
						</Typography>
					</Box>
				</Modal>
			</div>
		);
}

export default CreatePosts;