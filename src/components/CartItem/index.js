import Image from 'next/image';

import SVG from '../../../public/SVG/svg';
import useStore from '../../hooks/useStore';
import StyledButton from '../Button/styled';
import ImageWrapper from '../ImageWrapper/styled';
import StyledProductName from '../ProductName/styled';
import StyledProductPrice from '../ProductPrice/styled';
import StyledProductQuantity from '../ProductQuantity/styled';

import StyledCartItem from './styled';

export default function CartItem({product}) {
	const changeQuantity = useStore(state => state.changeQuantity);
	const convert = Intl.NumberFormat('de-DE', {
		style: 'currency',
		currency: 'EUR',
		minimumFractionDigits: 2,
	});
	return (
		<StyledCartItem>
			<ImageWrapper>
				<Image
					alt={product.alt}
					src={product.imgUrl}
					width={100}
					height={100}
					layout="responsive"
				/>
			</ImageWrapper>
			<StyledProductName>{product.name}</StyledProductName>
			<StyledProductPrice>
				{convert.format(product.price * product.quantity)}
			</StyledProductPrice>
			<StyledProductQuantity>{product.quantity}</StyledProductQuantity>
			<StyledButton
				type="button"
				variant="minus-counter"
				onClick={() => {
					changeQuantity(product.id, -1);
				}}
			>
				<SVG size="40px" color="red" variant="minusCounter" />
			</StyledButton>
			<StyledButton
				type="button"
				variant="plus-counter"
				onClick={() => {
					changeQuantity(product.id, 1);
				}}
			>
				<SVG size="40px" color="green" variant="plusCounter" />
			</StyledButton>
		</StyledCartItem>
	);
}
