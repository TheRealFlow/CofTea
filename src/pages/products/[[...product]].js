import {useRouter} from 'next/router';

import {products} from '../../../backend/db';
import FilterBar from '../../components/FilterBar';
import Header from '../../components/Header';
import ProductCard from '../../components/ProductCard';
import StyledProductList from '../../components/ProductList/styled';

export default function Product() {
	const router = useRouter();
	const [filter] = router.query.product ?? [''];
	return (
		<>
			<Header />
			<FilterBar />
			<StyledProductList>
				{products
					.filter(product => {
						if (filter.length === 0) {
							return true;
						} else {
							return product.category === filter;
						}
					})
					.map(product => (
						<ProductCard
							key={product.id}
							id={product.id}
							name={product.name}
							price={product.price}
							imgUrl={product.imgUrl}
						/>
					))}
			</StyledProductList>
		</>
	);
}
