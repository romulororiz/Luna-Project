import React, { useState } from 'react';
import Navbar from '../components/BaseComponents/Navbar';
import Footer from '../components/BaseComponents/Footer';
import SearchBar from '../components/Search/SearchBar';
import { Title } from '../style/Title';
import { Container } from '../style/Container';
import ReviewSingle from '../components/Search/Reviews';
import RestaurantSingle from '../components/Home/BestRated';

const Search = () => {
	const [active, setActive] = useState('restaurants');

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
						className='search-link'
					>
						Restaurants
					</p>
					<p
						onClick={() => {
							setActive('reviews');
						}}
						className='search-link'
					>
						Reviews
					</p>
					<p
						onClick={() => {
							setActive('users');
						}}
						className='search-link'
					>
						Users
					</p>
				</div>
			</Title>

			{active === 'restaurants' ? (
				<Container Search>
					<RestaurantSingle />
					<RestaurantSingle />
					<RestaurantSingle />
					<RestaurantSingle />
					<RestaurantSingle />
					<RestaurantSingle />
					<RestaurantSingle />
					<RestaurantSingle />
				</Container>
			) : null}

			{active === 'reviews' ? (
				<Container Search>
					<ReviewSingle />
					<ReviewSingle />
					<ReviewSingle />
					<ReviewSingle />
					<ReviewSingle />
					<ReviewSingle />
					<ReviewSingle />
					<ReviewSingle />
				</Container>
			) : null}

			{active === 'users' ? <h1>Ola</h1> : null}

			<Footer />
		</Container>
	);
};

export default Search;
