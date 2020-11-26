import styled from 'styled-components';

export const LoginWrapper = styled.section`
	width: 100%;
	height: 74.9vh;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;

	.LoginContainerWrapper {
		margin: 0 auto;
		width: 30%;
		height: 40%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.username,
	.password {
        background: blue;
		background-color: #fff;
		border-radius: 4px;
		padding: 1.2rem;
        margin: .5rem;
        border: 1px solid rgba(0, 0, 0, .15);
		font-size: ${props => props.theme.fontNormal};
		height: 30px;
		width: 60%;
		outline: none;
	}

	.button {
		appearance: none;
		outline: none;
		font-size: ${props => props.theme.fontMedium};
		border-radius: 100px;
		border: none;
		cursor: pointer;
		color: #fff;
		background: ${props => props.theme.orangeMain};
		padding: .6rem 2rem;
        margin-top: .8rem;
		letter-spacing: 1px;
		font-size: ${props => props.theme.fontNormal};
	}
`;
