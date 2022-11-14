import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CheckoutForm from './CheckoutForm';
import CartSubtotal from './CartSubtotal';
import { Link } from 'react-router-dom';
import { getCartThunk } from '../store/cart';

const Cart = (props) => {
  const { auth, orderId } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartThunk(orderId));
  }, []);

  return (
    <>
      <div>Cart</div>
      <Link to="/products">Continue Shopping</Link>
      {auth.id ? (
        <div>
          <div className={'container'}>
            <CartSubtotal uid={auth.id} />
          </div>
          <a href="/checkoutpage">
            <button>Checkout</button>
          </a>
        </div>
      ) : (
        <h1>Loading</h1>
      )}
      <div style={{ background: 'grey' }}></div>
    </>
  );
};

export default Cart;
