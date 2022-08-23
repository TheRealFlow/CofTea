import {products} from '../../backend/db';
import FilterBar from '../components/FilterBar';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import StyledProductList from '../components/ProductList/styled';

export default function showTea() {
	return (
		<>
			<Header />
			<FilterBar />
			<StyledProductList>
				{products
					.filter(product => product.category === 'tea')
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
