import useStore from '../../hooks/useStore';
import StyledButton from '../Button';
import StyledProductCard from '../ProductCard';

import StyledProductList from './styled';

function ProductListCart() {
	const cartProducts = useStore(state => state.cartProducts);
	const deleteFromCart = useStore(state => state.deleteFromCart);

	return (
		<>
			<StyledProductList>
				{cartProducts.map(cartProduct => {
					return (
						<StyledProductCard key={cartProduct.id}>
							<p>{cartProduct.name}</p>
							<p>{cartProduct.price}</p>
							<StyledButton
								variant="delete"
								onClick={() => {
									deleteFromCart(cartProduct.id);
								}}
							>
								Delete
							</StyledButton>
						</StyledProductCard>
					);
				})}
			</StyledProductList>
		</>
	);
}

export default ProductListCart;
