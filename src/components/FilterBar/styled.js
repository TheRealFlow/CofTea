import styled from 'styled-components';

const StyledFilterBar = styled.section`
	display: flex;
	position: fixed;
	z-index: 100;
	top: 4.75rem;
	align-items: center;
	justify-content: space-around;
	width: 100vw;
	margin: 0;
	padding: 0.35rem;
	border-bottom-right-radius: 10px;
	border-bottom-left-radius: 10px;
	background-color: var(--accent-color);
`;

export default StyledFilterBar;
