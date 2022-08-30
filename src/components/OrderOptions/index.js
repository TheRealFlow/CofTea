import StyledOrderOptions from './styled';

export default function OrderOptions() {
	return (
		<StyledOrderOptions>
			<span>Where do you want to enjoy your drink?</span>
			<label>
				To-Go
				<input type="radio" required />
			</label>
			<label>
				In-House
				<input type="radio" required checked />
			</label>
		</StyledOrderOptions>
	);
}
