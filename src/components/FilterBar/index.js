import useStore from '../../hooks/useStore';
import StyledButton from '../Button/styled';

import StyledFilterBar from './styled';

export default function FilterBar() {
	const coffeeCard = useStore(state => state.coffeeCard);
	const filterCoffee = useStore(state => state.filterCoffee);

	return (
		<StyledFilterBar>
			<StyledButton
				variant="coffee"
				onClick={() => {
					filterCoffee(coffeeCard.category);
				}}
			>
				Coffee
			</StyledButton>
			<StyledButton variant="tea">Tea</StyledButton>
			<StyledButton variant="all">Show All</StyledButton>
		</StyledFilterBar>
	);
}
