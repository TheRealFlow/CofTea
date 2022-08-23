import Link from 'next/link';

import StyledLink from '../Link/styled';

import StyledFilterBar from './styled';

export default function FilterBar() {
	return (
		<StyledFilterBar>
			<Link href="./coffee">
				<StyledLink variant="coffee">Coffee</StyledLink>
			</Link>
			<Link href="./tea">
				<StyledLink variant="tea">Tea</StyledLink>
			</Link>
			<Link href="./">
				<StyledLink variant="all">Show all</StyledLink>
			</Link>
		</StyledFilterBar>
	);
}
