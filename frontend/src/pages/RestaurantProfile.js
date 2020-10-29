import React, { Fragment } from 'react';
import Navbar from '../components/BaseComponents/Navbar';
import Footer from '../components/BaseComponents/Footer';
import RestaurantProfilePage from '../components/RestaurantProfile';

const RestaurantProfile = () => {
	return (
		<Fragment>
			<Navbar />
			<RestaurantProfilePage />
			<Footer />
		</Fragment>
	);
};

export default RestaurantProfile;
