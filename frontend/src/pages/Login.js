import React, { Fragment, useState, useEffect } from 'react';
import Navbar from '../components/BaseComponents/Navbar';
import Footer from '../components/BaseComponents/Footer';
import LoginPage from '../components/Auth/Login';

const Login = () => {
	return (
		<Fragment>
			<Navbar />
			<Login />
			<Footer />
		</Fragment>
	);
};

export default UserProfile;
