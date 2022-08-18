import styled from 'styled-components';

const StyledProductCard = styled.li`
	position: relative;
	width: 90%;
	margin: 0.5rem;
	padding: 0.5rem;
	border: 1px solid black;
	border-radius: 10px;
	background-color: lightslategray;
	h1 {
		position: absolute;
		top: 0.25rem;
		right: 1rem;
		color: white;
		color: whitesmoke;
		font-size: 1.1rem;
	}
	h2 {
		position: absolute;
		top: 2.25rem;
		right: 1rem;
		color: white;
		font-size: 1rem;
	}
	img {
		position: absolute;
		top: 0;
		left: 0;
		border-radius: 10px;
	}
`;

export default StyledProductCard;
