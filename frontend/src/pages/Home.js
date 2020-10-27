import React, { Fragment } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Showcase from '../components/Home/Showcase';

function Home() {
	return (
		<Fragment>
			<Navbar />
			<Showcase />
			<Footer />
		</Fragment>
	);
}

export default Home;
