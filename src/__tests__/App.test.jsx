
import { render, screen } from '@testing-library/react';
import App from '../App';
test('renders Developer Setup heading', () => {
  render(<App />);
  const txt = screen.getByText(/Developer Setup/i);
  expect(txt).toBeInTheDocument();
});
