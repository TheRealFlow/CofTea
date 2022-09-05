import styled from 'styled-components';

const StyledCartItem = styled.li`
	display: grid;
	grid-template-areas:
		'image name name quantity'
		'image plus-counter price minus-counter';
	grid-template-columns: repeat(4, 1fr);
	grid-template-rows: repeat(2, 1fr);
	align-items: center;
	width: 97%;
	margin: 0.5rem;
	padding: 0.5rem;
	border: 1px solid black;
	border-radius: 10px;
	background-color: lightslategray;
	text-align: center;
	img {
		border-radius: 10px;
	}
`;

export default StyledCartItem;
