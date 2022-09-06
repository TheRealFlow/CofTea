import CartItem from '../CartItem';

import StyledCartList from './styled';

function ShoppingCart({shoppingCartItems}) {
	return (
		<StyledCartList>
			{shoppingCartItems.map(product => {
				return <CartItem key={product.id} product={product} />;
			})}
		</StyledCartList>
	);
}

export default ShoppingCart;
