import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Navbar from '../components/BaseComponents/Navbar';
import Footer from '../components/BaseComponents/Footer';
import SearchBar from '../components/Search/SearchBar';
import { Title } from '../style/Title';
import { Container } from '../style/Container';
import ReviewSingle from '../components/Search/Reviews';
import UserSingle from '../components/Search/Users';
import RestaurantSingle from '../components/Home/BestRated';
import restaurantAction from '../store/Actions/restaurantAction';
import reviewAction from '../store/Actions/reviewAction';
import userAction from '../store/Actions/userAction';
import Spinner from '../components/BaseComponents/Spinner';

const Search = () => {
	const dispatch = useDispatch();
	const [active, setActive] = useState('restaurants');
	const [restaurants, setRestaurants] = useState([]);
	const [reviews, setReviews] = useState([]);
	const [users, setUsers] = useState([]);

	useEffect(() => {
		const getData = async () => {
			const data = await dispatch(restaurantAction());
			console.log(data);
			setRestaurants(data);
		};
		getData();
	}, []);

	useEffect(() => {
		const getData = async () => {
			const data = await dispatch(reviewAction());
			console.log(data);
			setReviews(data);
		};
		getData();
	}, []);

	useEffect(() => {
		const getData = async () => {
			const data = await dispatch(userAction());
			console.log(data);
			setUsers(data);
		};
		getData();
	}, []);

	return (
		<Container>
			<Navbar />
			<SearchBar />
			<Title>
				<div className='search-navigation-links'>
					<p
						onClick={() => {
							setActive('restaurants');
						}}
						className={
							active === 'restaurants' ? 'search-link active' : 'search-link'
						}
					>
						Restaurants
					</p>
					<p
						onClick={() => {
							setActive('reviews');
						}}
						className={
							active === 'reviews' ? 'search-link active' : 'search-link'
						}
					>
						Reviews
					</p>
					<p
						onClick={() => {
							setActive('users');
						}}
						className={
							active === 'users' ? 'search-link active' : 'search-link'
						}
					>
						Users
					</p>
				</div>
			</Title>

			{active === 'restaurants' ? (
				<Container Search>
					{restaurants.length ? (
						restaurants.map(restaurant => (
							<RestaurantSingle restaurant={restaurant} key={restaurant.id} />
						))
					) : (
						<Spinner />
					)}
				</Container>
			) : null}

			{active === 'reviews' ? (
				<Container Search>
					{reviews.length ? (
						reviews.map(review => (
							<ReviewSingle review={review} key={review.id} />
						))
					) : (
						<Spinner />
					)}
				</Container>
			) : null}

			{active === 'users' ? (
				<Container Search>
					{users.length ? (
						users.map(user => <UserSingle user={user} key={user.id} />)
					) : (
						<Spinner />
					)}
				</Container>
			) : null}

			<Footer />
		</Container>
	);
};

export default Search;
