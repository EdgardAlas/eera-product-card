import React from 'react';
import renderer from 'react-test-renderer';
import ProductCard, { ProductImage } from '../../src/components';
import { product1 } from '../data/products';

describe('ProductImage', () => {
  test('debe de mostrar el componente con la imagen personalizada', () => {
    const wrapper = renderer.create(
      <ProductImage img="https://via.placeholder.com/150" />
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('debe de mostrar la imagendel producto', () => {
    const wrapper = renderer.create(
      <ProductCard product={product1}>{() => <ProductImage />}</ProductCard>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
