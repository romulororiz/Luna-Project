import React, { Fragment } from 'react';
import StarRatings from 'react-star-ratings';
import { ShowcaseHome } from '../Home/Showcase/style';
import { Container } from '../../style/Container';
import { ReviewRestaurantProfile } from './style';
import Form from '../../style/Form';
import Btn from '../../style/Button';
import avatar from '../../assets/images/avatar.png';

const RestaurantProfilePage = () => {
	return (
		<Fragment>
			<ShowcaseHome restaurantProfile>
				<div className='overlay'>
					<div className='restaurant-info'>
						<h1>Restaurant Name</h1>
						<p>Category</p>
						<p className='ratings'>
							<StarRatings
								// rating={restaurant.average_rating}
								starDimension='22px'
								starSpacing='3px'
								starRatedColor='#E47D31'
								starEmptyColor='#c3c3c3'
							/>
							<span>68</span>
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
							{/* <section className='action-buttons-restaurant-profile'>
								<Btn btnLike>
									<i class='fas fa-thumbs-up'></i>like <span>20</span>
								</Btn>
								<Btn btnComment>
									Comment <span>40</span>
								</Btn>
							</section>
							<section className='review-comments-restaurant-profile'>
								<p>Latest Comments:</p>
								<div className='user-comment-restaurant-profile'>
									<p>User Name</p>
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
									</p>
								</div>
								<div className='user-comment-restaurant-profile'>
									<p>User Name</p>
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
									</p>
								</div>
							</section> */}
						</ReviewRestaurantProfile>
					</div>
					<div className='info-profile-page'>Ola</div>
				</section>
			</Container>
		</Fragment>
	);
};

export default RestaurantProfilePage;
