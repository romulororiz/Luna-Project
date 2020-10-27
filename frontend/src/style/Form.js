import styled from 'styled-components';

const Form = styled.input`
	background-color: #fff;
	border-radius: 4px;
	padding: 1.2rem;
	font-size: ${props => props.theme.fontMedium};
	height: 50px;
	width: 30%;
	z-index: 1;
	border: none;
	outline: none;
	position: relative;
`;

export default Form;
