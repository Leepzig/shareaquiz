import { render, screen } from '@testing-library/react';
import Login from '../sessions/Login';
import userEvent from '@testing-library/user-event'

test('has a header of Please Login', () => {
  render(<Login />);
  const header = screen.getByRole('heading', { name: /Please Login/i });
  expect(header).toBeInTheDocument();
})

describe('login form', () => {
  test('has a username input', () => {
    render(<Login />);
    const username = screen.getByLabelText(/Username/i);
    expect(username).toBeInTheDocument();
  })

  test('has a password input', () => {
    render(<Login />);
    const password = screen.getByLabelText(/Password/i);
    expect(password).toBeInTheDocument();
  })

  test('has a button with name of Login', () => {
    render(<Login />);
    const button = screen.getByRole('button', { name: /Login/i});
    expect(button).toBeInTheDocument();
  })

  test('user is able to type in username input', () => {
    render(<Login />);
    const input = screen.getByLabelText(/Username/i);
    userEvent.type((input, 'testuser'));
    expect(input).toHaveValue('testuser');
  })

  test('user is able to type in password input', () => {
    render(<Login />);
    const input = screen.getByLabelText(/password/i);
    userEvent.type((input, 'password'));
    expect(input).toHaveValue('password');
  })
})


