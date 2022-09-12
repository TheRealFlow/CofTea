import styled from 'styled-components';

const StyledHeader = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-around;
	width: 100vw;
	height: 10vh;
	background-color: var(--accent-color);
	h1 {
		margin-right: 0.8rem;
		color: var(--primary-color);
		font-size: xx-large;
		text-shadow: 0 2px 10px rgba(0, 0, 0, 1);
	}
`;

export default StyledHeader;
