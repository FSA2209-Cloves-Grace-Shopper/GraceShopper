import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { string, z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { checkoutThunk } from '../store/cart';
import history from '../history';
import ConfirmedOrder from './ConfirmedOrder';

// schema for form validation
const schema = z.object({
  firstName: string().min(1, { message: 'First name is required' }),
  lastName: string().min(1, { message: 'Last name is required' }),
  email: string().email(),
  address: string().min(1, { message: 'Address is required' }),
});

const CheckoutForm = ({ user = {}, isLoggedIn, handleComplete }) => {
  const dispatch = useDispatch();
  const currentState = useSelector((state) => {
    return state;
  });
  const { register, handleSubmit, formState, setValue } = useForm({
    reValidateMode: 'all',
    resolver: zodResolver(schema),
  });

  const { errors } = formState;

  const { auth, orderId } = useSelector((state) => {
    return state;
  });

  const handleSave = (formVal) => {
    dispatch(checkoutThunk(formVal, orderId, auth.id));
    handleComplete(true);
  };

  useEffect(() => {
    if (currentState.auth.id) {
      setValue('firstName', currentState.auth.firstName, { shouldTouch: true });
      setValue('lastName', currentState.auth.lastName, { shouldTouch: true });
      setValue('address', currentState.auth.address, { shouldTouch: true });
      setValue('email', currentState.auth.email, { shouldTouch: true });
    }
  });

  return (
    <>
      <form onSubmit={handleSubmit(handleSave)}>
        <h1>Checkout Form</h1>
        <div>
          <div>Shipping address:</div>
          <label>First Name</label>
          <input
            type="text"
            {...register('firstName')}
            // defaultValue={currentState.auth.firstName}
          />
          <div style={{ color: 'red' }}>{errors.firstName?.message}</div>
        </div>
        <div>
          <label>Last Name</label>
          <input
            type="text"
            {...register('lastName')}
            // defaultValue={currentState.auth.lastName}
          />

          <div style={{ color: 'red' }}>{errors.lastName?.message}</div>
        </div>
        <div>
          <label>Address</label>
          <input
            type="text"
            {...register('address')}
            // defaultValue={currentState.auth.address}
          />

          <div style={{ color: 'red' }}>{errors.address?.message}</div>
        </div>
        <div>
          <label>email</label>
          <input
            type="text"
            {...register('email')}
            // defaultValue={currentState.auth.email}
          />

          <div style={{ color: 'red' }}>{errors.email?.message}</div>
        </div>
        <div>
          <button type="submit">Confirm Order</button>
        </div>
      </form>
    </>
  );
};

export default CheckoutForm;
