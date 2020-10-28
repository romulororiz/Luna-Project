import React from 'react';
import { Link } from 'react-router-dom';
import {
	FooterWrapper,
	TopFooter,
	BottomFooter,
	FooterLinks,
	FooterSocial,
} from './style';
import { Container } from '../../../style/Container';

const Footer = () => {
	return (
		<Container>
			<FooterWrapper>
				<TopFooter>
					<FooterLinks>
						<Link className='footer-link' to='#'>
							About Us
						</Link>
						<Link className='footer-link' to='#'>
							Press
						</Link>
						<Link className='footer-link' to='#'>
							Blog
						</Link>
						<Link className='footer-link' to='#'>
							iOS
						</Link>
						<Link className='footer-link' to='#'>
							Android
						</Link>
					</FooterLinks>
					<FooterSocial>
						<i className='fab fa-facebook-f social-link'></i>
						<i className='fab fa-twitter social-link'></i>
						<i className='fab fa-google-plus-g social-link'></i>
						<i className='fab fa-instagram social-link'></i>
					</FooterSocial>
				</TopFooter>
				<BottomFooter>&copy; Copyright Luna 2020</BottomFooter>
			</FooterWrapper>
		</Container>
	);
};

export default Footer;
