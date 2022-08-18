import Image from 'next/image';

import {products} from '../../../backend/db';
import useStore from '../../hooks/useStore';
import StyledButton from '../Button/styled';
import StyledProductCard from '../ProductCard/styled';
import StyledName from '../ProductName/styled';
import StyledPrice from '../ProductPrice/styled';

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
						<StyledName>{product.name}</StyledName>
						<StyledPrice>{product.price}</StyledPrice>
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
