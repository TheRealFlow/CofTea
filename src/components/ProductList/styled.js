import styled from 'styled-components';

const StyledProductList = styled.ul`
	display: flex;
	position: relative;
	top: 7.5rem;
	flex-direction: column;
	align-items: center;
	margin: 0;
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
`;

export default StyledProductList;
