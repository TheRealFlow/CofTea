import useStore from '../../hooks/useStore';
import StyledButton from '../Button';
import StyledProductCard from '../ProductCard';

import StyledProductList from './styled';

function ProductListCart() {
	const cartProducts = useStore(state => state.cartProducts);

	return (
		<>
			<h2>ShoppingCart</h2>
			<StyledProductList>
				<p></p>
				{cartProducts.map(cartProduct => {
					return (
						<StyledProductCard key={cartProduct.id}>
							<p>{cartProduct.name}</p>
							<p>{cartProduct.price}</p>
							<StyledButton> Delete </StyledButton>
						</StyledProductCard>
					);
				})}
			</StyledProductList>
		</>
	);
}

export default ProductListCart;
