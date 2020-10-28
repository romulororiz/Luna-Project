import styled from 'styled-components';

export const RestaurantInfo = styled.section`
	height: 100%;
	width: 25%;
	max-width: 300px;
	margin: 0 1% 1.5% 1%;
	text-align: center;
	background-color: #fff !important;
	border-radius: 5px;
	-webkit-box-shadow: 0px 0px 32px -9px rgba(0, 0, 0, 0.75);
	-moz-box-shadow: 0px 0px 32px -9px rgba(0, 0, 0, 0.75);
	box-shadow: 0px 0px 32px -9px rgba(0, 0, 0, 0.75);

	.restaurant-info {
		padding: 0.8rem;
		text-align: left;
		border-radius: 5px;
		border-top: 5px solid ${props => props.theme.orangeMain};
		p {
			margin: 6px 0;
			i {
				margin: 0 2px;
				color: ${props => props.theme.yellowMain};
			}
			i:nth-child(1) {
				margin-left: 0;
			}
			span {
				float: right;
			}
		}

		p:nth-child(1) {
			font-size: ${props => props.theme.fontMedium};
		}
	}

	.restaurantMockupImg {
		width: 100%;
		height: 100%;
		border-bottom-left-radius: 5px;
		border-bottom-right-radius: 5px;
	}
`;
