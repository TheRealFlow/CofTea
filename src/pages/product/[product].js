import Image from 'next/image';
import {useRouter} from 'next/router';

import {getAllProducts, getProductById} from '../../../backend/db';
import StyledDetailPage from '../../components/Detailpage/styled';
import StyledLink from '../../components/Link/styled';
import StyledProductName from '../../components/ProductName/styled';
import StyledProductPrice from '../../components/ProductPrice/styled';

export function getStaticPaths() {
	const products = getAllProducts();

	return {
		paths: products.map(product => ({params: {id: product.id.toString()}})),
		fallback: false,
	};
}

export function getStaticProps(context) {
	const product = getProductById(context.params.id);

	return {
		props: {
			product,
		},
	};
}

export default function DetailsPage() {
	const {id, name, price, description, alt, imgUrl} = product;
	const router = useRouter();
	const {product} = router.query;

	return (
		<StyledDetailPage key={id}>
			<Image alt={alt} src={imgUrl} width={100} height={100} layout="fixed" />
			<StyledProductName>{name}</StyledProductName>
			<StyledProductPrice>{price}</StyledProductPrice>
			<p>{description}</p>
			<StyledLink>Back to Products</StyledLink>
			<StyledLink>Add to Cart</StyledLink>
		</StyledDetailPage>
	);
}
