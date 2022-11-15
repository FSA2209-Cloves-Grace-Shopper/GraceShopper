import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CheckoutForm from './CheckoutForm';
import CartSubtotal from './CartSubtotal';
import { Link } from 'react-router-dom';
import { getCartThunk } from '../store/cart';

const Cart = (props) => {
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <>
      <div>Cart</div>
      <Link to="/products">Continue Shopping</Link>
      <div>
        <div className={'container'}>
          <CartSubtotal />
        </div>
        <a href="/checkoutpage">
          <button>Checkout</button>
        </a>
      </div>
      <div style={{ background: 'grey' }}></div>
    </>
  );
};

export default Cart;
