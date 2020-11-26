import React, { Fragment, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Navbar from '../components/BaseComponents/Navbar';
import Footer from '../components/BaseComponents/Footer';
import Showcase from '../components/Home/Showcase';
import { Title } from '../style/Title';
import RestaurantSingle from '../components/Home/BestRated';
import { Container } from '../style/Container';
import homeAction from '../store/Actions/homeAction';
import Spinner from '../components/BaseComponents/Spinner';

const Home = () => {
	const dispatch = useDispatch();
	const [restaurants, setRestaurants] = useState([]);

	useEffect(() => {
		const getData = async () => {
			const data = await dispatch(homeAction());
			console.log(data);
			setRestaurants(data);
		};
		getData();
	}, []);

	return (
		<Fragment>
			<Navbar />
			<Showcase />
			<Title bestRated>
				<p className='title-best-rated'>Best Rated Restaurants</p>
			</Title>
			<Container bestRated>
				{restaurants.length ? (
					restaurants.map(restaurant => (
						<RestaurantSingle restaurant={restaurant} key={restaurant.id} />
					))
				) : (
					<Spinner />
				)}
			</Container>
			<Footer />
		</Fragment>
	);
};

export default Home;
