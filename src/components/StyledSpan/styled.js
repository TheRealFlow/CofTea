import styled, {css} from 'styled-components';

const StyledSpan = styled.span`
	width: 80vw;
	margin: 0.5rem;
	padding: 0.75rem;
	border: 2px solid burlywood;
	border-radius: 10px;
	font-weight: bold;
	${({variant}) =>
		variant === 'hidden' &&
		css`
			display: none;
		`}
	${({variant}) =>
		variant === 'cart-counter' &&
		css`
			padding: 0.6rem;
			color: var(--accent-color);
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
`;

export default StyledSpan;
