import {useRouter} from 'next/router';

import useStore from '../../hooks/useStore';
import StyledButton from '../Button/styled';
import CommentField from '../CommentField';
import StyledOrderOptions from '../OrderOptions/styled';
import SelectTable from '../SelectTable';

import StyledOrderForm from './styled';

export default function OrderForm() {
	const router = useRouter();
	const clearCart = useStore(state => state.clearCart);
	function checkoutMessage() {
		alert('Thank you for your order. Your order number is: 129');
	}
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
			<CommentField />

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
