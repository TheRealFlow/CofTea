import Image from 'next/image';
import {useStore} from 'zustand';

import {products} from '../../../backend/db';
import StyledButton from '../Button/styled';
import StyledProductName from '../ProductName/styled';
import StyledProductPrice from '../ProductPrice/styled';

import StyledProductCard from './styled';

export default function ProductCard() {
	const addToCart = useStore(state => state.addToCart);

	return products.map(product => {
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
	});
}
