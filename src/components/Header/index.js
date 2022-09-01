import Link from 'next/link';
import {useRouter} from 'next/router';

import SVG from '../../../public/SVG/svg';
import useStore from '../../hooks/useStore';
import StyledCartCounter from '../CartCounter/styled';
import StyledLink from '../Link/styled';

import StyledHeader from './styled';

export default function Header() {
	const products = useStore(state => state.products);
	const initialValue = 0;
	const totalQuantity = products.reduce(
		(accumulator, current) => accumulator + current.quantity,
		initialValue
	);
	const router = useRouter();
	const path = router.asPath;
	return (
		<StyledHeader>
			{path === '/shoppingcart' ? (
				<>
					<Link href="/" aria-label="Home Page">
						<a>
							<SVG size="45px" color="burlywood" variant="home" />
						</a>
					</Link>

					<h1>SHOPPING CART</h1>
				</>
			) : (
				<>
					<h1>COFTEA</h1>

					<Link href="/shoppingcart" aria-label="Shopping Cart">
						<StyledLink variant="counterHome">
							<SVG size="40px" color="burlywood" variant="cart" />
							<StyledCartCounter variant="counterHome">
								{totalQuantity}
							</StyledCartCounter>
						</StyledLink>
					</Link>
				</>
			)}
		</StyledHeader>
	);
}
