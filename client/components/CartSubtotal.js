import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCartThunk } from '../store/cart';

// grab cart
const CartSubtotal = (props) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log(props);

  useEffect(() => {
    dispatch(getCartThunk(props.uid));
  }, []);

  return <div>CartSubtotal</div>;
};

export default CartSubtotal;
