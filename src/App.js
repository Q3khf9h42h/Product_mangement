import React, { useState, useEffect } from 'react';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import './styles.css';

const App = () => {
  const categories = ['Electronic Item', 'Food Item', 'Skincare Item'];

  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    setProducts(storedProducts);
  }, []);

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);
  const handleAddProduct = (product) => {
    // Generate a unique ID for the new product
    const newProductId = Date.now().toString();
    const newProduct = { ...product, productId: newProductId };
    setProducts([...products, newProduct]);
  };
  
 

  const handleDeleteProduct = (productId) => {
    const updatedProducts = products.filter((product) => product.productId !== productId);
    setProducts(updatedProducts);
  };
  const handleEditProduct = (product) => {
    setEditingProduct(product);
  };
  
  const handleUpdateProduct = (updatedProduct) => {
    const updatedProducts = products.map((product) =>
      product.productId === updatedProduct.productId ? updatedProduct : product
    );
    setProducts(updatedProducts);
    setEditingProduct(null);
  };
  

  return (
    <div className="container">
      <h1 className="header">Product Management App</h1>
      <div className="form-container">
        <ProductForm categories={categories} onSave={editingProduct ? handleUpdateProduct : handleAddProduct} />
      </div>
      <ProductList
        products={products}
        onDelete={handleDeleteProduct}
        onEdit={handleEditProduct}
      />
    </div>

  );
};

export default App;
