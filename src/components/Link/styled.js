import styled, {css} from 'styled-components';

const StyledLink = styled.a`
	margin: 0.5rem;
	padding: 0.25rem 0.5rem;
	border-radius: 10px;
	border: 1px solid black;
	cursor: pointer;
	${({variant}) =>
		variant === 'all' &&
		css`
			margin: 0;
			padding: 0.25rem 1.5rem;
			font-size: 0.65rem;
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
			margin: 0;
			padding: 0.25rem 1.5rem;
			font-size: 0.65rem;
			color: white;
			background-color: brown;

			&:active {
				color: black;
				background-color: lightgray;
		`}

    ${({variant}) =>
		variant === 'tea' &&
		css`
			margin: 0;
			padding: 0.25rem 1.5rem;
			font-size: 0.65rem;
			color: white;
			background-color: olive;

			&:active {
				color: black;
				background-color: lightgray;
			}
		`}
		${({variant}) =>
		variant === 'checkout' &&
		css`
			color: white;
			background-color: lightgreen;
		`}
`;

export default StyledLink;
