import Image from 'next/image';

import {products} from '../../../backend/db';
import useStore from '../../hooks/useStore';
import StyledButton from '../Button/styled';
import StyledProductCard from '../ProductCard/styled';
import StyledProductName from '../ProductName/styled';
import StyledProductPrice from '../ProductPrice/styled';

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
						<StyledProductName>{product.name}</StyledProductName>
						<StyledProductPrice>{product.price}</StyledProductPrice>
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
		</StyledProductList>
	);
}
