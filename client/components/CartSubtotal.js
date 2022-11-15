import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartSubItem from './CartSubItem';
import { getCartThunk, deleteItemThunk, getCart } from '../store/cart';

const CartSubtotal = () => {
  const dispatch = useDispatch();
  let { orderId, cart, auth } = useSelector((state) => state);

  useEffect(() => {
    if (auth.id) {
      dispatch(getCartThunk(orderId));
    } else {
      cart = JSON.parse(window.localStorage.getItem('cart'));
      dispatch(getCart(cart));
    }
  }, [orderId]);

  const handleDelete = async (productId, orderId) => {
    if (auth.id) {
      await dispatch(deleteItemThunk(productId, orderId));
      dispatch(getCartThunk(orderId));
    } else {
      cart = JSON.parse(window.localStorage.getItem('cart'));
      cart = cart.filter((item) => item.productId !== productId);
      window.localStorage.setItem('cart', JSON.stringify(cart));
      dispatch(getCart(cart));
    }
  };

  return (
    <>
      <div>CartSubtotal</div>
      {cart.length > 0 ? (
        <div>
          {cart.map((item, i) => {
            return (
              <div key={i}>
                <CartSubItem item={item} />
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
