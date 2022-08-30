import useStore from '../../hooks/useStore';
import StyledCartTag from '../CartTag/styled';

import StyledCartBanner from './styled';

export default function CartBanner() {
	const products = useStore(state => state.products);
	const initialValue = 0;
	const totalPrice = products.reduce(
		(accumulator, current) => accumulator + current.price * current.quantity,
		initialValue
	);
	const totalQuantity = products.reduce(
		(accumulator, current) => accumulator + current.quantity,
		initialValue
	);
	return (
		<StyledCartBanner>
			<StyledCartTag>
				<h2>{totalPrice} €</h2>
			</StyledCartTag>
			<StyledCartTag>
				<h2>{totalQuantity}</h2>
			</StyledCartTag>
		</StyledCartBanner>
	);
}
