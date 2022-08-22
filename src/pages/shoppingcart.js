import Link from 'next/link';

import SVG from '../../public/SVG/svg';
import StyledButton from '../components/Button/styled';
import CartItem from '../components/CartItem';
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
			<CartItem />
			<Link href="/" aria-label="Checkout Button">
				<a>
					<StyledButton
						onClick={() => {
							checkoutMessage();
							clearCart();
						}}
						variant="checkout"
					>
						Checkout
					</StyledButton>
				</a>
			</Link>
		</>
	);
}
