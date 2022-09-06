import {useRouter} from 'next/router';
import {useState} from 'react';
import {useForm} from 'react-hook-form';

import useStore from '../../hooks/useStore';
import StyledButton from '../Button/styled';
import CommentField from '../CommentField';
import StyledInput from '../Input/styled';
import StyledLabel from '../Label/styled';
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
		alert(
			'Thank you for your order.\n\nYour order-number is: ' +
				Math.floor(Math.random() * 10) +
				1
		);
	}
	return (
		<StyledOrderForm>
			<StyledSpan variant={showFirstSpan ? 'show' : 'hidden'}>
				Your order-number will be displayed after checkout and called when your drink is
				ready
			</StyledSpan>
			<CommentField />
			<StyledOrderOptions>
				<StyledLabel htmlFor="here">
					I want to drink here
					<StyledInput
						type="checkbox"
						onClick={handleFirstSpan}
						{...register('selectHere')}
					/>
				</StyledLabel>
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
