import styled, {css} from 'styled-components';

const StyledProductPrice = styled.h3`
	grid-area: price;
	margin: 0;
	color: var(--accent-color);
	font-size: 1.1rem;
	text-align: right;
	${({variant}) =>
		variant === 'detail-price' &&
		css`
			font-size: 1.25rem;
		`}
	${({variant}) =>
		variant === 'cart-price' &&
		css`
			margin: auto;
			font-size: 1.15rem;
		`}
`;

export default StyledProductPrice;
