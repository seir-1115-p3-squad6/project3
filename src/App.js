import { Routes, Route } from 'react-router-dom';

import Nav from './components/header/Nav';
import About from './components/about/About';
import Plants from './components/plants/Plants';
import Footer from './components/footer/Footer';

function App() {
	return (
		<>
			<header>
				<h1 className='title'>Plant Haven</h1>

				<Nav />
			</header>

			<Routes>
				<Route path='/' element={<About />} />
				<Route path='/plants' element={<Plants />} />
			</Routes>
			<footer>
				<Footer />
			</footer>
		</>
	);
}

export default App;
