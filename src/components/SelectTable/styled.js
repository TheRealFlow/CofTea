import styled, {css} from 'styled-components';

const StyledSelectTable = styled.div`
	display: flex;
	align-items: center;
	width: 80vw;
	margin: 0.5rem;
	padding: 0.75rem;
	border: 2px solid burlywood;
	border-radius: 10px;
	label {
		margin: 0 0.5rem;
	}
	select {
		width: 8rem;
		height: 2rem;
		margin-left: 0.5rem;
		border-radius: 10px;
		background-color: burlywood;
		font-size: 0.9rem;
		text-align: center;
	}

	${({variant}) =>
		variant === 'hidden' &&
		css`
			display: none;
		`}
`;

export default StyledSelectTable;
