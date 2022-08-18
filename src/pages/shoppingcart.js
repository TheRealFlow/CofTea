import Link from 'next/link';

import SVG from '../../public/SVG/svg';
import Header from '../components/Header';
import ProductListCart from '../components/ProductList/cart';

export default function ShoppingCartPage() {
	return (
		<>
			<Header />

			<Link href="/" aria-label="Back Arrow">
				<a>
					<SVG size="40px" color="black" variant="backArrow" />
				</a>
			</Link>
			<ProductListCart />
		</>
	);
}
