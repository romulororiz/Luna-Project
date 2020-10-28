import React, { Fragment } from 'react';
import { UserInfo } from './style';
import avatar from '../../../assets/images/avatar.png';

const Users = () => {
	return (
		<Fragment>
			<UserInfo>
				<section className='user-info'>
					<img className='avatar' src={avatar} alt='' />
					<div className='user-details'>
						<p>User Name</p>
						<p>User total reviews</p>
					</div>
				</section>
				<div className='user-bio'>
					<p>About me</p>
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
			</UserInfo>
		</Fragment>
	);
};

export default Users;
