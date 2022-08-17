import {products} from '../../../backend/db';
import useStore from '../../hooks/useStore';
import StyledButton from '../Button';
import StyledProductCard from '../ProductCard';

import StyledProductList from './styled';

export default function ProductList() {
	const addToCart = useStore(state => state.addToCart);

	return (
		<StyledProductList>
			{products.map(product => {
				return (
					<StyledProductCard key={product.id}>
						<p>{product.name}</p>
						<p>{product.price}</p>
						<StyledButton
							onClick={() => {
								addToCart(product);
							}}
						>
							Add To Cart
						</StyledButton>
					</StyledProductCard>
				);
			})}
			;
		</StyledProductList>
	);
}
