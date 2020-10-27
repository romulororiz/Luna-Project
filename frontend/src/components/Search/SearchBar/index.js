import React, { Fragment, useState } from 'react';
import { SearchBarWrapper, CategoryField } from './style';
import Form from '../../../style/Form';

const SearchBar = () => {
	const [showDropdown, setShowDropdown] = useState(true);

	return (
		<Fragment>
			<SearchBarWrapper>
				<Form searchBar placeholder='Search restaurants...' />
				<CategoryField
					onMouseEnter={() => setShowDropdown(value => !value)}
					onMouseLeave={() => setShowDropdown(value => !value)}
				>
					<div className='dropdown'>
						<span>
							Select a category
							<i
								class={
									showDropdown ? 'fas fa-chevron-up' : 'fas fa-chevron-down'
								} //fix chevron
							></i>
						</span>
						<div className='dropdown-content'>
							<p>Mexican</p>
							<p>Italian</p>
						</div>
					</div>
				</CategoryField>
			</SearchBarWrapper>
		</Fragment>
	);
};

export default SearchBar;
