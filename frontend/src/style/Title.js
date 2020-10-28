import styled from 'styled-components';

export const Title = styled.section`
	width: 100%;
	text-align: center;
	color: rgba(0, 0, 0, 0.55);
	font-size: ${props => props.theme.fontLarge};
	font-weight: bold;
	/* background-color: yellow; */

	/* HomePage */
	.title-best-rated {
		margin: 40px auto;
		text-align: center;
		padding-bottom: 8px;
		width: 20%;
		text-transform: uppercase;
		position: relative;
		/* background-color: green; */
	}

	.title-best-rated:before {
		/* background-color: red; */
		content: '';
		position: absolute;
		width: 55%;
		height: 1px;
		bottom: 0;
		left: 25%;
		border-bottom: 2px solid ${props => props.theme.orangeMain};
	}

	/* Search Page */
	.search-navigation-links {
		width: 30%;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		margin: 40px auto;
		font-weight: bold;
		text-transform: uppercase;
		padding-bottom: 8px;
		position: relative;
		/* background-color: green; */
	}

	.search-link {
		cursor: pointer;
	}

	/* .search-navigation-links:before {
		content: '';
		position: absolute;
		width: 55%;
		height: 1px;
		bottom: 0;
		left: 25%;
		border-bottom: 2px solid ${props => props.theme.orangeMain};
	} */
	/* .search-navigation-links:after {
		content: '';
		position: absolute;
		width: 100%;
		height: 1px;
		bottom: -1px;
		left: 25%;
		border-bottom: 1px solid rgba(0, 0, 0, 0.25);
	} */
	
`;
