import Image from 'next/image';

import useStore from '../../hooks/useStore';
import StyledButton from '../Button/styled';
import StyledProductName from '../ProductName/styled';
import StyledProductPrice from '../ProductPrice/styled';

import StyledProductCard from './styled';

export default function ProductCard({product}) {
	const changeQuantity = useStore(state => state.changeQuantity);
	return (
		<StyledProductCard category={product.category}>
			<Image alt={''} src={product.imgUrl} width={100} height={100} layout="fixed" />
			<StyledProductName>{product.name}</StyledProductName>
			<StyledProductPrice>{product.price}</StyledProductPrice>
			<p>{product.quantity}</p>
			<StyledButton
				type="button"
				onClick={() => {
					changeQuantity(product.id, 1);
				}}
			>
				add to Cart
			</StyledButton>
		</StyledProductCard>
	);
}
