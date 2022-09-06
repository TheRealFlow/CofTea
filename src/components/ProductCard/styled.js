import styled from 'styled-components';

const StyledProductCard = styled.li`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 90%;
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
