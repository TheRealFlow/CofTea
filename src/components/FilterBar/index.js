import Link from 'next/link';

import StyledButton from '../Button/styled';

import StyledFilterBar from './styled';

export default function FilterBar() {
	return (
		<StyledFilterBar>
			<Link href="./coffee">
				<StyledButton variant="coffee">Coffee</StyledButton>
			</Link>
			<Link href="./tea">
				<StyledButton variant="tea">Tea</StyledButton>
			</Link>
			<Link href="./">
				<StyledButton variant="all">Show All</StyledButton>
			</Link>
		</StyledFilterBar>
	);
}
