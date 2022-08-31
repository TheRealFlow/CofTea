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

	const handleCheckout = () => {
		setShowCheckout(current => !current);
	};

	const [characterCount, setCharacterCount] = useState(0);

	const calculate = event => {
		setCharacterCount(event.target.value.length);
	};

	const checkoutMessage = () => {
		alert('Your order has been successfully processed');
	};

	const clearCart = useStore(state => state.clearCart);
	return (
		<StyledOrderForm>
			<StyledOrderOptions>
				<legend>Where do you want to drink?</legend>
				<label htmlFor="Here">
					Here
					<input
						type="radio"
						id="Here"
						onClick={() => {
							handleOrder(), handleCheckout();
						}}
					/>
				</label>
				<label htmlFor="togo">
					To-Go
					<input
						type="radio"
						id="togo"
						onClick={() => {
							handleOrder(), handleCheckout(), handleHidden();
						}}
					/>
				</label>
			</StyledOrderOptions>

			<StyledSelectTable disabled={selectOrder} variant={isHidden ? 'hidden' : ''}>
				<span>Select your table</span>
				<select>
					<option value="0">Select Table:</option>
					<option value="1">Table 1</option>
					<option value="2">Table 2</option>
					<option value="3">Table 3</option>
					<option value="4">Table 4</option>
					<option value="5">Table 5</option>
					<option value="6">Table 6</option>
					<option value="7">Table 7</option>
					<option value="8">Table 8</option>
					<option value="9">Table 9</option>
					<option value="10">Table 10</option>
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
						handleCheckout();
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
