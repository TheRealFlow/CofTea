import Link from 'next/link';

import SVG from '../../public/SVG/svg';
import CartBanner from '../components/CartBanner';
import ShoppingCart from '../components/CartList';
import CommentField from '../components/CommentField';
import Header from '../components/Header';
import StyledLink from '../components/Link/styled';
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
			<CartBanner />
			<ShoppingCart />
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
		</>
	);
}
