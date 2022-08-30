import styled from 'styled-components';

const StyledCommentField = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 1rem;
	p {
		margin: 0;
		font-size: 0.9rem;
		font-weight: bold;
	}
	textarea {
		width: 80vw;
		height: 10vh;
		border: 2px solid burlywood;
		font-size: 0.75rem;
	}
	span {
		font-size: 0.75rem;
	}
`;

export default StyledCommentField;
