import Link from 'next/link';
import {useRouter} from 'next/router';

import SVG from '../../../public/SVG/svg';

import StyledHeader from './styled';

export default function Header() {
	const router = useRouter();
	const path = router.asPath;
	return (
		<StyledHeader>
			{path === '/' ? (
				<>
					<h1>COFTEA</h1>

					<Link href="/shoppingcart" aria-label="Shopping Cart">
						<a>
							<SVG size="40px" color="burlywood" variant="cart" />
						</a>
					</Link>
				</>
			) : (
				<>
					<Link href="/" aria-label="Home Page">
						<a>
							<SVG size="45px" color="burlywood" variant="home" />
						</a>
					</Link>

					<h1>SHOPPING CART</h1>
				</>
			)}
		</StyledHeader>
	);
}
