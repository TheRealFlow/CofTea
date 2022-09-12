import styled from 'styled-components';

const StyledProductList = styled.ul`
	display: flex;
	position: absolute;
	top: 15%;
	flex-direction: column;
	align-items: center;
	width: 100%;
	padding: 0;
	animation: slide-in 650ms ease-out;
	list-style: none;
	@keyframes slide-in {
		0% {
			transform: translateY(100%);
		}
		100% {
			transform: translateY(0);
		}
	}
	@media (min-width: 420px) {
		margin-top: 0;
	}
`;

export default StyledProductList;
