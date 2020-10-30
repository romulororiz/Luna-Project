import React, { Fragment } from 'react';
import { RestaurantInfo } from './style';
import StarRatings from 'react-star-ratings';
import { ReviewRestaurantProfile } from './style';
import Form from '../../../style/Form';
import Btn from '../../../style/Button';
import avatar from '../../../assets/images/avatar.jpg';

const ReviewRestaurantProfileDisplay = ({ review }) => {
	return (
		<Fragment>
			<ReviewRestaurantProfile>
				<section className='user-info-restaurant-profile'>
					<img className='avatar' src={avatar} alt='' />
					<div className='user-details-restaurant-profile'>
						<p>{review.user.username}</p>
						<p>Amount of reviews: {review.user.reviews}</p>
					</div>
					<p className='ratings'>
						<StarRatings
							rating={review.rating}
							starDimension='22px'
							starSpacing='3px'
							starRatedColor='#E47D31'
							starEmptyColor='#c3c3c3'
						/>
					</p>

					<p className='review-timestamp'>01.01.2020 - 15:30</p>
				</section>
				<div className='user-review-restaurant-profile'>
					<p>{review.text_content}</p>
					<Form restaurantProfile />
					<Btn restaurantProfile>Post</Btn>
				</div>
			</ReviewRestaurantProfile>
		</Fragment>
	);
};

export default ReviewRestaurantProfileDisplay;
