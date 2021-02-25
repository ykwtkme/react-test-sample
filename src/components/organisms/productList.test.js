import { render, screen } from '@testing-library/react';
import ProductList from './productList';

describe('check homepage renders', () => {
  test('category', () => {
    const { asFragment } = render(
      <ProductList
        items={[
          {
            name: "チョコレート",
            category: {
              name: "お菓子"
            },
            weight: 100,
            price: 120
          },
        ]}
      />);
    expect(asFragment()).toMatchSnapshot()
  });
  test('no category', () => {
    const { asFragment } = render(
      <ProductList
        items={[
          {
            name: "チョコレート",
            weight: 100,
            price: 120
          },
        ]}
      />);
    expect(asFragment()).toMatchSnapshot()
  });
})
