import Image from 'next/image';

import useStore from '../../hooks/useStore';
import StyledButton from '../Button/styled';
import StyledProductCard from '../ProductCard/styled';

import StyledProductList from './styled';

function ProductListCart() {
	const cartProducts = useStore(state => state.cartProducts);
	const deleteFromCart = useStore(state => state.deleteFromCart);

	return (
		<StyledProductList>
			{cartProducts.map(cartProduct => {
				return (
					<StyledProductCard key={cartProduct.id}>
						<h2>{cartProduct.name}</h2>
						<h3>{cartProduct.price}</h3>
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
