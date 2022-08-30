import styled from 'styled-components';

const StyledOrderOptions = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	span {
		margin: 0.6rem;
		font-size: 0.9rem;
		text-align: right;
	}
	label {
		margin-right: 1rem;
		font-weight: bold;
		text-align: center;
	}
	input {
		margin: 0.5rem;
		transform: scale(1.3);
	}
`;

export default StyledOrderOptions;
