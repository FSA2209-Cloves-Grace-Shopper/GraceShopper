import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../store/allProducts';

const ViewAllProducts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts())
  }, []);

  const products = useSelector((state) => state.allProducts);
  
  return (
    <div>
      <h2 className="allProductsTitle">
        {'PRODUCTS'}
      </h2>
      <ul>{products.map((product) => (
        <li key={product.id}>
          <p>Brand: {product.name}</p>
          <p>Type: {product.type}</p>
          <p>Description: {product.description}</p>
          <p>Price: {product.price}</p>
        </li> 
      ))}
      </ul>
    </div>
  );
};

export default ViewAllProducts;