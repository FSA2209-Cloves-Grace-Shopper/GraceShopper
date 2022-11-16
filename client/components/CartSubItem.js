import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCartThunk, deleteItemThunk } from '../store/cart';
import CartQtyDisplay from './CartQtyDisplay';

const CartSubItem = (props) => {
  const dispatch = useDispatch();
  const { orderId, auth } = useSelector((state) => state);
  const { item } = props;

  const handleDelete = async (productId, orderId) => {
    await dispatch(deleteItemThunk(productId, orderId));
    dispatch(getCartThunk(orderId));
  };

  return (
    <div>
      <h2>
        <span>{item.name}</span>
        <span>${item.unitPrice}</span>
        <CartQtyDisplay
          item={item}
          orderId={orderId}
          handleDelete={handleDelete}
          auth={auth}
        />
        total {item.productSubtotal}
      </h2>
      <button onClick={() => handleDelete(item.productId, orderId)}>
        Remove
      </button>
    </div>
  );
};

export default CartSubItem;
