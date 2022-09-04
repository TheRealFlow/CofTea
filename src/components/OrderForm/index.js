import {useRouter} from 'next/router';
import {useState} from 'react';
import {useForm} from 'react-hook-form';

import useStore from '../../hooks/useStore';
import StyledButton from '../Button/styled';
import CommentField from '../CommentField';
import StyledOrderOptions from '../OrderOptions/styled';
import SelectTable from '../SelectTable';
import StyledSpan from '../StyledSpan/styled';

import StyledOrderForm from './styled';

export default function OrderForm() {
	const [showFirstSpan, setShowFirstSpan] = useState(true);
	function handleFirstSpan() {
		setShowFirstSpan(!showFirstSpan);
	}
	const {register, watch} = useForm();
	const selectHere = watch('selectHere');
	const router = useRouter();
	const clearCart = useStore(state => state.clearCart);
	function checkoutMessage() {
		alert('Thank you for your order. Your order-number is: 129');
	}
	return (
		<StyledOrderForm>
			<StyledSpan variant={showFirstSpan ? '' : 'hidden'}>
				Your order-number will be displayed after checkout and called when your drink is
				ready
			</StyledSpan>
			<CommentField />
			<StyledOrderOptions>
				<label htmlFor="here">
					I want to drink here
					<input type="checkbox" onClick={handleFirstSpan} {...register('selectHere')} />
				</label>
			</StyledOrderOptions>
			{selectHere && <SelectTable />}
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
