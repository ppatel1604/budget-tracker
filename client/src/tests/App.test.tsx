import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders My Budget Planner link', () => {
    render(<App />);
    const linkElement = screen.getByText(/My Budget Planner/i);
    expect(linkElement).toBeInTheDocument();
});
