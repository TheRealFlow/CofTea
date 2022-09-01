import Link from 'next/link';

import SVG from '../../public/SVG/svg';
import CartBanner from '../components/CartBanner';
import ShoppingCart from '../components/CartList';
import OrderForm from '../components/OrderForm';
import Layout from '../components/Layout';


export default function ShoppingCartPage() {
	return (
		<Layout>
			<Link href="/" aria-label="Back Arrow">
				<a>
					<SVG size="40px" color="black" variant="backArrow" />
				</a>
			</Link>
			<CartBanner />
			<ShoppingCart />
			<OrderForm />
		</Layout>
	);
}
