import styled from 'styled-components';

const StyledHeader = styled.header`
	display: flex;
	position: fixed;
	z-index: 100;
	top: 0;
	align-items: center;
	justify-content: space-around;
	width: 100vw;
	padding: 0.5rem;
	background-image: url('./../background-image.jpg');
	h1 {
		color: var(--accent-color);
		font-size: xx-large;
	}
`;

export default StyledHeader;
