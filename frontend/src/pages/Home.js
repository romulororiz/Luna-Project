import React, { Fragment } from 'react';
import Navbar from '../components/BaseComponents/Navbar';
import Footer from '../components/BaseComponents/Footer';
import Showcase from '../components/Home/Showcase';
import { TitleBestRated } from '../components/Home/style';
import RestaurantSingle from '../components/Home/BestRated';
import { Container } from '../style/theme';

const Home = () => {
	return (
		<Fragment>
			<Navbar />
			<Showcase />
			<TitleBestRated>
				<p className='title-best-rated'>Best Rated Restaurants</p>
			</TitleBestRated>
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
