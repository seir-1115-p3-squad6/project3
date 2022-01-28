import { Link } from 'react-router-dom';
import './nav.css';

function Nav(props) {
	return (
		<nav className='navigation'>
			<ul>
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
