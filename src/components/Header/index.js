import SVG from '../../../public/SVG/svg';

import StyledHeader from './styled';

export default function Header() {
	return (
		<StyledHeader>
			<SVG size="40px" color="lightgreen" variant="cart" />
		</StyledHeader>
	);
}
