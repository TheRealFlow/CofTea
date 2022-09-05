/**
 * @jest-environment jsdom
 */

import {userEvent} from '@storybook/testing-library';
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

	describe('Button component', () => {
		it('should allow clicks', async () => {
			const handleClick = jest.fn();
			const text = 'click me';
			render(<StyledButton onClick={handleClick}>{text}</StyledButton>);
			const button = screen.getByText(text);
			await userEvent.click(button);
			expect(handleClick).toHaveBeenCalledTimes(1);
		});
	});
});
