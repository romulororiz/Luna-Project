import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ShowcaseHome } from '../Home/Showcase/style';
import { Container } from '../../style/Container';
import avatar from '../../assets/images/avatar.jpg';
import star from '../../assets/svgs/star.svg';
import comments from '../../assets/svgs/comment.svg';
import restaurant from '../../assets/svgs/restaurant.svg';
import edit from '../../assets/svgs/edit.svg';
import { ReviewUserProfile } from '../UserProfile/style';
import userProfileAction from '../../store/Actions/userProfileAction';

const UserProfilePage = () => {
	const dispatch = useDispatch();
	const [user, setUser] = useState([]);

	useEffect(() => {
		const getData = async () => {
			const data = await dispatch(userProfileAction());
			setUser(data);
			console.log(data);
		};
		getData();
	}, []);

	const fullName = `${user.first_name} ${user.last_name}`;

	return (
		<Fragment>
			<ShowcaseHome userProfile>
				<div className='overlay'></div>
				<div className='showcase-text'>
					<h1>{fullName}</h1>
					<p>{user.location}</p>
					<p>{user.reviews} reviews</p>
					<p>25 comments</p>
				</div>
			</ShowcaseHome>
			<Container userProfile>
				<section className='user-profile-content'>
					<div className='user-menu'>
						<div className='user-details-left'>
							<img className='avatar' src={user.profile_picture} alt='avatar' />
							<h3>{user.username}'s Profile</h3>
						</div>
						<div className='menu'>
							<div className='menu-option active'>
								<img src={star} alt='star' />
								<p>Reviews</p>
							</div>
							<div className='menu-option'>
								<img src={comments} alt='star' />
								<p>Comments</p>
							</div>
							<div className='menu-option'>
								<img src={restaurant} alt='star' />
								<p>Restaurants</p>
							</div>
							<div className='menu-option'>
								<img src={edit} alt='star' />
								<p>Edit profile</p>
							</div>
						</div>
					</div>
					<div className='user-content'>
						<ReviewUserProfile>
							<h2>Reviews</h2>
							<section className='review-user-profile'>
								<div className='review-details-user-profile'>
									<p>Restaurant Name</p>
									<p className='ratings'>
										<i className='fas fa-star'></i>
										<i className='fas fa-star'></i>
										<i className='fas fa-star'></i>
										<i className='fas fa-star'></i>
										<i className='fas fa-star'></i>
									</p>
									<p className='review-timestamp'>01.01.2020 - 15:30</p>
								</div>
								<div className='user-review-user-profile'>
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Consequatur harum libero pariatur obcaecati maiores velit
										nulla explicabo accusantium veritatis suscipit nobis
										reprehenderit vitae, id dolor nihil. Explicabo esse sunt
										inventore? Lorem, ipsum dolor sit amet consectetur
										adipisicing elit. Voluptatibus, nisi Lorem ipsum dolor sit
										amet consectetur adipisicing elit. Saepe, odio sit!
										Reprehenderit suscipit perspiciatis maxime temporibus quam
										quis dolor fugiat. Placeat laborum quibusdam, sit officia
										est esse reprehenderit cumque voluptate?
									</p>
								</div>
							</section>
						</ReviewUserProfile>
					</div>
					<div className='user-info'>
						<h2>About User Name</h2>
						<div className='location'>
							<h3>Location</h3>
							<p>{user.location}</p>
						</div>
						<div className='member-since'>
							<h3>Luna member since</h3>
							<p>25/10/2018</p>
						</div>
						<div className='interests'>
							<h3>Things I love</h3>
							<p>{user.things_love}</p>
						</div>
						<div className='description'>
							<h3>Description</h3>
							<p>{user.description}</p>
						</div>
					</div>
				</section>
			</Container>
		</Fragment>
	);
};

export default UserProfilePage;
