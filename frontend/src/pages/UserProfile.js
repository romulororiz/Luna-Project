import React, { Fragment, useState, useEffect } from 'react';
import Navbar from '../components/BaseComponents/Navbar';
import Footer from '../components/BaseComponents/Footer';
import UserProfilePage from '../components/UserProfile';

const UserProfile = () => {

	return (
		<Fragment>
			<Navbar />
			<UserProfilePage />
			<Footer />
		</Fragment>
	);
};

export default UserProfile;
