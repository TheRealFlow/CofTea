import Link from 'next/link';

import SVG from '../../../public/SVG/svg';

import StyledHeader from './styled';

export default function Header() {
	return (
		<StyledHeader>
			<h1>COFTEA</h1>
			<Link href="./shoppingcart" aria-label="Shopping Cart">
				<a>
					<SVG size="40px" color="lightgreen" variant="cart" />
				</a>
			</Link>
		</StyledHeader>
	);
}
