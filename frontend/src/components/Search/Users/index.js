import React, { Fragment } from 'react';
import { UserInfo } from './style';
import avatar from '../../../assets/images/avatar.jpg';

const UserSingle = ({ user }) => {
	const fullName = `${user.first_name} ${user.last_name}`;

	return (
		<Fragment>
			<UserInfo>
				<section className='user-info'>
					<img className='avatar' src={user.profile_picture} alt='' />
					<div className='user-details'>
						<p>{fullName}</p>
						<p>User total reviews</p>
					</div>
				</section>
				<div className='user-bio'>
					<p>About me</p>
					<p>{user.description}</p>
				</div>
			</UserInfo>
		</Fragment>
	);
};

export default UserSingle;
