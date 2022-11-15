import React from 'react';
import { useSelector } from 'react-redux';
import CartQtyDisplay from './CartQtyDisplay';

const CartSubItem = (props) => {
  const { orderId, auth } = useSelector((state) => state);
  const { item, handleDelete } = props;
  const roundedSubTotal = parseFloat(item.productSubtotal).toFixed(2);

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
        total ${roundedSubTotal}
      </h2>
      <button onClick={() => handleDelete(item.productId, orderId)}>
        Remove
      </button>
    </div>
  );
};

export default CartSubItem;
