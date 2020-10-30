import React, { Fragment, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import StarRatings from 'react-star-ratings';
import { ShowcaseHome } from '../Home/Showcase/style';
import { Container } from '../../style/Container';
import { ReviewRestaurantProfile } from './style';
import ReviewRestaurantProfileDisplay from './Reviews/index'
import specificReviewAction from '../../store/Actions/specificReviewAction';


import Form from '../../style/Form';
import Btn from '../../style/Button';
import avatar from '../../assets/images/avatar.jpg';

const RestaurantProfilePage = ({ restaurant }) => {
	const dispatch = useDispatch();
	const [Reviews, setReviews] = useState([]);

	useEffect(() => {
		const getData = async () => {
			const data = await dispatch(specificReviewAction(restaurant.id));
			setReviews(data);
		};
		getData();
	}, []);


	return (
		<Fragment>
			<ShowcaseHome restaurantProfile>
				<div className='overlay'>
					<div className='restaurant-info'>
						<h1>{restaurant.name}</h1>
						<p>{restaurant.category}</p>
						<p className='ratings'>
							<StarRatings
								rating={restaurant.average_rating}
								starDimension='22px'
								starSpacing='3px'
								starRatedColor='#E47D31'
								starEmptyColor='#c3c3c3'
							/>
							<span>{restaurant.rating}</span>
						</p>
					</div>
				</div>
			</ShowcaseHome>
			<Container restaurantProfile>
				<section className='reviews-info'>
					<div className='reviews-profile-page'>
						<div className='filter-section'>
							<Form restaurantProfileFilter placeholder='Filter...' />
							<Btn restaurantProfile>Filter</Btn>
						</div>

						<Container bestRated>
							{typeof(Reviews) != undefined ? (
								Reviews.map(review => (
									<ReviewRestaurantProfileDisplay review={review} key={review.id} />
								))
							) : (
								<p>No reviews!</p>
							)}
						</Container>

						<ReviewRestaurantProfile>
							<section className='user-info-restaurant-profile'>
								<img className='avatar' src={avatar} alt='' />
								<div className='user-details-restaurant-profile'>
									<p>User Name</p>
									<p>Total reviews user</p>
								</div>
								<p className='ratings'>
									<i className='fas fa-star'></i>
									<i className='fas fa-star'></i>
									<i className='fas fa-star'></i>
									<i className='fas fa-star'></i>
									<i className='fas fa-star'></i>
								</p>
								<p className='review-timestamp'>01.01.2020 - 15:30</p>
							</section>
							<div className='user-review-restaurant-profile'>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Consequatur harum libero pariatur obcaecati maiores velit
									nulla explicabo accusantium veritatis suscipit nobis
									reprehenderit vitae, id dolor nihil. Explicabo esse sunt
									inventore? Lorem, ipsum dolor sit amet consectetur adipisicing
									elit. Voluptatibus, nisi Lorem ipsum dolor sit amet
									consectetur adipisicing elit. Saepe, odio sit! Reprehenderit
									suscipit perspiciatis maxime temporibus quam quis dolor
									fugiat. Placeat laborum quibusdam, sit officia est esse
									reprehenderit cumque voluptate?
								</p>
								<Form restaurantProfile />
								<Btn restaurantProfile>Post</Btn>
							</div>
						</ReviewRestaurantProfile>
					</div>
					<div style={{"display":"flex", "flex-direction": "column", "align-content": "center", "paddingLeft":"20px"}}>
						<div className='info-profile-page'>{restaurant.openhours}</div>
							<p>Price level:</p>
							<p>{restaurant.pricelevel}</p>
							<div style={{"display":"flex", "flex-direction": "row"}}>
								<Btn restaurantProfile>WRITE REVIEW</Btn>
								<Btn restaurantProfile>EDIT DATA</Btn>
							</div>
					</div>
				</section>
			</Container>
		</Fragment>
	);
};

export default RestaurantProfilePage;
