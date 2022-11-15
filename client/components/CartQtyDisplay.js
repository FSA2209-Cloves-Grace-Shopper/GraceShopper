import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateQtyThunk, deleteItemThunk, getCartThunk } from '../store/cart';

const CartQtyDisplay = (props) => {
  const { item, orderId } = props;
  const [isEdited, setIsEdited] = useState(false);
  const [qty, setQty] = useState(item.quantity);
  const dispatch = useDispatch();
  // console.log(item.name, item.quantity);
  const handleChange = async (event) => {
    // console.log(event.target);
    setQty(event.target.qty);
    let isEqual = +event.target.value !== item.quantity;
    await setIsEdited(isEqual);
  };

  const handleSubmit = async (event) => {
    let value = +event.target.qty.value;
    event.preventDefault();
    // console.log(orderId);
    if (value === 0) {
      dispatch(deleteItemThunk(item.productId, orderId));
      await dispatch(getCartThunk(orderId));
    } else {
      const data = await dispatch(
        updateQtyThunk(orderId, item.productId, value)
      );
      setIsEdited(false);
      await dispatch(getCartThunk(orderId));
      setQty(value);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        name="qty"
        defaultValue={qty}
        onChange={handleChange}
      />
      {!isEdited ? (
        <></>
      ) : (
        <span>
          <button type="submit">Update</button>
        </span>
      )}
    </form>
  );
};

export default CartQtyDisplay;
