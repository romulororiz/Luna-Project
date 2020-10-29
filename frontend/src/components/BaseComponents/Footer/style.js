import styled from 'styled-components';

export const FooterWrapper = styled.footer`
	height: 100px;
	width: 100%;
	margin-top: 16px;
	background-color: #fff !important;
`;

export const TopFooter = styled.footer`
	display: flex;
	width: 100%;
	height: 50%;
	padding: 1.6rem 0.8rem;
	border-bottom: 1px solid rgba(0, 0, 0, 0.15);
`;

export const FooterLinks = styled.div`
	width: 40%;
	display: flex;
	align-items: center;
	justify-content: flex-start;

	.footer-link {
		font-size: ${props => props.theme.fontNormal};
		color: ${props => props.theme.link};
		margin: 0 14px;
		:hover {
			color: ${props => props.theme.linkActive};
			transition: linear 0.12s;
		}
	}
	.footer-link:nth-child(1) {
		margin-left: 0;
	}
`;

export const FooterSocial = styled.div`
	width: 60%;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	.social-link {
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0 10px;
		width: 32px;
		height: 32px;
		padding: 8px;
		border-radius: 50%;
		font-size: ${props => props.theme.fontNormal};
		background-color: #fff;
		border: 1.5px solid rgba(0, 0, 0, 0.45);
		color: ${props => props.theme.link};
		cursor: pointer;
		:hover {
			color: ${props => props.theme.linkActive};
			transition: linear 0.12s;
			border: 1.5px solid ${props => props.theme.linkActive};
		}
	}
	.social-link:nth-child(4) {
		margin-right: 0;
	}
`;

export const BottomFooter = styled.footer`
	height: 50%;
	display: flex;
	font-size: 0.7rem;
	justify-content: flex-start;
	color: rgba(0, 0, 0, 0.55);
	padding: 1rem 0.8rem;
`;
