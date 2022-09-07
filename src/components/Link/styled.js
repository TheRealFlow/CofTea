import styled, {css} from 'styled-components';

const StyledLink = styled.a`
	margin: 0.5rem;
	padding: 0.4rem 1.3rem;
	border-radius: 10px;
	border: 1px solid black;
	cursor: pointer;
	${({variant}) =>
		variant === 'all' &&
		css`
			margin: 0;
			padding: 0.2rem 1rem;
			width: 6.5rem;
			font-size: 0.9rem;
			border: 1px solid black;
			color: var(--font-color);
			background-color: grey;
			text-align: center;
			box-shadow: 2px 2px 5px black;
			&:active {
				color: lightgray;
				background-color: var(--font-color);
			}
		`}
	${({variant}) =>
		variant === 'coffee' &&
		css`
			margin: 0;
			padding: 0.2rem 1rem;
			width: 6rem;
			font-size: 0.9rem;
			color: var(--font-color);
			background-color: var(--secondary-color);
			text-align: center;
			box-shadow: 2px 2px 5px black;
			&:active {
				color: var(--secondary-color);
				background-color: var(--font-color);
		`}

    ${({variant}) =>
		variant === 'tea' &&
		css`
			margin: 0;
			padding: 0.2rem 1rem;
			width: 6rem;
			font-size: 0.9rem;
			color: var(--font-color);
			background-color: var(--primary-color);
			text-align: center;
			box-shadow: 2px 2px 5px black;
			&:active {
				color: var(--primary-color);
				background-color: var(--font-color);
			}
		`}
	${({variant}) =>
		variant === 'back' &&
		css`
		margin: 0.5rem;
		padding: 0.25rem 0.5rem;
		border-radius: 10px;
		border: 1px solid black;
		font-size: .9rem;
		color: var(--font-color);
		background-color: var(--secondary-color);
		&:active {
				color: var(--secondary-color);
				background-color: var(--font-color);
		`}
	${({variant}) =>
		variant === 'counterHome' &&
		css`
			margin: 0;
			padding: 0;
			border: none;
		`}
`;

export default StyledLink;
