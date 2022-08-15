import {PRODUCTS} from '../../../backend/db';
import StyledProductCard from '../ProductCard';

import StyledProductList from './styled';

export default function ProductList() {
	return (
		<StyledProductList>
			{PRODUCTS.map(product => {
				return (
					<StyledProductCard key={product.id}>
						<p>{product.name}</p>
						<p>{product.price}</p>
					</StyledProductCard>
				);
			})}
			;
		</StyledProductList>
	);
}
