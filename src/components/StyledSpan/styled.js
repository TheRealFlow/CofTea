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
`;

export default StyledSpan;
