import { render, screen } from '@testing-library/react';
import App from './App';

test('renders custom text', () => {
  render(<App />);
  const customTextElement = screen.getByText(test-job);
  expect(customTextElement).toBeInTheDocument();
});
