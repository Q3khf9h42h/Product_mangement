import React, { useState } from 'react';

const ProductForm = ({ categories, onSave }) => {
  const [productName, setProductName] = useState('');
  const [category, setCategory] = useState(categories[0]);
  const [productId, setProductId] = useState('');
  const [sellingPrice, setSellingPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ productName, category, productId, sellingPrice });
    setProductName('');
    setCategory(categories[0]);
    setProductId('');
    setSellingPrice('');
  };

  return (
    <div>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Product Name:
          <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} />
        </label>
        <label>
          Category:
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </label>
        <label>
          Product ID:
          <input type="text" value={productId} onChange={(e) => setProductId(e.target.value)} />
        </label>
        <label>
          Selling Price:
          <input type="text" value={sellingPrice} onChange={(e) => setSellingPrice(e.target.value)} />
        </label>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default ProductForm;
