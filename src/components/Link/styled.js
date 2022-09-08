import styled, {css} from 'styled-components';

const StyledLink = styled.a`
	margin: 0.5rem;
	padding: 0.4rem 1.3rem;
	border-radius: 10px;
	cursor: pointer;
	${({variant}) =>
		variant === 'all' &&
		css`
			margin: 0;
			padding: 0.2rem 1rem;
			width: 6.5rem;
			font-size: 0.9rem;
			color: var(--font-color);
			background-color: var(--accent-color);
			text-align: center;
			box-shadow: 0 1px 10px rgba(250, 250, 250, 0.15);
			&:active {
				color: var(--accent-color);
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
			background-color: var(--accent-color);
			text-align: center;
			box-shadow: 0 1px 10px rgba(250, 250, 250, 0.15);
			&:active {
				color: var(--accent-color);
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
			background-color: var(--accent-color);
			text-align: center;
			box-shadow: 0 1px 10px rgba(250, 250, 250, 0.15);
			&:active {
				color: var(--accent-color);
				background-color: var(--font-color);
			}
		`}
	${({variant}) =>
		variant === 'back' &&
		css`
		margin: 0.5rem;
		padding: 0.5rem 0.75rem;
		border-radius: 10px;
		border: none;
		font-size: .9rem;
		color: var(--font-color);
		background-color: var(--accent-color);
		box-shadow: 0 2px 15px rgba(0, 0, 0, 0.5);
		&:active {
				color: var(--accent-color);
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
