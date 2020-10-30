import styled from 'styled-components';

export const ReviewUserProfile = styled.section`
	width: 100%;
	text-align: left;
	background-color: #fff !important;
	padding: 12px;

	.review-user-profile {
		text-align: left;
		border-top-left-radius: 5px;
		border-top-right-radius: 5px;
		display: flex;
		flex-direction: column;
		position: relative;

		.user-review-user-profile {
			padding: 15px;
		}

		.review-details-user-profile p {
			margin: 12px 0;
			font-size: ${props => props.theme.fontMedium};
		}

		.review-timestamp {
			position: absolute;
			top: 5px;
			right: 5px;
		}

		.ratings {
			display: flex;
			align-items: center;
			i {
				margin: 0 0.2rem;
				font-size: ${props => props.theme.fontMedium};
				color: ${props => props.theme.yellowMain};
			}
		}

		.user-review-user-profile p {
			text-align: justify;
		}
	}
`;
