import Link from 'next/link';

import SVG from '../../public/SVG/svg';
import StyledButton from '../components/Button/styled';
import Header from '../components/Header';
import ShoppingCart from '../components/ProductList/cart';

export default function ShoppingCartPage() {
	return (
		<>
			<Header />

			<Link href="/" aria-label="Back Arrow">
				<a>
					<SVG size="40px" color="black" variant="backArrow" />
				</a>
			</Link>
			<StyledButton>Checkout</StyledButton>
			<ShoppingCart />
		</>
	);
}
