import useStore from '../../hooks/useStore';
import StyledCartCounter from '../CartCounter/styled';
import StyledCartTag from '../CartTag/styled';

import StyledCartBanner from './styled';

export default function CartBanner() {
	const convert = Intl.NumberFormat('de-DE', {
		style: 'currency',
		currency: 'EUR',
		minimumFractionDigits: 2,
	});
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
				<StyledCartCounter>Total: {convert.format(totalPrice)}</StyledCartCounter>
			</StyledCartTag>
			<StyledCartTag>
				<StyledCartCounter>Quantity: {totalQuantity}</StyledCartCounter>
			</StyledCartTag>
		</StyledCartBanner>
	);
}
