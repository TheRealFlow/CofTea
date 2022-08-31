import styled from 'styled-components';

const StyledCommentField = styled.fieldset`
	display: inline-flex;
	flex-direction: column;
	justify-content: space-evenly;
	width: 80vw;
	margin: 0.5rem;
	padding: 0.75rem;
	border: 2px solid burlywood;
	border-radius: 10px;
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
