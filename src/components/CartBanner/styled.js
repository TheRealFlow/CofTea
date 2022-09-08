import styled from 'styled-components';

const StyledCartBanner = styled.div`
	display: flex;
	position: fixed;
	z-index: 100;
	top: 3.75rem;
	align-items: center;
	justify-content: center;
	width: 100vw;
	margin-bottom: 1rem;
	border-bottom-right-radius: 10px;
	border-bottom-left-radius: 10px;
	background-color: var(--accent-color);
`;
export default StyledCartBanner;
