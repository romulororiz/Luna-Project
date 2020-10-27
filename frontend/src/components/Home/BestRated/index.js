import React, { Fragment } from 'react';
import { RestaurantInfo } from './style';
import restaurantMockupImg from '../../../assets/images/restaurant-mockup.jpg';

const RestaurantSingle = () => {
	return (
		<Fragment>
			<RestaurantInfo>
				<div className='restaurant-info'>
					<p>Restaurant Name</p>
					<p>Address</p>
					<p className='ratings'>
						<i class='fas fa-star'></i>
						<i class='fas fa-star'></i>
						<i class='fas fa-star'></i>
						<i class='fas fa-star'></i>
						<span>68</span>
					</p>
				</div>
				<img
					className='restaurantMockupImg'
					src={restaurantMockupImg}
					alt='restaurant'
				/>
			</RestaurantInfo>
		</Fragment>
	);
}

export default RestaurantSingle;
