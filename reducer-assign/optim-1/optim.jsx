import React, { useState, useMemo, useCallback } from 'react';

const generateProducts = () => {
  const products = [];
  for (let i = 1; i <= 1000; i++) {
    products.push({
      id: i,
      name: `Product ${i}`,
      price: Math.floor(Math.random() * 100) + 1
    });
  }
  return products;
};

const ProductList = ({ products, onSelectProduct }) => {
  console.log('ProductList re-rendered');
  
  return (
    <div>
      <h3>Product List</h3>
      {products.slice(0, 10).map(product => (
        <div key={product.id} onClick={() => onSelectProduct(product)}>
          {product.name} - ${product.price}
        </div>
      ))}
    </div>
  );
};

export const Optim = () => {
  const [products] = useState(generateProducts());
  const [counter, setCounter] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const totalPrice = useMemo(() => {
    console.log('Calculating total price...');
    return products.reduce((sum, product) => sum + product.price, 0);
  }, [products]);

  const handleSelectProduct = useCallback((product) => {
    setSelectedProduct(product);
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Performance Optimization</h1>
      
      <div>
        <h2>Counter: {counter}</h2>
        <button onClick={() => setCounter(c => c + 1)}>Increment Counter</button>
      </div>

      <div>
        <h2>Total Price: ${totalPrice}</h2>
      </div>

      {selectedProduct && (
        <div>
          <h3>Selected: {selectedProduct.name} - ${selectedProduct.price}</h3>
        </div>
      )}

      <ProductList products={products} onSelectProduct={handleSelectProduct} />
    </div>
  );
};
