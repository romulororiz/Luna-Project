import styled from 'styled-components';

export const NavbarWrapper = styled.nav`
	width: 100%;
	height: 80px;
	display: flex;
	align-items: center;
	/* background-color: red; */
`;

export const NavbarLeft = styled.nav`
	width: 60%;
	.logo {
		padding: 0.5rem 0 0.5rem 2rem;
	}
`;

export const NavbarRight = styled.nav`
	width: 40%;
	/* background-color: blue; */
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	height: 100%;
	.homeLink,
	.searchLink,
	.profileLink {
		display: flex;
		align-items: center;
		font-size: ${props => props.theme.fontNormal};
		color: rgba(0, 0, 0, 0.7);
		padding: 0.5rem;
		height: 100%;
		/* background-color: green; */
	}
	.active {
		border-bottom: 2px solid ${props => props.theme.orangeMain};
		color: rgba(0, 0, 0, 0.9);
	}
`;

export const BtnsWrapper = styled.div`
	display: flex;
	flex-direction: row;
	font-size: 0.8rem;
	.signUp,
	.login {
		padding: 0.8rem;
		border: 1px solid white;
		text-transform: uppercase;
		background-color: ${props => props.theme.orangeMain};
		color: #fff;
	}
	.signUp {
		padding-left: 1.2rem;
		border-top-left-radius: 50px;
		border-bottom-left-radius: 50px;
	}
	.login {
		padding-right: 1.2rem;
		border-top-right-radius: 50px;
		border-bottom-right-radius: 50px;
	}
`;
