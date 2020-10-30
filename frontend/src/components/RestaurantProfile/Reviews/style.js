import styled from 'styled-components';

export const ReviewRestaurantProfile = styled.section`
	/* height: 100%; */
	margin: 4% 0;
	width: 100%;
	text-align: center;
	background-color: #fff !important;
	border-radius: 5px;
	-webkit-box-shadow: 0px 0px 32px -9px rgba(0, 0, 0, 0.75);
	-moz-box-shadow: 0px 0px 32px -9px rgba(0, 0, 0, 0.75);
	box-shadow: 0px 0px 32px -9px rgba(0, 0, 0, 0.75);

	.user-info-restaurant-profile {
		text-align: left;
		border-top: 5px solid ${props => props.theme.orangeMain};
		border-top-left-radius: 5px;
		border-top-right-radius: 5px;
		display: flex;
		flex-direction: row;
		border-bottom: 1px solid rgba(0, 0, 0, 0.25);

		.avatar {
			width: 20%;
			height: 20%;
		}

		p:nth-child(1) {
			font-size: ${props => props.theme.fontMedium};
		}
		.ratings {
			display: flex;
			align-items: center;
			padding: 0 1.5rem;
			i {
				margin: 0 0.2rem;
				font-size: ${props => props.theme.fontLarge};
				color: ${props => props.theme.yellowMain};
			}
		}
		.review-timestamp {
			padding: 0.8rem;
			width: 30%;
			display: flex;
			justify-content: flex-end;
		}
	}

	.user-details-restaurant-profile {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		padding: 0.5rem;
		justify-content: center;

		p {
			margin: 0.2rem 0;
		}
		p:nth-child(1) {
			color: ${props => props.theme.orangeMain};
			font-weight: bold;
		}
	}

	.user-review-restaurant-profile {
		padding: 0.8rem;
		text-align: left;

		p {
			margin: 0.4rem 0;
			padding: 0.9rem;
			width: 100%;
			height: 110px;
			overflow: auto;
			text-align: justify;
			::-webkit-scrollbar {
				width: 0.3rem;
			}

			::-webkit-scrollbar-track {
				background: #f1f1f1;
			}

			::-webkit-scrollbar-thumb {
				background: ${props => props.theme.orangeMain};
			}

			::-webkit-scrollbar-thumb:hover {
				background: #e36202;
			}
		}
	}

	/* .action-buttons {
		display: flex;
		margin-bottom: 1rem;
		margin-top: -0.1rem;
		flex-direction: row;
		justify-content: center;
		i,
		span {
			margin: 0 0.4rem;
		}
	}

	.review-comments {
		padding: 0.2rem 1rem 1rem 1rem;
		text-align: left;
		> p {
			font-size: ${props => props.theme.fontMedium};
			margin-bottom: 0.3rem;
		}
	}

	.user-comment {
		padding: 0.4rem;
		p {
			margin: 0.1rem 0;
		}
		p:nth-child(1) {
			color: ${props => props.theme.orangeMain};
			font-weight: bold;
		}
		p:nth-child(2) {
			margin-top: 0.3rem;
		}
	} */
`;
