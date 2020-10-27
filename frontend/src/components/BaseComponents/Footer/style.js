import styled from 'styled-components';

export const FooterWrapper = styled.footer`
	height: 120px;
	width: 100%;
	padding: 0 15px;
	margin-top: 16px;
	background-color: #fff !important;
`;

export const TopFooter = styled.footer`
	display: flex;
	height: 50%;
	padding: 2rem 0;
	/* background-color: blue; */
`;

export const FooterLinks = styled.div`
	width: 40%;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	/* background-color: yellow; */
	.footer-link {
		font-size: ${props => props.theme.fontNormal};
		color: ${props => props.theme.link};
		margin: 0 14px;
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
	/* background-color: blue; */
	.social-link {
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0 14px;
		width: 40px;
		height: 40px;
		padding: 12px;
		border-radius: 50%;
		font-size: ${props => props.theme.fontMedium};
		background-color: #fff;
		border: 1.5px solid rgba(0, 0, 0, 0.45);
		color: rgba(0, 0, 0, 0.45);
		cursor: pointer;
	}
	.social-link:nth-child(4) {
		margin-right: 0;
	}
`;

export const BottomFooter = styled.footer`
	height: 50%;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	color: rgba(0, 0, 0, 0.55);
	border-top: 1px solid rgba(0, 0, 0, 0.15);
	/* background-color: red; */
`;
