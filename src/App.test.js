import { render, screen } from '@testing-library/react';
import App from './App';

describe('check homepage renders', () => {
  test('renders homepage', () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot()
  });
});
