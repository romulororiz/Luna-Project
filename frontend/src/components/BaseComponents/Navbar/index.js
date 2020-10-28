import React from 'react';
import { Link } from 'react-router-dom';
import { NavbarWrapper, NavbarLeft, NavbarRight, BtnsWrapper } from './style';
import logo from '../../../assets/svgs/logo.svg';
import { Container } from '../../../style/Container';

const Navbar = () => {
	// const [active, setActive] = useState(false);

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
						// onClick={() => setActive('home')}
						className='homeLink active'
						to='/'
					>
						Home
					</Link>
					<Link
						// onClick={() => {
						// 	setActive('search');
						// }}
						className='searchLink' //change it to jsx dynamic
						to='/search'
					>
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
};

export default Navbar;
