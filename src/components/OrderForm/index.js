import Link from 'next/link';

import useStore from '../../hooks/useStore';
import CommentField from '../CommentField';
import StyledLink from '../Link/styled';
import OrderOptions from '../OrderOptions';
import SelectTable from '../SelectTable';

import StyledOrderForm from './styled';

export default function OrderForm() {
	const checkoutMessage = () => {
		alert('Your order has been successfully processed');
	};
	const clearCart = useStore(state => state.clearCart);
	return (
		<StyledOrderForm>
			<OrderOptions />
			<SelectTable />
			<CommentField />
			<Link href="/" aria-label="Checkout Button">
				<StyledLink
					onClick={() => {
						checkoutMessage();
						clearCart();
					}}
					variant="checkout"
				>
					Checkout
				</StyledLink>
			</Link>
		</StyledOrderForm>
	);
}
