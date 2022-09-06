import styled from 'styled-components';

const StyledCommentField = styled.div`
	display: inline-flex;
	flex-direction: column;
	width: 90vw;
	margin: 0.5rem;
	textarea {
		height: 15vh;
		padding: 0.5rem;
		border: 2px solid burlywood;
		border-radius: 10px;
		font-size: 0.75rem;
	}
`;

export default StyledCommentField;
