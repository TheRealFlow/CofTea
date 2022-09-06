import styled from 'styled-components';

const StyledFilterBar = styled.section`
	display: flex;
	position: fixed;
	z-index: 100;
	top: 4rem;
	align-items: center;
	justify-content: space-around;
	width: 100vw;
	margin: 0;
	padding: 0.5rem;
	border-top: 1px solid var(--accent-color);
	border-bottom: 1px solid var(--accent-color);
	background-color: var(--secondary-color);
`;

export default StyledFilterBar;
