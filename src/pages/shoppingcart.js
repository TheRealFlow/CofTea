import CartBanner from '../components/CartBanner';
import ShoppingCart from '../components/CartList';
import Layout from '../components/Layout';
import OrderForm from '../components/OrderForm';
import StyledSpan from '../components/StyledSpan/styled';
import useStore from '../hooks/useStore';

export default function ShoppingCartPage() {
	const products = useStore(state => state.products);

	const shoppingCartItems = products.filter(product => product.quantity > 0);

	return (
		<Layout>
			<CartBanner />
			<ShoppingCart shoppingCartItems={shoppingCartItems} />
			{shoppingCartItems.length ? (
				<OrderForm />
			) : (
				<StyledSpan variant="empty-cart">
					Your Shopping Cart is empty!
					<br />
					Please add something
				</StyledSpan>
			)}
		</Layout>
	);
}
