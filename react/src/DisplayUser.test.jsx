import React from 'react';
import { render, screen } from '@testing-library/react';
import DisplayUser from './DisplayUser';

test('displays the correct firstname and lastname when username is not null', () => {
  const username = { first: 'John', last: 'Smith' };
  render(<DisplayUser username={username} />);
  expect(screen.getByText('Firstname: John')).toBeInTheDocument();
  expect(screen.getByText('Lastname: Smith')).toBeInTheDocument();
});

test('displays "No user selected" when username is null', () => {
  render(<DisplayUser username={null} />);
  expect(screen.getByText('No user selected')).toBeInTheDocument();
});
