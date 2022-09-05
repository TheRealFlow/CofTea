import StyledSelectTable from './styled';

export default function SelectTable() {
	return (
		<StyledSelectTable>
			<span>Please choose a Table. We will bring your drink to you</span>
			<label>
				Select your table
				<select>
					<option>Select Table:</option>
					<option>Table 1</option>
					<option>Table 2</option>
					<option>Table 3</option>
					<option>Table 4</option>
					<option>Table 5</option>
					<option>Table 6</option>
					<option>Table 7</option>
					<option>Table 8</option>
					<option>Table 9</option>
					<option>Table 10</option>
				</select>
			</label>
		</StyledSelectTable>
	);
}
