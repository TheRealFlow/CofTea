import Link from 'next/link';

import SVG from '../../../public/SVG/svg';

import StyledHeader from './styled';

export default function Header() {
	return (
		<StyledHeader>
			<Link href="./">
				<h1>COFTEA</h1>
			</Link>
			<Link href="./shoppingcart" aria-label="Shopping Cart">
				<a>
					<SVG size="40px" color="burlywood" variant="cart" />
				</a>
			</Link>
		</StyledHeader>
	);
}
