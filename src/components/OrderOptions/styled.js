import styled from 'styled-components';

const StyledOrderOptions = styled.div`
	display: flex;
	justify-content: center;
	width: 80vw;
	margin: 0.5rem;
	padding: 0.75rem;
	border: 2px solid burlywood;
	border-radius: 10px;
	label {
		font-weight: bold;
	}
	input {
		margin-left: 2rem;
		transform: scale(1.5);
	}
`;

export default StyledOrderOptions;
