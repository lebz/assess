import { render, screen } from '@testing-library/react';
import Banner from './header';

test('renders learn react link', () => {
  render(<Banner />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
