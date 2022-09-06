import Image from 'next/image';
import Link from 'next/link';

import SVG from '../../../public/SVG/svg';
import useStore from '../../hooks/useStore';
import StyledButton from '../Button/styled';
import StyledProductName from '../ProductName/styled';
import StyledProductPrice from '../ProductPrice/styled';

import StyledProductCard from './styled';

export default function ProductCard({product}) {
	const changeQuantity = useStore(state => state.changeQuantity);
	return (
		<StyledProductCard category={product.category}>
			<Image alt={product.alt} src={product.imgUrl} width={100} height={100} layout="fixed" />
			<StyledProductName>{product.name}</StyledProductName>
			<StyledProductPrice>{product.price}</StyledProductPrice>
			<Link href={`/product/${product.id}`} aria-label="Info Button">
				<a>
					<SVG size="30px" color="burlywood" variant="info" />
				</a>
			</Link>
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
