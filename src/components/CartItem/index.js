import Image from 'next/image';

import useStore from '../../hooks/useStore';
import StyledButton from '../Button/styled';
import StyledProductName from '../ProductName/styled';
import StyledProductPrice from '../ProductPrice/styled';

import StyledCartItem from './styled';

export default function CartItem({product}) {
	const changeQuantity = useStore(state => state.changeQuantity);
	return (
		<StyledCartItem>
			<Image alt={''} src={product.imgUrl} width={100} height={100} layout="fixed" />
			<StyledProductName>{product.name}</StyledProductName>
			<StyledProductPrice>{product.price}</StyledProductPrice>
			<p>{product.quantity}</p>

			<StyledButton
				onClick={() => {
					changeQuantity(product.id, -1);
				}}
			>
				minus
			</StyledButton>
			<StyledButton
				onClick={() => {
					changeQuantity(product.id, 1);
				}}
			>
				plus
			</StyledButton>
		</StyledCartItem>
	);
}
