import React, { Fragment } from 'react';
import { ReviewInfo } from './style';
import avatar from '../../../assets/images/avatar.png';
import Btn from '../../../style/Button';

const ReviewSingle = () => {
	return (
		<Fragment>
			<ReviewInfo>
				<section className='user-info'>
					<img className='avatar' src={avatar} alt='' />
					<div className='user-details'>
						<p>User Name</p>
						<p>User total reviews</p>
					</div>
				</section>
				<div className='user-review'>
					<p>Restaurant Name</p>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro
						tempore ipsa cum ex officia debitis illum, placeat reiciendis.
						Porro, vel. Lorem, ipsum dolor sit amet consectetur adipisicing
						elit. Porro tempore ipsa cum ex officia debitis illum, placeat
						reiciendis. Porro, vel.Lorem, ipsum dolor sit amet consectetur
						adipisicing elit. Porro tempore ipsa cum ex officia debitis illum,
						placeat reiciendis. Porro, vel. Lorem, ipsum dolor sit amet
						consectetur adipisicing elit. Porro tempore ipsa cum ex officia
						debitis illum, placeat reiciendis. Porro, vel.Lorem, ipsum dolor sit
						amet consectetur adipisicing elit. Porro tempore ipsa cum ex officia
						debitis illum, placeat reiciendis. Porro, vel. Lorem, ipsum dolor
						sit amet consectetur adipisicing elit. Porro tempore ipsa cum ex
						officia debitis illum, placeat reiciendis. Porro, vel.
					</p>
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
					<div className='user-comments'>
						<p>User Name</p>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
					</div>
				</section>
			</ReviewInfo>
		</Fragment>
	);
};

export default ReviewSingle;
