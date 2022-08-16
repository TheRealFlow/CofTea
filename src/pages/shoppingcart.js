import Link from 'next/link';

import SVG from '../../public/SVG/svg';
import Header from '../components/Header';

export default function ShoppingCartPage() {
	return (
		<>
			<Header />
			<Link href="/">
				<a>
					<SVG size="40px" color="black" variant="backArrow" />
				</a>
			</Link>
		</>
	);
}
