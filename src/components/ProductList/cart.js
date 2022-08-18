import Image from 'next/image';

import useStore from '../../hooks/useStore';
import StyledButton from '../Button';
import StyledProductCard from '../ProductCard';

import StyledProductList from './styled';

function ProductListCart() {
	const cartProducts = useStore(state => state.cartProducts);
	const deleteFromCart = useStore(state => state.deleteFromCart);

	return (
		<StyledProductList>
			{cartProducts.map(cartProduct => {
				return (
					<StyledProductCard key={cartProduct.id}>
						<h1>{cartProduct.name}</h1>
						<h2>{cartProduct.price}</h2>
						<Image
							alt={'Photo from the product'}
							src={cartProduct.imgUrl}
							width={100}
							height={100}
							layout="fixed"
						/>
						<StyledButton
							variant="delete"
							onClick={() => {
								deleteFromCart(cartProduct.id);
							}}
						>
							Delete
						</StyledButton>
					</StyledProductCard>
				);
			})}
		</StyledProductList>
	);
}

export default ProductListCart;
