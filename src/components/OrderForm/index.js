import Link from 'next/link';
import {useState} from 'react';

import useStore from '../../hooks/useStore';
import StyledCommentField from '../CommentField/styled';
import StyledLink from '../Link/styled';
import StyledOrderOptions from '../OrderOptions/styled';
import StyledSelectTable from '../SelectTable/styled';

import StyledOrderForm from './styled';

export default function OrderForm() {
	const [selectOrder, setSelectOrder] = useState(true);

	function handleOrder() {
		setSelectOrder(!selectOrder);
	}

	const [isHidden, setIsHidden] = useState(false);

	function handleHidden() {
		setIsHidden(!isHidden);
	}

	const [showCheckout, setShowCheckout] = useState(false);

	function handleCheckout() {
		setShowCheckout(disabled => !disabled);
	}

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
				<label htmlFor="Here">
					Here
					<input
						type="radio"
						name="order"
						id="here"
						onClick={handleOrder}
						disabled={!selectOrder}
					/>
				</label>
				<label htmlFor="togo">
					To-Go
					<input
						type="radio"
						name="order"
						id="togo"
						onClick={() => {
							handleOrder(), handleCheckout(), handleHidden();
						}}
						disabled={!selectOrder}
					/>
				</label>
			</StyledOrderOptions>

			<StyledSelectTable disabled={selectOrder} variant={isHidden ? 'hidden' : ''}>
				<span>Select your table</span>
				<select>
					<option value="0">Select Table:</option>
					<option onClick={handleCheckout}>Table 1</option>
					<option onClick={handleCheckout}>Table 2</option>
					<option onClick={handleCheckout}>Table 3</option>
					<option onClick={handleCheckout}>Table 4</option>
					<option onClick={handleCheckout}>Table 5</option>
					<option onClick={handleCheckout}>Table 6</option>
					<option onClick={handleCheckout}>Table 7</option>
					<option onClick={handleCheckout}>Table 8</option>
					<option onClick={handleCheckout}>Table 9</option>
					<option onClick={handleCheckout}>Table 10</option>
				</select>
			</StyledSelectTable>

			<StyledCommentField disabled={selectOrder}>
				<legend>Comments to your order</legend>
				<textarea
					maxLength={100}
					placeholder={'Coffee with milk, Tea with sugar, ...'}
					onChange={calculate}
				/>
				<span>{characterCount}/100</span>
			</StyledCommentField>

			<Link href="/" aria-label="Checkout Button">
				<StyledLink
					onClick={() => {
						checkoutMessage();
						clearCart();
					}}
					variant={!showCheckout ? 'checkout-disable' : ''}
				>
					Checkout
				</StyledLink>
			</Link>
		</StyledOrderForm>
	);
}
