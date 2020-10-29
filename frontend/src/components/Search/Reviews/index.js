import React, { Fragment } from 'react';
import { ReviewInfo } from './style';
import avatar from '../../../assets/images/avatar.png';
import Btn from '../../../style/Button';

const ReviewSingle = ({ review }) => {
	
	const fullName = `${review.user.first_name} ${review.user.last_name}`;

	return (
		<Fragment>
			<ReviewInfo>
				<section className='user-info'>
					<img className='avatar' src={avatar} alt='' />
					<div className='user-details'>
						<p>{fullName}</p>
						<p>Total reviews user</p>
					</div>
				</section>
				<div className='user-review'>
					<p>{review.restaurant.name}</p>
					<p>{review.text_content}</p>
				</div>
				<section className='action-buttons'>
					<Btn btnLike>
						<i class='fas fa-thumbs-up'></i>like <span>20</span>
					</Btn>
					<Btn btnComment>
						Comment <span>40</span>
					</Btn>
				</section>
				<section className='review-comments'>
					<p>Latest Comments:</p>
					<div className='user-comment'>
						<p>User Name</p>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
					</div>
					<div className='user-comment'>
						<p>User Name</p>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
					</div>
				</section>
			</ReviewInfo>
		</Fragment>
	);
};

export default ReviewSingle;
