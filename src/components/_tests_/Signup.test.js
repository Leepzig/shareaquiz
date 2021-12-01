import { render, screen } from '@testing-library/react';
import Signup from '../sessions/Signup';




test('has a header of Please Signup', () => {
  render(<Signup />);

  const header = screen.getByRole('heading', { name: 'Please Signup' });

  expect(header).toBeInTheDocument();
})