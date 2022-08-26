import useStore from '../../hooks/useStore';
import ProductCard from '../ProductCard';

import StyledProductList from './styled';

export default function ProductList() {
	const products = useStore(state => state.products);
	return (
		<StyledProductList>
			{products.map(product => {
				return <ProductCard key={product.id} product={product} />;
			})}
		</StyledProductList>
	);
}
