import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	margin-right: auto;
	margin-left: auto;
	@media (min-width: 576px) {
		.container {
			max-width: 540px;
		}
	}
	@media (min-width: 768px) {
		.container {
			max-width: 720px;
		}
	}
	@media (min-width: 992px) {
		.container {
			max-width: 960px;
		}
	}
	@media (min-width: 1200px) {
		.container {
			max-width: 1140px;
		}
	}

	${props => {
		if (props.bestRated) {
			return `
			width: 80%;
			margin: 50px auto;
			display: flex;
			justify-content: space-between;
			`;
		}
	}}

	${props => {
		if (props.Search) {
			return `
			width: 90%;
			margin: 0 auto;
			display: flex;
			flex-direction: row;
			justify-content: center;
			flex-wrap: wrap;
			`;
		}
	}}
`;
