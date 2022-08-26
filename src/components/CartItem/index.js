import Image from 'next/image';

import SVG from '../../../public/SVG/svg';
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
			<StyledProductPrice>{product.price * product.quantity}</StyledProductPrice>
			<p>{product.quantity}</p>

			<StyledButton
				type="button"
				variant="counter"
				onClick={() => {
					changeQuantity(product.id, -1);
				}}
			>
				<SVG size="40px" color="red" variant="minusCounter" />
			</StyledButton>
			<StyledButton
				type="button"
				variant="counter"
				onClick={() => {
					changeQuantity(product.id, 1);
				}}
			>
				<SVG size="40px" color="green" variant="plusCounter" />
			</StyledButton>
		</StyledCartItem>
	);
}
