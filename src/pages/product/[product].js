import Image from 'next/image';
import {useRouter} from 'next/router';

import {getAllProducts} from '../../../backend/db';
import StyledDetailPage from '../../components/Detailpage/styled';
import StyledLink from '../../components/Link/styled';
import StyledProductName from '../../components/ProductName/styled';
import StyledProductPrice from '../../components/ProductPrice/styled';

export default function DetailsPage() {
	const products = getAllProducts();
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
								width={100}
								height={100}
								layout="responsive"
							/>
							<StyledProductName>{product.name}</StyledProductName>
							<StyledProductPrice>{product.price}</StyledProductPrice>
							<p>{product.description}</p>
							<StyledLink>Back to Products</StyledLink>
							<StyledLink>Add to Cart</StyledLink>
						</>
					);
				})}
		</StyledDetailPage>
	);
}
