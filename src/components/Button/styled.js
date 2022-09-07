import styled, {css} from 'styled-components';

const StyledButton = styled.button`
	margin: 0.5rem;
	padding: 0.5rem 0.5rem;
	border-radius: 10px;
	background-color: var(--accent-color);
	color: var(--font-color);
	cursor: pointer;
	${({variant}) =>
		variant === 'default' &&
		css`
			grid-area: button;
			border: 1px solid black;
			font-weight: 500;
			box-shadow: 2px 2px 10px black;
			&:active {
				color: var(--accent-color);
				background-color: var(--font-color);
			}
		`}
	${({variant}) =>
		variant === 'detail' &&
		css`
			padding: 0.5rem 1.75rem;
			margin: 1rem;
			border: 1px solid black;
			font-size: 1rem;
			font-weight: 500;
			box-shadow: 2px 2px 10px black;
			&:active {
				color: var(--accent-color);
				background-color: var(--font-color);
			}
		`}
		${({variant}) =>
		variant === 'checkout' &&
		css`
			font-size: 1rem;
			font-weight: 500;
			margin-top: 2.5rem;
			padding: 0.75rem 2.25rem;
			border: 1px solid black;
			background-color: var(--primary-color);
			&:active {
				color: var(--primary-color);
				background-color: var(--font-color);
			}
		`}
		${({variant}) =>
		variant === 'plus-counter' &&
		css`
			grid-area: plus-counter;
			background-color: transparent;
			border: none;
			margin: 0;
			text-align: right;
		`}
		${({variant}) =>
		variant === 'minus-counter' &&
		css`
			grid-area: minus-counter;
			background-color: transparent;
			border: none;
			margin: 0;
			text-align: left;
		`}
`;

export default StyledButton;
