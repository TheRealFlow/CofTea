import Image from 'next/image';
import Link from 'next/link';

import SVG from '../../../public/SVG/svg';
import useStore from '../../hooks/useStore';
import StyledButton from '../Button/styled';
import StyledProductName from '../ProductName/styled';
import StyledProductPrice from '../ProductPrice/styled';

import StyledProductCard from './styled';

export default function ProductCard({id, name, alt, price, imgUrl, category}) {
	const addToCart = useStore(state => state.addToCart);

	return (
		<StyledProductCard category={category}>
			<Image alt={alt} src={imgUrl} width={100} height={100} layout="fixed" />
			<StyledProductName>{name}</StyledProductName>
			<StyledProductPrice>{price}</StyledProductPrice>
			<Link href={`/product/${id}`} aria-label="Info Button">
				<a>
					<SVG size="30px" color="burlywood" variant="info" />
				</a>
			</Link>
			<StyledButton
				variant="default"
				onClick={() => {
					addToCart({id, name, price, imgUrl});
				}}
			>
				Add To Cart
			</StyledButton>
		</StyledProductCard>
	);
}
