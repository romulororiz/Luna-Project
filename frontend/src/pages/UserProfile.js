import React, { Fragment, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Navbar from '../components/BaseComponents/Navbar';
import Footer from '../components/BaseComponents/Footer';
import UserProfilePage from '../components/UserProfile';
import userAction from '../store/Actions/userAction';

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
