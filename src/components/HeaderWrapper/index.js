import FilterBar from '../FilterBar';
import Header from '../Header';

import StyledHeaderWrapper from './styled';

export default function HeaderWrapper() {
	return (
		<StyledHeaderWrapper>
			<Header />
			<FilterBar />
		</StyledHeaderWrapper>
	);
}
