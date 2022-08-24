import Image from 'next/image';
import {useState} from 'react';

import SVG from '../../../public/SVG/svg';
import useStore from '../../hooks/useStore';
import StyledButton from '../Button/styled';
import StyledProductName from '../ProductName/styled';
import StyledProductPrice from '../ProductPrice/styled';

import StyledCartItem from './styled';

export default function CartItem({productId, imgUrl, name, price}) {
	const deleteFromCart = useStore(state => state.deleteFromCart);
	const [count, setCount] = useState(1);

	return (
		<StyledCartItem>
			<Image alt={''} src={imgUrl} width={100} height={100} layout="fixed" />
			<StyledProductName>{name}</StyledProductName>
			<StyledProductPrice>{price}</StyledProductPrice>
			<StyledButton
				variant="delete"
				onClick={() => {
					deleteFromCart(productId);
				}}
			>
				Delete
			</StyledButton>
			<StyledButton
				type="button"
				onClick={() => {
					setCount(count + 1);
				}}
			>
				<SVG size="40px" color="green" variant="plusCounter" />
			</StyledButton>
			<p>{count}</p>
			<StyledButton
				type="button"
				onClick={() => {
					setCount(count - 1);
				}}
			>
				<SVG size="40px" color="red" variant="minusCounter" />
			</StyledButton>
		</StyledCartItem>
	);
}
