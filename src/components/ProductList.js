import React from 'react';

const ProductList = ({ products, onDelete, onEdit }) => {
  const groupedProducts = products.reduce((result, product) => {
    if (!result[product.category]) {
      result[product.category] = [];
    }
    result[product.category].push(product);
    return result;
  }, {});

  return (
    <div>
      <h2>Product List</h2>
      {Object.keys(groupedProducts).map((category) => (
        <div key={category}>
          <h3 className="product-category">{category}</h3>
          <ul className="product-list">
            {groupedProducts[category].map((product) => (
              <li key={product.productId} className="product-item">
                <div>
                  <strong>{product.productName}</strong> - Price: {product.sellingPrice}
                </div>
                <div className="product-actions">
                  <button className="button" onClick={() => onDelete(product.productId)}>Delete</button>
                  
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
