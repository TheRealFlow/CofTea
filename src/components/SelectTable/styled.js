import styled, {css} from 'styled-components';

const StyledSelectTable = styled.fieldset`
	display: inline-flex;
	align-items: center;
	justify-content: space-evenly;
	width: 80vw;
	margin: 0.5rem;
	padding: 0.75rem;
	border: 2px solid burlywood;
	border-radius: 10px;
	span {
		margin: 1rem;
		font-size: 0.9rem;
	}
	select {
		width: 8rem;
		height: 2rem;
		border-radius: 10px;
		background-color: burlywood;
		font-size: 0.9rem;
		text-align: center;
	}
	option {
		font-size: 1.2rem;
	}

	${({variant}) =>
		variant === 'hidden' &&
		css`
			display: none;
		`}
`;

export default StyledSelectTable;
