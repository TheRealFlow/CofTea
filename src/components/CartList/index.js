import useStore from '../../hooks/useStore';
import CartItem from '../CartItem';

import StyledCartList from './styled';

function ShoppingCart() {
	const products = useStore(state => state.products);

	return (
		<StyledCartList>
			{products
				.filter(product => product.quantity > 0)
				.map(product => {
					return <CartItem key={product.id} product={product} />;
				})}
		</StyledCartList>
	);
}

export default ShoppingCart;
