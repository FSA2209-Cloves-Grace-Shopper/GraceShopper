import React, { useEffect, useState } from 'react';
import CheckoutForm from './CheckoutForm';
import CartSubtotal from './CartSubtotal';
import ConfirmedOrder from './ConfirmedOrder';

const CheckoutPage = () => {
  const [completed, setCompleted] = useState(false);

  const handleComplete = (value) => {
    setCompleted(value);
  };

  return (
    <>
      {!completed ? (
        <>
          <div>CheckoutPage</div>
          <CartSubtotal />
          <CheckoutForm handleComplete={handleComplete} />
        </>
      ) : (
        <ConfirmedOrder />
      )}
    </>
  );
};

export default CheckoutPage;
