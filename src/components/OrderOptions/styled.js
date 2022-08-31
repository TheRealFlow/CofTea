import styled from 'styled-components';

const StyledOrderOptions = styled.fieldset`
	display: inline-flex;
	justify-content: space-evenly;
	width: 80vw;
	margin: 0.5rem;
	padding: 0.75rem;
	border: 2px solid burlywood;
	border-radius: 10px;
	label {
		font-weight: bold;
	}
	input {
		margin-left: 1rem;
		transform: scale(1.3);
	}
`;

export default StyledOrderOptions;
