import {useRouter} from 'next/router';

import FilterBar from '../../components/FilterBar';
import Header from '../../components/Header';
import ProductCard from '../../components/ProductCard';
import StyledProductList from '../../components/ProductList/styled';
import useStore from '../../hooks/useStore';

export default function Category() {
	const products = useStore(state => state.products);
	const {query} = useRouter();
	return (
		<>
			<Header />
			<FilterBar />
			<StyledProductList>
				{products
					.filter(product => product.category === query.category)
					.map(product => (
						<ProductCard key={product.id} product={product} />
					))}
			</StyledProductList>
		</>
	);
}
