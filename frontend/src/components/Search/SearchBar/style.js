import styled from 'styled-components';

export const SearchBarWrapper = styled.section`
	display: flex;
	justify-content: space-between;
	height: 40px;
	width: 100%;
	background-color: #fff;
	border-top: 1px solid rgba(0, 0, 0, 0.15);
`;

export const CategoryField = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 20%;
	height: 100%;
	font-size: ${props => props.theme.fontNormal};
	color: rgba(0, 0, 0, 0.65);
	background-color: #fff;
	cursor: pointer;
	border-left: 1px solid rgba(0, 0, 0, 0.15);
	.dropdown {
		position: relative;
		width: 100%;
		height: 100%;
		text-align: center;
		top: 50%;
		transform: translateY(-25%);
	}
	i {
		margin-left: 8px;
	}
	.dropdown-content {
		display: none;
		text-align: left;
		width: 100%;
		position: absolute;
		top: 30px;
		background-color: #f9f9f9;
		min-width: 160px;
		box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
		padding: 12px 16px;
		z-index: 1;
		p {
			padding: 10px 0;
		}
	}

	.dropdown:hover .dropdown-content {
		display: block;
	}
`;
