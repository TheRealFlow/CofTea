import {useRouter} from 'next/router';
import {useState} from 'react';

import useStore from '../../hooks/useStore';
import StyledButton from '../Button/styled';
import StyledCommentField from '../CommentField/styled';
import StyledOrderOptions from '../OrderOptions/styled';
import SelectTable from '../SelectTable';

import StyledOrderForm from './styled';

export default function OrderForm() {
	const router = useRouter();
	const [characterCount, setCharacterCount] = useState(0);

	const calculate = event => {
		setCharacterCount(event.target.value.length);
	};

	function checkoutMessage() {
		alert('Thank you for your order. Your order number is: 129');
	}

	const clearCart = useStore(state => state.clearCart);
	return (
		<StyledOrderForm>
			<StyledOrderOptions>
				<legend>Where do you want to drink?</legend>
				<label htmlFor="here">
					Here
					<input type="radio" name="order" id="here" />
				</label>
				<label htmlFor="togo">
					To-Go
					<input type="radio" name="order" id="togo" />
				</label>
			</StyledOrderOptions>

			<SelectTable />

			<StyledCommentField>
				<label>Comments to your Order</label>
				<textarea
					maxLength={100}
					placeholder={'Coffee with milk, Tea with sugar, ...'}
					onChange={calculate}
				/>
				<span>{characterCount}/100</span>
			</StyledCommentField>

			<StyledButton
				type="submit"
				onClick={() => {
					checkoutMessage();
					clearCart();
					router.push('/');
				}}
				variant="default"
			>
				Checkout
			</StyledButton>
		</StyledOrderForm>
	);
}
