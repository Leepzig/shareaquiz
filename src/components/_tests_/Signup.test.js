import { render, screen } from '@testing-library/react';
import Signup from '../sessions/Signup';




test('has a header of Please Signup', () => {
  render(<Signup />);
  const header = screen.getByRole('heading', { name: 'Please Signup' });
  expect(header).toBeInTheDocument();
})

test('has a button that says Create Account', () => {
  render(<Signup />);
  const button = screen.getByRole('button', { name: 'Create Account' });
  expect(button).toBeInTheDocument();
})