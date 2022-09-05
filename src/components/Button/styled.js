import styled, {css} from 'styled-components';

const StyledButton = styled.button`
	margin: 0.5rem;
	padding: 0.25rem 0.5rem;
	border-radius: 10px;
	background-color: burlywood;
	${({variant}) =>
		variant === 'default' &&
		css`
			grid-area: button;
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
		variant === 'checkout' &&
		css`
			color: white;
			background-color: lightgreen;
		`}
		${({variant}) =>
		variant === 'plus-counter' &&
		css`
			grid-area: plus-counter;
			background-color: transparent;
			border: none;
		`}
		${({variant}) =>
		variant === 'minus-counter' &&
		css`
			grid-area: minus-counter;
			background-color: transparent;
			border: none;
		`}
`;

export default StyledButton;
