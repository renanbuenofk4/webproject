import { render, screen } from '@testing-library/react';
import App from './App';

test('renders custom text', () => {
  render(<App />);
  const customTextElement = screen.getByText(/LOGIN/i); // Procurar por um texto específico, como "LOGIN"
  expect(customTextElement).toBeInTheDocument();
});
