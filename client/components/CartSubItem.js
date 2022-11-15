import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import CartQtyDisplay from './CartQtyDisplay';

const CartSubItem = (props) => {
  const { orderId } = useSelector((state) => state);
  const { item, handleDelete } = props;
  console.log(item);
  return (
    <div>
      <h2>
        <span>{item.name}</span>
        <span>${item.unitPrice}</span>
        <CartQtyDisplay
          item={item}
          orderId={orderId}
          handleDelete={handleDelete}
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
