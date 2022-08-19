import styled, {css} from 'styled-components';

const StyledFilterButton = styled.button`
	border-radius: 10px;
	font-size: 0.5rem;
	${({variant}) =>
		variant === 'all' &&
		css`
			border: 1px solid black;
			color: black;
			background-color: none;

			&:active {
				color: white;
				background-color: green;
			}
		`}

	${({variant}) =>
		variant === 'coffee' &&
		css`
			color: white;
			background-color: green;
		`}

    ${({variant}) =>
		variant === 'tea' &&
		css`
			color: white;
			background-color: red;

			&:active {
				color: black;
				background-color: white;
			}
		`}
`;

export default StyledFilterButton;
