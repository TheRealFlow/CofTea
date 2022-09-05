import Link from 'next/link';

import SVG from '../../public/SVG/svg';
import CartBanner from '../components/CartBanner';
import ShoppingCart from '../components/CartList';
import Layout from '../components/Layout';
import OrderForm from '../components/OrderForm';
import useStore from '../hooks/useStore';

export default function ShoppingCartPage() {
	const products = useStore(state => state.products);

	const shoppingCartItems = products.filter(product => product.quantity > 0);

	return (
		<Layout>
			<Link href="/" aria-label="Back Arrow">
				<a>
					<SVG size="40px" color="black" variant="backArrow" />
				</a>
			</Link>
			<CartBanner />
			<ShoppingCart shoppingCartItems={shoppingCartItems} />
			{shoppingCartItems.length ? (
				<OrderForm />
			) : (
				<span>Please put something in the Shopping Cart first</span>
			)}
		</Layout>
	);
}
