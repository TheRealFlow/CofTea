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
	padding: 0.6rem;
	animation: drop-in 500ms;
	animation-name: drop-in;
	border-top: 10px solid burlywood;
	border-radius: 8px;
	background-color: var(--primary-color);
	box-shadow: rgba(0, 0, 0, 0.45) 0 55px 10px -40px;

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
