import StyledButton from '../Button/styled';

import StyledFilterBar from './styled';

export default function FilterBar() {
	return (
		<StyledFilterBar>
			<StyledButton variant="coffee">Coffee</StyledButton>
			<StyledButton variant="tea">Tea</StyledButton>
			<StyledButton variant="all">Show All</StyledButton>
		</StyledFilterBar>
	);
}
