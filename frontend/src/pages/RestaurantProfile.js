import React, { Fragment, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Navbar from '../components/BaseComponents/Navbar';
import Footer from '../components/BaseComponents/Footer';
import RestaurantProfilePage from '../components/RestaurantProfile';
import specificRestaurantAction from '../store/Actions/specificRestaurantAction';
import Spinner from '../components/BaseComponents/Spinner';

const RestaurantProfile = props => {
	const dispatch = useDispatch();
	const [restaurant, setRestaurant] = useState([]);

	useEffect(() => {
		const getData = async () => {
			const data = await dispatch(
				specificRestaurantAction(props.match.params.restaurantId)
			);
			setRestaurant(data);
		};
		getData();
	}, []);

	return (
		<Fragment>
			<Navbar />
			<div>
				{typeof restaurant == undefined ? (
					<Spinner />
				) : (
					<RestaurantProfilePage restaurant={restaurant} key={restaurant.id} />
				)}
			</div>
			<Footer />
		</Fragment>
	);
};

export default RestaurantProfile;
