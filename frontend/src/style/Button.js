import styled from 'styled-components';

const Btn = styled.button`
	appearance: none;
	outline: none;
	font-size: ${props => props.theme.fontMedium};
	padding: 12px 28px;
	border-radius: 100px;
	border: 2px solid ${props => props.theme.orangeMain};
	cursor: pointer;

	${props => {
		if (props.showcase) {
			return `
			color: #fff;
			background: ${props.theme.orangeMain};
			position: relative;
			padding: 12px 46px;
			z-index: 1;
			margin-left: 12px;
			`;
		}
	}}
`;

export default Btn;
