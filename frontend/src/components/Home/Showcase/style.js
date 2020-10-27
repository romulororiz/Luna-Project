import styled from 'styled-components';
import showcase from '../../../assets/images/showcase.jpg';

export const ShowcaseHome = styled.section`
	background: url(${showcase});
	background-repeat: no-repeat;
	background-size: cover;
	background-attachment: fixed;
	background-position: top center;
	position: relative;
	min-height: 500px;
	color: #fff;
	display: flex;
	align-items: center;
	justify-content: center;
	.overlay {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		min-height: 500px;
		width: 100%;
		background: rgba(0, 0, 0, 0.7);
		z-index: 1;
	}
`;
