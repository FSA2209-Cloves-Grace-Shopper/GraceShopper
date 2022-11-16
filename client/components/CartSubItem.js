import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import CartQtyDisplay from './CartQtyDisplay';
import { useDispatch } from 'react-redux';
import { updateQtyThunk, getCartThunk, getCart } from '../store/cart';

const CartSubItem = (props) => {
  // const { item, orderId, auth, handleDelete } = useSelector((state) => state);
  const { item, orderId, auth, handleDelete } = props;
  const [isEdited, setIsEdited] = useState(false);
  const roundedSubTotal = parseFloat(item.productSubtotal).toFixed(2);
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
      if (+event.target.qty.value === 0) {
        handleDelete(item.productId, orderId);
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
    <div>
      <h2>
        <span>{item.name}</span>
        <span>${item.unitPrice}</span>
        <form
          key={props.key}
          onSubmit={handleSubmit}
          name="qtyForm"
          id={`${item.productId}`}
        >
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
        total ${roundedSubTotal}
      </h2>
      <button onClick={() => handleDelete(item.productId, orderId)}>
        Remove
      </button>
    </div>
  );
};

export default CartSubItem;
