import {products} from '../../backend/db';
import FilterBar from '../components/FilterBar';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import StyledProductList from '../components/ProductList/styled';

export default function showCoffee() {
	return (
		<>
			<Header />
			<FilterBar />
			<StyledProductList>
				{products
					.filter(product => product.category === 'coffee')
					.map(product => (
						<ProductCard
							key={product.id}
							name={product.name}
							price={product.price}
							imgUrl={product.imgUrl}
						/>
					))}
			</StyledProductList>
		</>
	);
}
