import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductButtons, ProductCard, ProductImage, ProductTile } from '../.';

const product = {
  id: '1',
  title: 'Coffie Mug - Card',
  img: './coffee-mug.png',
};

const App = () => {
  return (
    <>
      <ProductCard
        initialValues={{
          count: 6,
          maxCount: 10,
        }}
        product={product}
      >
        {({ reset, maxCount, increaseBy, isMaxCountReached }) => (
          <>
            <ProductImage />
            <ProductTile />
            <ProductButtons />
          </>
        )}
      </ProductCard>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
