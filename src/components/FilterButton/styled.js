import styled, {css} from 'styled-components';

const StyledFilterButton = styled.button`
	margin: 0;
	padding: 0.25rem 1.5rem;
	border-radius: 10px;
	font-size: 0.65rem;
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

export default StyledFilterButton;
