import {useState} from 'react';

import StyledCommentField from './styled';

export default function CommentField() {
	const [characterCount, setCharacterCount] = useState(0);

	const calculate = event => {
		setCharacterCount(event.target.value.length);
	};
	return (
		<StyledCommentField>
			<label>Comments to your Order</label>
			<textarea
				maxLength={100}
				placeholder={'Coffee with milk, Tea with sugar, ...'}
				onChange={calculate}
			/>
			<span>{characterCount}/100</span>
		</StyledCommentField>
	);
}
