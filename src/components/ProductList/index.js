import {products} from '../../../backend/db';
import Button from '../Button';
import StyledProductCard from '../ProductCard';

import StyledProductList from './styled';

export default function ProductList() {
	return (
		<StyledProductList>
			{products.map(product => {
				return (
					<StyledProductCard key={product.id}>
						<p>{product.name}</p>
						<p>{product.price}</p>
						<Button />
					</StyledProductCard>
				);
			})}
			;
		</StyledProductList>
	);
}
