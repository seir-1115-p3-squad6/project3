import { Link } from 'react-router-dom';

function Nav(props) {
	return (
		<nav className=''>
			<ul className='navigation'>
				<li className='about-nav'>
					<Link to='/'>About</Link>
				</li>
				<li className='plants-nav'>
					<Link to='/plants'>Plants</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Nav;
