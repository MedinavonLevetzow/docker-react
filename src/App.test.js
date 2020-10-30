import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hi there, this is a huge change!/i);
  expect(linkElement).toBeInTheDocument();
});

