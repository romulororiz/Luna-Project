import React, { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Footer from '../../BaseComponents/Footer';
import Navbar from '../../BaseComponents/Navbar';
import { LoginWrapper } from './style';
import { userLoginAction } from '../../../store/Actions/userLoginAction';

const LoginPage = () => {
	const dispatch = useDispatch();
	let history = useHistory();
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const loginHandler = async event => {
		const user = await dispatch(
			userLoginAction({
				username: username,
				password: password,
			})
		).then(() => {
			if (localStorage) {
				history.push('/');
			}
        });
        console.log('user', user)

	};

	return (
		<Fragment>
			<Navbar />
			<LoginWrapper>
				<div className='LoginContainerWrapper'>
					<div className='inputs'>
						<input
							className='username'
							placeholder='Username'
							onChange={event => setUsername(event.target.value)}
						/>
						<input
							type='password'
							className='password'
							placeholder='Password'
							onChange={event => setPassword(event.target.value)}
						/>
					</div>

					<div className='btn-container'>
						<button
							type='submit'
							className='button'
							id='login'
							onClick={loginHandler}
						>
							Login
						</button>
					</div>
				</div>
			</LoginWrapper>
			<Footer />
		</Fragment>
	);
};

export default LoginPage;
