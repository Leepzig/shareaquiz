import { render, screen } from '@testing-library/react';
import Signup from '../sessions/Signup';




test('has a header of Please Signup', () => {
  render(<Signup />);
  const header = screen.getByRole('heading', { name: /Please Signup/i });
  expect(header).toBeInTheDocument();
})

describe('signup form', () => {

  test('has a name input', () => {
    render(<Signup />);
    const nameInput = screen.getByLabelText(/Name/i);
    expect(nameInput).toBeInTheDocument();
  })

  test('has a email input', () => {
    render(<Signup />);
    const emailInput = screen.getByLabelText(/Email/);
    expect(emailInput).toBeInTheDocument();
  })

  test('has a DOB input', () => {
    render(<Signup />);
    const dobInput = screen.getByLabelText(/Date of Birth/i);
    expect(dobInput).toBeInTheDocument();
  })

  test('has a username input', () => {
    render(<Signup />);
    const username = screen.getByLabelText(/Username/i);
    expect(username).toBeInTheDocument();
  })

  test('has a password input', () => {
    render(<Signup />);
    const password = screen.getByLabelText(/Password/i);
    expect(password).toBeInTheDocument();
  })

  test('has a password confirmation input', () => {
    render(<Signup />);
    const passwordConfirmation = screen.getByLabelText(/Confirm Password/i);
    expect(passwordConfirmation).toBeInTheDocument();
  })

  test('has a button that says Create Account', () => {
    render(<Signup />);
    const button = screen.getByRole('button', { name: /Create Account/i });
    expect(button).toBeInTheDocument();
  })
})