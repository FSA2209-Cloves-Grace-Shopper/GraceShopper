import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCartThunk, deleteItemThunk } from '../store/cart';

// grab cart
const CartSubtotal = () => {
  const dispatch = useDispatch();
  const { orderId, cart } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getCartThunk(orderId));
  }, [orderId]);

  const handleDelete = async (productId, orderId) => {
    await dispatch(deleteItemThunk(productId, orderId));
    dispatch(getCartThunk(orderId));
  };

  return (
    <>
      <div>CartSubtotal</div>
      {cart.length > 0 ? (
        <div>
          {cart.map((item, i) => {
            return (
              <div key={i}>
                <button onClick={() => handleDelete(item.productId, orderId)}>
                  Remove
                </button>
                <h2>
                  {item.name} ({item.quantity} x {item.unitPrice}) total{' '}
                  {item.productSubtotal}
                </h2>
              </div>
            );
          })}
        </div>
      ) : (
        <div>Your Cart is Empty!</div>
      )}
    </>
  );
};

export default CartSubtotal;
