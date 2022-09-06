import Link from 'next/link';
import {useRouter} from 'next/router';

import SVG from '../../../public/SVG/svg';
import useStore from '../../hooks/useStore';
import StyledLink from '../Link/styled';
import StyledSpan from '../StyledSpan/styled';
import TextWrapper from '../TextWrapper/styled';

import StyledHeader from './styled';

export default function Header() {
	const products = useStore(state => state.products);
	const initialQuantity = 0;
	const totalQuantity = products.reduce(
		(accumulator, current) => accumulator + current.quantity,
		initialQuantity
	);
	const router = useRouter();
	const path = router.asPath;
	return (
		<StyledHeader>
			{path === '/shoppingcart' ? (
				<>
					<Link href="/" aria-label="Home Page">
						<a>
							<SVG size="45px" color="var(--secondary-color)" variant="home" />
						</a>
					</Link>

					<h1>SHOPPING CART</h1>
				</>
			) : (
				<>
					<TextWrapper>
						<StyledSpan variant="cof">COF</StyledSpan>
						<StyledSpan variant="tea">TEA</StyledSpan>
					</TextWrapper>

					<Link href="/shoppingcart" aria-label="Shopping Cart">
						<StyledLink variant="counterHome">
							<SVG size="45px" color="var(--secondary-color)" variant="cart" />
							<StyledSpan variant="badge-counter">{totalQuantity}</StyledSpan>
						</StyledLink>
					</Link>
				</>
			)}
		</StyledHeader>
	);
}
