import styled from 'styled-components';
import showcase from '../../../assets/images/showcase.jpg';
import restaurantProfileBanner from '../../../assets/images/restaurant-profile.jpg';
import userProfileBanner from '../../../assets/images/user-profile-banner.jpg';

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

	${props => {
		if (props.restaurantProfile) {
			return `
			background: url(${restaurantProfileBanner});
			min-height: 500px;
			background-attachment: static;
			background-position: center;
			background-size: cover;
			.overlay {
				content: '';
				position: absolute;
				top: 0;
				left: 0;
				min-height: 250px;
				width: 100%;
				background: rgba(0, 0, 0, 0.7);
				z-index: 1;
				> .restaurant-info {
					width: 30%;
					display: inline-block;
					margin: 60px 120px;
					> h1 {
						margin: 10px 0;
					}
					> p {
						font-size: ${props.theme.fontMedium};
						margin: 10px 0;
					}
					.ratings > i {
						font-size: ${props.theme.fontNormal};
						margin: 10px 4px;
						color: ${props.theme.yellowMain};
					}
					.ratings > span {
						margin-left: 20px;
					}
				}
			}
			`;
		}
	}}

	${props => {
		if (props.userProfile) {
			return `
			background: url(${userProfileBanner});
			min-height: 220px;
			background-attachment: static;
			background-position: center left;
			background-size: stretch;
			position: relative;
			.overlay {
				content: '';
				position: absolute;
				top: 0;
				left: 0;
				min-height: 220px;
				width: 100%;
				background: rgba(0, 0, 0, 0.55);
				z-index: 1;
			}
			
			.showcase-text {
				position: absolute;
				z-index: 1;
				top: 45%;
				left: 24%;
				p {
					padding: 3px 0;
				}
			}
			`;
		}
	}}
`;
