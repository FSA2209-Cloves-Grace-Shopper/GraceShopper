import React from 'react';
import CheckoutForm from './CheckoutForm';
import CartSubtotal from './CartSubtotal';

const Cart = (props) => {
  console.log(props.auth);
  return (
    <>
      <div>Cart</div>
      <div style={{ background: 'red' }}>
        <CartSubtotal />
      </div>
      <div style={{ background: 'grey' }}>
        <CheckoutForm />
      </div>
    </>
  );
};

export default Cart;
