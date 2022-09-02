/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';

import StyledButton from './styled';

describe('Button component', () => {
	it('should render children', () => {
		const text = 'click me';
		render(<StyledButton>{text}</StyledButton>);
		const button = screen.getByText(text);
		expect(button).toBeInTheDocument();
	});
});
