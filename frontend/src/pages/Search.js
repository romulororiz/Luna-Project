import React, { useState } from 'react';
import Navbar from '../components/BaseComponents/Navbar';
import Footer from '../components/BaseComponents/Footer';
import SearchBar from '../components/Search/SearchBar';
import { Title } from '../style/Title';
import { Container } from '../style/Container';
import RestaurantSingle from '../components/Home/BestRated';
import ReviewSingle from '../components/Search/Reviews';

const Search = () => {
	const [active, setActive] = useState();

	return (
		<Container>
			<Navbar />
			<SearchBar />
			<Title>
				<div className='search-navigation-links'>
					<p className='search-link'>Restaurants</p>
					<p onClick={() => setActive('review')} className='search-link'>
						Reviews
					</p>
					<p className='search-link'>Users</p>
				</div>
			</Title>
			<Container searchRestaurant>
				<RestaurantSingle />
				<RestaurantSingle />
				<RestaurantSingle />
				<RestaurantSingle />
				<RestaurantSingle />
				<RestaurantSingle />
				<RestaurantSingle />
				<RestaurantSingle />
			</Container>
			{/* {active === 'review' ? <ReviewSingle /> : null} */}
			<Footer />
		</Container>
	);
};

export default Search;
