import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCartThunk } from '../store/cart';

// grab cart
const CartSubtotal = () => {
  const dispatch = useDispatch();
  const { orderId, cart } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getCartThunk(orderId));
  }, [orderId]);

  return (
    <>
      <div>CartSubtotal</div>
      {cart.length > 0 ? (
        <div>
          {cart.map((item, i) => (
            <div key={i}>{item.name}</div>
          ))}
        </div>
      ) : (
        <div>Loading</div>
      )}
    </>
  );
};

export default CartSubtotal;
