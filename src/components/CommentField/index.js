import {useState} from 'react';

import StyledLabel from '../Label/styled';
import StyledSpan from '../StyledSpan/styled';
import StyledTextarea from '../Textarea/styled';

import StyledCommentField from './styled';

export default function CommentField() {
	const [characterCount, setCharacterCount] = useState(0);

	const calculate = event => {
		setCharacterCount(event.target.value.length);
	};
	return (
		<StyledCommentField>
			<StyledLabel>Any extra wishes?</StyledLabel>
			<StyledTextarea
				maxLength={100}
				placeholder={'Coffee with milk, Tea with sugar, ...'}
				onChange={calculate}
			/>
			<StyledSpan variant="comment-counter">{characterCount}/100</StyledSpan>
		</StyledCommentField>
	);
}
