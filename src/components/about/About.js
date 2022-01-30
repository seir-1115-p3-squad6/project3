import React from 'react';
import './About.css';

function About(props) {
	return (
		<div className='about-container'>
			{/* <h1 className='About__title'>About</h1> */}
			<div className='about-text'>
				<p className='about-paragraph'>
					Welcome to Plant Haven! Did you know that indoor plants have been
					proven to reduce stress levels? Plant Haven was created to help people
					turn their home into a relaxing space using the power of plants. We've
					included several popular houseplants to get you started, but feel free
					to add your own plants if you don't see the one you're looking for.
					Each plant has a description and is organized by their light and water
					needs to help you find the perfect plant for any environment. We've
					also included links to safe online retailers so you can purchase the
					plants you're interested in. Keep track of all your favorites by
					clicking the heart icon, so you remember which plants you want to add
					to your home. We truly hope you enjoy Plant Haven and visit us often
					for updates!
				</p>
			</div>
		</div>
	);
}

export default About;
