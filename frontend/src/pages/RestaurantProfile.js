import React, { Fragment, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Navbar from '../components/BaseComponents/Navbar';
import Footer from '../components/BaseComponents/Footer';
import RestaurantProfilePage from '../components/RestaurantProfile';
import specificRestaurantAction from '../store/Actions/specificRestaurantAction';
import Spinner from '../components/BaseComponents/Spinner';

const RestaurantProfile = (props) => {
	const dispatch = useDispatch();
	const [datRestaurant, setdatRestaurant] = useState([]);

	useEffect(() => {
		const getData = async () => {
			const data = await dispatch(specificRestaurantAction(props.match.params.restaurantId));
			setdatRestaurant(data);
		};
		getData();
	}, []);

	return (
		<Fragment>
			<Navbar />
			<div>
				{typeof(datRestaurant) == undefined ? 
					<Spinner />
					:
					<RestaurantProfilePage restaurant={datRestaurant} key={datRestaurant.id} />
				}
			</div>
			<Footer />
		</Fragment>
	);
};

export default RestaurantProfile;
