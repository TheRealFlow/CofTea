import styled from 'styled-components';

const StyledProductCard = styled.li`
	display: grid;
	grid-template-areas:
		'image name button'
		'image price info';
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: 2fr 1fr;
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

export default StyledProductCard;
