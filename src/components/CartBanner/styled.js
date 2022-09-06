import styled from 'styled-components';

const StyledCartBanner = styled.div`
	display: flex;
	position: fixed;
	z-index: 100;
	top: 5.5rem;
	align-items: center;
	justify-content: center;
	width: 100vw;
	margin-bottom: 1rem;
	animation: drop-in 500ms;
	animation-name: drop-in;
	border-top: 10px solid var(--secondary-color);
	border-radius: 10px;
	opacity: 0.95;
	background-color: var(--primary-color);
	@keyframes drop-in {
		from {
			transform: rotate(0deg) translateY(-90%);
			opacity: 0;
		}
		to {
			transform: rotate(0deg) translateY(0%);
			opacity: 1;
		}
	}
`;
export default StyledCartBanner;
