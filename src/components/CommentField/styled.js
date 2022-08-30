import styled from 'styled-components';

const StyledCommentField = styled.div`
	display: flex;
	flex-direction: column;
	p {
		margin: 0 1rem;
		font-size: 0.9rem;
		font-weight: bold;
	}
	textarea {
		max-width: 90%;
		margin-left: 1rem;
		border: 2px solid burlywood;
		font-size: 0.75rem;
	}
	span {
		margin-left: 20rem;
		font-size: 0.75rem;
	}
`;

export default StyledCommentField;
