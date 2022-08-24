import {products} from '../../../backend/db';
import ProductCard from '../ProductCard';

import StyledProductList from './styled';

export default function ProductList() {
	return (
		<StyledProductList>
			{products.map(product => {
				return (
					<ProductCard
						key={product.id}
						id={product.id}
						name={product.name}
						alt={product.alt}
						price={product.price}
						imgUrl={product.imgUrl}
						inCart={product.inCart}
					/>
				);
			})}
		</StyledProductList>
	);
}
