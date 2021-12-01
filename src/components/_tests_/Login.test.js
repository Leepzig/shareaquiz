import { render, screen } from '@testing-library/react';
import Login from '../sessions/Login';

test('has a header of Please Login', () => {
  render(<Login />);
  const header = screen.getByRole('heading', { name: 'Please Login' });
  expect(header).toBeInTheDocument();
})

describe('login form', () => {
  test('has a username input', () => {
    render(<Login />);
    const username = screen.getByLabelText('Username');
    expect(username).toBeInTheDocument();
  })

  test('has a password input', () => {
    render(<Login />);
    const password = screen.getByLabelText('Password');
    expect(password).toBeInTheDocument();
  })

  test('has a button with name of Login', () => {
    render(<Login />);
    const button = screen.getByRole('button', { name: 'Login' });
    expect(button).toBeInTheDocument();
  })

  test('user is able to type in username input', () => {
    render(<Login />);
    const input = screen.getByLabelText('Username');
    userEvent.type((input, 'testuser'));
    expect(input).toHaveValue('testuser');
  })

})
