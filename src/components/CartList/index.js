import useStore from '../../hooks/useStore';
import CartItem from '../CartItem';

import StyledCartList from './styled';

function ShoppingCart() {
	const cartProducts = useStore(state => state.cartProducts);

	return (
		<StyledCartList>
			{cartProducts.map(cartProduct => {
				return (
					<CartItem
						key={cartProduct.id}
						name={cartProduct.name}
						price={cartProduct.price}
						imgUrl={cartProduct.imgUrl}
						productid={cartProduct.id}
					/>
				);
			})}
		</StyledCartList>
	);
}

export default ShoppingCart;
