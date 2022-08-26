import useStore from '../../hooks/useStore';

import StyledFilterBar from './styled';
export default function FilterBar() {
	const filterCategory = useStore(state => state.filterCategory);
	return (
		<StyledFilterBar>
			<button
				onClick={() => {
					filterCategory('coffee');
				}}
			>
				Coffee
			</button>
			<button
				onClick={() => {
					filterCategory('tea');
				}}
			>
				Tee
			</button>
		</StyledFilterBar>
	);
}
