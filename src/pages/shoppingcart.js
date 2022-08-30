import Link from 'next/link';

import SVG from '../../public/SVG/svg';
import ShoppingCart from '../components/CartList';
import Header from '../components/Header';
import OrderForm from '../components/OrderForm';

export default function ShoppingCartPage() {
	return (
		<>
			<Header />
			<Link href="/" aria-label="Back Arrow">
				<a>
					<SVG size="40px" color="black" variant="backArrow" />
				</a>
			</Link>
			<ShoppingCart />
			<OrderForm />
		</>
	);
}
