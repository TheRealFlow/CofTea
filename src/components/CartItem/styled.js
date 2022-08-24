import styled from 'styled-components';

const StyledCartItem = styled.li`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 90%;
	margin: 0.5rem;
	padding: 0.5rem;
	border: 1px solid black;
	border-radius: 10px;
	background-color: lightslategray;
	img {
		border-radius: 10px;
	}
`;

export default StyledCartItem;
