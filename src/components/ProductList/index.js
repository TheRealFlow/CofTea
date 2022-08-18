import Image from 'next/image';

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
						<Image
							alt={'Photo from the product'}
							src={product.imgUrl}
							width={100}
							height={100}
							layout="fixed"
						/>
						<h1>{product.name}</h1>
						<h2>{product.price}</h2>
						<StyledButton
							variant="default"
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
