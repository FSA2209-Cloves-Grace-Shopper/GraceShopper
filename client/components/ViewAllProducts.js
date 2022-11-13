import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../store/allProducts';
import ViewProduct from "./ViewProduct"

const ViewAllProducts = () => {
  const dispatch = useDispatch();

  useEffect(() => {dispatch(fetchProducts())}, []);

  const allProducts = useSelector((state) => state.allProducts);

  return (
    <div className="all-products-container">
      {allProducts.map((product) => (
        <div key={product.id}><ViewProduct product={product}/></div>
      ))}
    </div>
  );
};

export default ViewAllProducts