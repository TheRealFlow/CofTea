import styled, {css} from 'styled-components';

const StyledSpan = styled.span`
	color: var(--accent-color);
	${({variant}) =>
		variant === 'show' &&
		css`
			width: 90vw;
			margin: 0.5rem;
			padding: 0.75rem;
			border: 1px solid var(--accent-color);
			border-radius: 10px;
			font-size: 1.1rem;
			text-align: center;
		`}
	${({variant}) =>
		variant === 'hidden' &&
		css`
			display: none;
		`}
	${({variant}) =>
		variant === 'cart-counter' &&
		css`
			padding: 0.6rem;
			font-weight: bold;
			color: var(--font-color);
		`}
	${({variant}) =>
		variant === 'badge-counter' &&
		css`
			display: inline-block;
			margin: -1rem;
			height: 1.25rem;
			width: 1.25rem;
			font-size: 0.8rem;
			color: var(--font-color);
			background-color: var(--primary-color);
			border-radius: 50%;
			text-align: center;
			border: 1px solid var(--font-color);
		`}
	${({variant}) =>
		variant === 'comment-counter' &&
		css`
			font-size: 0.8rem;
			text-align: right;
		`}
	${({variant}) =>
		variant === 'cof' &&
		css`
			padding-left: 0.6rem;
			letter-spacing: 0.1rem;
			color: var(--secondary-color);
			font-size: 2.5rem;
			font-weight: bold;
			text-shadow: 0 1px 25px var(--primary-color);
		`}
	${({variant}) =>
		variant === 'tea' &&
		css`
			padding-right: 0.6rem;
			letter-spacing: 0.1rem;
			color: var(--primary-color);
			font-size: 2.5rem;
			font-weight: bold;
			text-shadow: 0 1px 25px var(--secondary-color);
		`}
	${({variant}) =>
		variant === 'empty-cart' &&
		css`
			position: fixed;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			font-size: 1rem;
			font-weight: bold;
			text-align: center;
		`}
		${({variant}) =>
		variant === 'select' &&
		css`
			margin-bottom: 1rem;
			font-size: 1.1rem;
			text-align: center;
		`}
`;

export default StyledSpan;
