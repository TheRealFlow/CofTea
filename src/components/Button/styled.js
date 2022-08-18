import styled, {css} from 'styled-components';

const StyledButton = styled.button`
	padding: 0.25rem 0.5rem;
	border-radius: 10px;
	background-color: burlywood;
	${({variant}) =>
		variant === 'default' &&
		css`
			border: 1px solid black;
			color: black;
			background-color: none;

			&:active {
				color: white;
				background-color: green;
			}
		`}

	${({variant}) =>
		variant === 'added' &&
		css`
			color: white;
			background-color: green;
		`}

    ${({variant}) =>
		variant === 'delete' &&
		css`
			color: white;
			background-color: red;
		`}
`;

export default StyledButton;
