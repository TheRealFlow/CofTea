import styled from 'styled-components';

const StyledCommentField = styled.div`
	display: inline-flex;
	flex-direction: column;
	width: 80vw;
	margin: 0.5rem;
	textarea {
		height: 13vh;
		padding: 0.5rem;
		border: 2px solid burlywood;
		border-radius: 10px;
		font-size: 0.75rem;
	}
	span {
		font-size: 0.75rem;
		text-align: right;
	}
`;

export default StyledCommentField;
