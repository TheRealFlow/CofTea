import styled, {css} from 'styled-components';

const StyledButton = styled.button`
	margin: 0.5rem;
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

			&:active {
				color: black;
				background-color: white;
			}
		`}
		${({variant}) =>
		variant === 'all' &&
		css`
			border: 1px solid black;
			color: white;
			background-color: grey;

			&:active {
				color: black;
				background-color: lightgray;
			}
		`}

	${({variant}) =>
		variant === 'coffee' &&
		css`
			color: white;
			background-color: brown;

			&:active {
				color: black;
				background-color: lightgray;
		`}

    ${({variant}) =>
		variant === 'tea' &&
		css`
			color: white;
			background-color: olive;

			&:active {
				color: black;
				background-color: lightgray;
			}
		`}
`;

export default StyledButton;
