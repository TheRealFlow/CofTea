import SVG from '../../../public/SVG/svg';
import useStore from '../../hooks/useStore';
import StyledCartCounter from '../CartCounter/styled';
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
				<StyledCartCounter>{totalPrice} </StyledCartCounter>
				<SVG size="30px" color="black" variant="totalPrice" />
			</StyledCartTag>
			<StyledCartTag>
				<StyledCartCounter>{totalQuantity}</StyledCartCounter>
				<SVG size="30px" color="black" variant="totalQuantity" />
			</StyledCartTag>
		</StyledCartBanner>
	);
}
