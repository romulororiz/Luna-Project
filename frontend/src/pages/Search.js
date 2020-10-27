import React, { Fragment } from 'react';
import Navbar from '../components/BaseComponents/Navbar';
import Footer from '../components/BaseComponents/Footer';
import SearchBar from '../components/Search/SearchBar'
// import { Container } from '../style/theme';

const Search = () => {
	return (
		<Fragment>
			<Navbar />
            <SearchBar />
			<Footer />
		</Fragment>
	);
};

export default Search;
