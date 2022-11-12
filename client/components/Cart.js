import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CheckoutForm from './CheckoutForm';
import CartSubtotal from './CartSubtotal';
import { Link } from 'react-router-dom';

const Cart = (props) => {
  const { auth } = useSelector((state) => state);
  return (
    <>
      <div>Cart</div>
      <Link to="/products">Continue Shopping</Link>
      {auth.id ? (
        <div style={{ background: 'red' }}>
          <CartSubtotal uid={auth.id} />
        </div>
      ) : (
        <h1>Loading</h1>
      )}

      <div style={{ background: 'grey' }}></div>
    </>
  );
};

export default Cart;
