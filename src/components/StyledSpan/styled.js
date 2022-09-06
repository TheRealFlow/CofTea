import styled, {css} from 'styled-components';

const StyledSpan = styled.span`
	color: var(--accent-color);
	${({variant}) =>
		variant === 'show' &&
		css`
			width: 90vw;
			margin: 0.5rem;
			padding: 0.75rem;
			border: 2px solid burlywood;
			border-radius: 10px;
			font-size: 1.1rem;
			letter-spacing: 0.1rem;
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
		`}
	${({variant}) =>
		variant === 'badge-counter' &&
		css`
			display: inline-block;
			margin: 0;
			padding: 0;
			width: 20px;
			line-height: 20px;
			font-size: small;
			background-color: lightsteelblue;
			border-radius: 50%;
			text-align: center;
		`}
	${({variant}) =>
		variant === 'comment-counter' &&
		css`
			letter-spacing: 0.1rem;
			text-align: right;
		`}
	${({variant}) =>
		variant === 'cof' &&
		css`
			letter-spacing: 0.1rem;
			color: var(--primary-color);
			font-size: 2rem;
			font-weight: bold;
		`}
	${({variant}) =>
		variant === 'tea' &&
		css`
			letter-spacing: 0.1rem;
			color: var(--secondary-color);
			font-size: 2rem;
			font-weight: bold;
		`}
	${({variant}) =>
		variant === 'empty-cart' &&
		css`
			position: fixed;
			top: 14rem;
			margin: 0.5rem;
			color: var(--accent-color);
			font-size: 1.2rem;
			font-weight: bold;
			letter-spacing: 0.1rem;
			text-align: center;
		`}
`;

export default StyledSpan;
