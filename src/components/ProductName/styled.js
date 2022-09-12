import styled, {css} from 'styled-components';

const StyledProductName = styled.h2`
	grid-area: name;
	margin: 0.25rem;
	color: var(--accent-color);
	font-size: 1.3rem;
	${({variant}) =>
		variant === 'detail-name' &&
		css`
			margin-top: 1rem;
			font-size: 1.75rem;
			color: var(--accent-color);
			border-bottom: 2px solid var(--accent-color);
		`}
	${({variant}) =>
		variant === 'cart-name' &&
		css`
			font-size: 1.3rem;
			color: var(--accent-color);
		`}
	@media (min-width: 720px) {
		font-size: 1.9rem;
	}
`;

export default StyledProductName;
