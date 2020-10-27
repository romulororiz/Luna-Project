import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../../style/theme';
import { NavbarWrapper, NavbarLeft, NavbarRight, BtnsWrapper } from './style';
import logo from '../../assets/svgs/logo.svg';

function Navbar() {
	return (
		<Container className='container'>
			<NavbarWrapper>
				<NavbarLeft>
					<Link to='/'>
						<img className='logo' src={logo} alt='logo' />
					</Link>
				</NavbarLeft>
				<NavbarRight>
					<Link className='homeLink active' to='/'>
						Home
					</Link>
					<Link className='searchLink' to='#'>
						Search
					</Link>
					<Link className='profileLink' to='#'>
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
}

export default Navbar;
