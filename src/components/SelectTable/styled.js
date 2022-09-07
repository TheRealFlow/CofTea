import styled, {css} from 'styled-components';

const StyledSelectTable = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 90vw;
	margin: 0.5rem;
	padding: 0.75rem;
	border: 2px solid var(--accent-color);
	border-radius: 10px;
	select {
		width: 8rem;
		height: 2rem;
		margin-left: 0.5rem;
		border: none;
		border-radius: 10px;
		background-color: var(--accent-color);
		color: var(--font-color);
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
