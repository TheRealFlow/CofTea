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
	border-bottom: 2px solid var(--accent-color);
	border-radius: 10px;
	opacity: 0.9;
	background-color: var(--primary-color);
	box-shadow: rgba(50, 50, 93, 0.25) 0 30px 60px -12px inset,
		rgba(0, 0, 0, 0.3) 0 18px 36px -18px inset;
	img {
		border-radius: 10px;
	}
`;

export default StyledProductCard;
