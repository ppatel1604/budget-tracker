import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders My Budget Planner link', async () => {
    render(<App />);
    const linkElement = screen.getByText(/My Budget Planner/i);
    expect(linkElement).toBeInTheDocument();
});

test('renders budget texts', async () => {
    render(<App />);
    const budgetElement = screen.getByText(/Budget:/i);
    expect(budgetElement).toBeInTheDocument();
});

test('renders remaining texts', async () => {
    render(<App />);
    const remainingElement = screen.getByText(/Remaining:/i);
    expect(remainingElement).toBeInTheDocument();
});

test('renders spent so far texts', async () => {
    render(<App />);
    const spentSoFarElement = screen.getByText(/Spent so far:/i);
    expect(spentSoFarElement).toBeInTheDocument();
});

test('renders Add Expense texts', async () => {
    render(<App />);
    const addExpenseElement = screen.getByText(/Add Expense/i);
    expect(addExpenseElement).toBeInTheDocument();
});

test('renders name text box', async () => {
    render(<App />);
    const nameElement = screen.getByLabelText(/Name/);
    expect(nameElement).toBeInTheDocument();
});

test('renders cost text box', async () => {
    render(<App />);
    const costElement = screen.getByLabelText(/Cost/);
    expect(costElement).toBeInTheDocument();
});

test('renders save button', async () => {
    render(<App />);
    const saveElement = screen.getByText(/Save/);
    expect(saveElement).toBeInTheDocument();
});
