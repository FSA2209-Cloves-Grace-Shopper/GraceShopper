import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartSubItem from './CartSubItem';
import { getCartThunk, deleteItemThunk, getCart } from '../store/cart';

const CartSubtotal = () => {
  const dispatch = useDispatch();
  let { orderId, cart, auth } = useSelector((state) => state);

  const [cartTotal, setCartTotal] = useState(0);

  const getCartTotal = (cart) => {
    let total = 0;
    cart.forEach((item) => {
      total += +item.productSubtotal;
    });
    return total;
  };

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
      {cart.length > 0 ? (
        <div>
          {cart.map((item, i) => {
            return (
              <div key={i}>
                <CartSubItem handleDelete={handleDelete} item={item} />
              </div>
            );
          })}
          <h2>Grand Total - ${parseFloat(getCartTotal(cart)).toFixed(2)}</h2>
        </div>
      ) : (
        <strong>Your Cart is Empty!</strong>
      )}
    </>
  );
};

export default CartSubtotal;
