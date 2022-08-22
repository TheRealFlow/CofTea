import useStore from '../../hooks/useStore';
import CartItem from '../CartItem';

import StyledCartList from './styled';

function ShoppingCart() {
	const products = useStore(state => state.products);

	return (
		<StyledCartList>
			{products
				.filter(product => {
					return product.inCart;
				})
				.map(product => {
					return (
						<CartItem
							key={product.id}
							name={product.name}
							price={product.price}
							inCart={product.inCart}
						/>
					);
				})}
		</StyledCartList>
	);
}

export default ShoppingCart;
