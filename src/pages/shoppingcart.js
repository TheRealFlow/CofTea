import Link from 'next/link';

import SVG from '../../public/SVG/svg';
import StyledButton from '../components/Button/styled';
import ShoppingCart from '../components/CartList';
import Header from '../components/Header';
import useStore from '../hooks/useStore';

export default function ShoppingCartPage() {
	const checkoutMessage = () => {
		alert('Your order has been successfully processed');
	};
	const clearCart = useStore(state => state.clearCart);
	return (
		<>
			<Header />

			<Link href="/" aria-label="Back Arrow">
				<a>
					<SVG size="40px" color="black" variant="backArrow" />
				</a>
			</Link>
			<ShoppingCart />
			<Link href="/" aria-label="Checkout Button">
				<StyledButton
					onClick={() => {
						checkoutMessage();
						clearCart();
					}}
					variant="checkout"
				>
					Checkout
				</StyledButton>
			</Link>
		</>
	);
}
