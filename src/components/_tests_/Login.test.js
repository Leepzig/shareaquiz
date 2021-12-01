import { render, screen } from '@testing-library/react';
import Login from '../sessions/Login';

test('has a header of Please Login', () => {
  render(<Login />);
  const header = screen.getByRole('heading', { name: 'Please Login' });
  expect(header).toBeInTheDocument();
})

test('has a button with name of Login', () => {
  render(<Login />);
  const button = screen.getByRole('button', { name: 'Login' });
  expect(button).toBeInTheDocument();
})