import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavbarWrapper, NavbarLeft, NavbarRight, BtnsWrapper } from './style';
import logo from '../../../assets/svgs/logo.svg';
import { Container } from '../../../style/Container';

const Navbar = () => {
	const [active, setActive] = useState('home');

	return (
		<Container>
			<NavbarWrapper>
				<NavbarLeft>
					<Link to='/'>
						<img className='logo' src={logo} alt='logo' />
					</Link>
				</NavbarLeft>
				<NavbarRight>
					<Link
						className={active === 'home' ? 'homeLink active' : 'homeLink'}
						onClick={() => setActive('home')}
						to='/'
					>
						Home
					</Link>
					<Link
						className={active === 'search' ? 'searchLink active' : 'searchLink'}
						onClick={() => setActive('search')}
						to='/search'
					>
						Search
					</Link>
					<Link
						className={
							active === 'profile' ? 'profileLink active' : 'profileLink'
						}
						onClick={() => setActive('profile')}
						to='#'
					>
						Profile
					</Link>
					<BtnsWrapper>
						<Link className='signUp' to='#'>
							SignUp
						</Link>
						<Link className='login' to='#'>
							Login
						</Link>
					</BtnsWrapper>
				</NavbarRight>
			</NavbarWrapper>
		</Container>
	);
};

export default Navbar;
