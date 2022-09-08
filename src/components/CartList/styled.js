import styled from 'styled-components';

const StyledCartList = styled.ul`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 8rem;
	padding: 0;
	animation: slide-in 500ms ease-out;
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

export default StyledCartList;
