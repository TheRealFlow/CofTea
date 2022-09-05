import Image from 'next/image';
import Link from 'next/link';
import {useRouter} from 'next/router';

import SVG from '../../../public/SVG/svg';
import StyledButton from '../../components/Button/styled';
import FilterBar from '../../components/FilterBar';
import Header from '../../components/Header';
import ImageWrapper from '../../components/ImageWrapper/styled';
import StyledProductCard from '../../components/ProductCard/styled';
import StyledProductList from '../../components/ProductList/styled';
import StyledProductName from '../../components/ProductName/styled';
import StyledProductPrice from '../../components/ProductPrice/styled';
import useStore from '../../hooks/useStore';

export default function Category() {
	const changeQuantity = useStore(state => state.changeQuantity);
	const products = useStore(state => state.products);
	const {query} = useRouter();
	return (
		<>
			<Header />
			<FilterBar />
			<StyledProductList>
				{products
					.filter(product => product.category === query.category)
					.map(product => {
						return (
							<StyledProductCard key={product.id} category={product.category}>
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
								<StyledProductPrice>{product.price}</StyledProductPrice>
								<Link href={`/product/${product.id}`} aria-label="Info Button">
									<a>
										<SVG size="30px" color="burlywood" variant="info" />
									</a>
								</Link>
								<StyledButton
									variant="default"
									onClick={() => {
										changeQuantity(product.id, 1);
									}}
								>
									Add to Cart
								</StyledButton>
							</StyledProductCard>
						);
					})}
			</StyledProductList>
		</>
	);
}
