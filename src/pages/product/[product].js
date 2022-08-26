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
	const products = useStore(state => state.products);
	const {query} = useRouter();

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
							<StyledProductName>{product.name}</StyledProductName>
							<StyledProductDescription>
								{product.description}
							</StyledProductDescription>
							<StyledProductPrice>{product.price}</StyledProductPrice>
							<StyledButton variant="default">Add to Cart</StyledButton>
							<Link href="/" aria-label="Checkout Button">
								<StyledLink variant="back">Back to Products</StyledLink>
							</Link>
						</>
					);
				})}
		</StyledDetailPage>
	);
}
