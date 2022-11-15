import React from 'react';
import CheckoutForm from './CheckoutForm';
import CartSubtotal from './CartSubtotal';

const CheckoutPage = () => {
  return (
    <>
      <div>CheckoutPage</div>
      <CartSubtotal />
      <CheckoutForm />
    </>
  );
};

export default CheckoutPage;
