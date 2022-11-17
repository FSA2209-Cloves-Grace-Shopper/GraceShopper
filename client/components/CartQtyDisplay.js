import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateQtyThunk, getCartThunk, getCart } from '../store/cart';

const CartQtyDisplay = (props) => {
  const { item, orderId, auth, handleDelete } = props;
  const [isEdited, setIsEdited] = useState(false);
  const [qty, setQty] = useState(item.quantity);

  const dispatch = useDispatch();

  const handleChange = async (event) => {
    setQty(event.target.qty);
    let isEqual = +event.target.value !== item.quantity;
    await setIsEdited(isEqual);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (auth.id) {
      if (+event.target.qty.value === 0) {
        handleDelete(item.productId, orderId);
      } else {
        await dispatch(
          updateQtyThunk(orderId, item.productId, +event.target.qty.value)
        );
        setIsEdited(false);
        await dispatch(getCartThunk(orderId));
      }
    } else {
      if (+event.target.qty.value <= 0) {
        window.alert(
          'Please click remove if you would like to remove this item from your cart. '
        );
        // handleDelete(item.productId, orderId);
      } else {
        let cart = JSON.parse(window.localStorage.getItem('cart'));
        cart = cart.map((cartItem) => {
          if (cartItem.productId === +event.target.id) {
            cartItem.quantity = +event.target.qty.value;
            cartItem.productSubtotal = +cartItem.unitPrice * cartItem.quantity;
            return cartItem;
          } else {
            return cartItem;
          }
        });
        window.localStorage.setItem('cart', JSON.stringify(cart));
        dispatch(getCart(cart));
        setIsEdited(false);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} name="qtyForm" id={`${item.productId}`}>
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
