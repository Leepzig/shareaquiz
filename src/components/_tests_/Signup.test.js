import { render, screen } from '@testing-library/react';
import Signup from '../sessions/Signup';
import userEvent from '@testing-library/user-event';




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

  test('user is able to type in name input', () => {
    render(<Signup />);
    const input = screen.getByLabelText(/name/i);
    userEvent.type((input, 'Bobby Hill'));
    expect(input).toHaveValue('Bobby Hill');
  })

  test('user is able to type in email input', () => {
    render(<Signup />);
    const input = screen.getByLabelText(/email/i);
    userEvent.type((input, 'bobby@test.com'));
    expect(input).toHaveValue('bobby@test.com');
  })

  test('user is able to type in DOB input', () => {
    render(<Signup />);
    const input = screen.getByLabelText(/date of birth/i);
    userEvent.type((input, '01/01/2000'));
    expect(input).toHaveValue('01/01/2000');
  })

  test('user is able to type in username input', () => {
    render(<Signup />);
    const input = screen.getByLabelText(/Username/i);
    userEvent.type((input, 'testuser'));
    expect(input).toHaveValue('testuser');
  })

  test('user is able to type in password input', () => {
    render(<Signup />);
    const input = screen.getByLabelText(/password/i);
    userEvent.type((input, 'password'));
    expect(input).toHaveValue('password');
  })

  test('user is able to type in password confirmation input', () => {
    render(<Signup />);
    const input = screen.getByLabelText(/confirm password/i);
    userEvent.type((input, 'password'));
    expect(input).toHaveValue('password');
  })

  // test('user password and password confirmation are the same', () => {
  //   render(<Signup />);
  //   const password = screen.getByLabelText(/password/i);
  //   const passwordConfirmation = screen.getByLabelText(/confirm password/i);
  //   userEvent.type((password, 'password'));
  //   userEvent.type((passwordConfirmation, 'password'));
  //   expect(password).toHaveValue('password');
  //   expect(passwordConfirmation).toHaveValue('password');
  // })
})