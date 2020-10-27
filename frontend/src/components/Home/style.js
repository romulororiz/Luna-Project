import styled from 'styled-components';

export const TitleBestRated = styled.section`
	width: 100%;
	margin: 50px 0;
	text-align: center;

	.title-best-rated {
		margin: 0 auto;
		padding: 0 0 8px 0;
		width: 30%;
		font-size: ${props => props.theme.fontLarge};
		color: rgba(0, 0, 0, 0.75);
		font-weight: bold;
		text-transform: uppercase;
		position: relative;
	}
	.title-best-rated:before {
		content: '';
		position: absolute;
		width: 50%;
		height: 1px;
		bottom: 0;
		left: 25%;
		border-bottom: 2px solid ${props => props.theme.orangeMain};
	}
`;
