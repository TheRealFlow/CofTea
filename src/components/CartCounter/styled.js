import styled, {css} from 'styled-components';
const StyledCartCounter = styled.span`
	margin: 1rem;
	padding: 0.6rem;
	color: var(--accent-color);
	font-weight: bold;
	${({variant}) =>
		variant === 'counterHome' &&
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
export default StyledCartCounter;
