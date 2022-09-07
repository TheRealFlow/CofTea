import Image from 'next/image';
import Link from 'next/link';
import {useRouter} from 'next/router';

import StyledButton from '../../components/Button/styled';
import StyledDetailPage from '../../components/Detailpage/styled';
import StyledLink from '../../components/Link/styled';
import StyledProductDescription from '../../components/ProductDescription/styled';
import StyledProductName from '../../components/ProductName/styled';
import StyledProductPrice from '../../components/ProductPrice/styled';
import useStore from '../../hooks/useStore';

export default function DetailsPage() {
	const changeQuantity = useStore(state => state.changeQuantity);
	const products = useStore(state => state.products);
	const {query} = useRouter();
	const convert = Intl.NumberFormat('de-DE', {
		style: 'currency',
		currency: 'EUR',
		minimumFractionDigits: 2,
	});
	return (
		<StyledDetailPage>
			{products
				.filter(product => product.id === query.product)
				.map(product => {
					return (
						<>
							<Image
								key={product.id}
								alt={product.alt}
								src={product.imgUrl}
								width={400}
								height={350}
							/>
							<StyledProductName variant="detail-name">
								{product.name}
							</StyledProductName>
							<StyledProductDescription>
								{product.description}
							</StyledProductDescription>
							<StyledProductPrice variant="detail-price">
								{convert.format(product.price)}
							</StyledProductPrice>
							<StyledButton
								variant="detail"
								onClick={() => {
									changeQuantity(product.id, 1);
								}}
							>
								Add to Cart
							</StyledButton>
							<Link href="/" aria-label="Checkout Button">
								<StyledLink variant="back">Back to Products</StyledLink>
							</Link>
						</>
					);
				})}
		</StyledDetailPage>
	);
}
