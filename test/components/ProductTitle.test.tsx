import React from 'react';
import renderer from 'react-test-renderer';
import ProductCard, { ProductTile } from '../../src/components';
import { product1 } from '../data/products';

describe('ProductTitle', () => {
  test('debe de mostrar el componente con el titulo personalizado', () => {
    const wrapper = renderer.create(
      <ProductTile title="test" className="cutom-class" />
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('debe de mostrar el componente con el titulo personalizado', () => {
    const wrapper = renderer.create(
      <ProductCard product={product1}>
        {() => <ProductTile title="test" className="cutom-class" />}
      </ProductCard>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
