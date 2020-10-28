import React, { Fragment } from 'react';
import Navbar from '../components/BaseComponents/Navbar';
import Footer from '../components/BaseComponents/Footer';
import Showcase from '../components/Home/Showcase';
import { Title } from '../style/Title';
import RestaurantSingle from '../components/Home/BestRated';
import { Container } from '../style/Container';

const Home = () => {
	return (
		<Fragment>
			<Navbar />
			<Showcase />
			<Title bestRated>
				<p className='title-best-rated'>Best Rated Restaurants</p>
			</Title>
			<Container bestRated>
				<RestaurantSingle />
				<RestaurantSingle />
				<RestaurantSingle />
				<RestaurantSingle />
			</Container>
			<Footer />
		</Fragment>
	);
};

export default Home;
