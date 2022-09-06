import styled, {css} from 'styled-components';

const StyledSelectTable = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 90vw;
	margin: 0.5rem;
	padding: 0.75rem;
	border: 2px solid burlywood;
	border-radius: 10px;
	letter-spacing: 0.1rem;
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
