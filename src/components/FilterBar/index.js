import StyledFilterButton from '../FilterButton/styled';

import StyledFilterBar from './styled';

export default function FilterBar() {
	return (
		<StyledFilterBar>
			<StyledFilterButton variant="coffee">Coffee</StyledFilterButton>
			<StyledFilterButton variant="tea">Tea</StyledFilterButton>
			<StyledFilterButton variant="all">Show All</StyledFilterButton>
		</StyledFilterBar>
	);
}
