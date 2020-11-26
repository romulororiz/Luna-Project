import React, { Fragment } from 'react';
import { RestaurantInfo } from './style';
import StarRatings from 'react-star-ratings';
import { useHistory } from 'react-router-dom';

const RestaurantSingle = ({ restaurant }) => {
	const history = useHistory();

	
	return (
		<Fragment>
			<RestaurantInfo black onClick={() => history.push('/restaurant-profile/' + restaurant.id + '/')}>
				<div className='restaurant-info'>
					<p>{restaurant.name}</p>
					<p>{restaurant.street}</p>
					<p>{restaurant.city}</p>
					<p>{restaurant.zip_code}</p>
					<p className='ratings'>
						<StarRatings
							rating={restaurant.average_rating}
							starDimension='22px'
							starSpacing='3px'
							starRatedColor='#E47D31'
							starEmptyColor='#c3c3c3'
						/>
						<span>{restaurant.reviews}</span>
					</p>
				</div>
				<img
					className='restaurantMockupImg'
					src={restaurant.image}
					alt='restaurant'
				/>
			</RestaurantInfo>
		</Fragment>
	);
};

export default RestaurantSingle;
