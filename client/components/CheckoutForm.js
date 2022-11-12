import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { string, z } from 'zod';

const schema = z.object({
  firstName: string().min(1, { message: 'First name is required' }),
  lastName: string().min(1, { message: 'Last name is required' }),
  email: string().email(),
  address: string().min(1, { message: 'Address is required' }),
});

const CheckoutForm = ({ user = {} }) => {
  const { register, handleSubmit, formState } = useForm({
import { useSelector, useDispatch } from 'react-redux';
const CheckoutForm = ({ user = {}, isLoggedIn }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: user,
    resolver: zodResolver(schema),
  });


  const { errors } = formState;
  const dispatch = useDispatch();

  const currentState = useSelector((state) => {
    return state;
  });


  const handleSave = (formVal) => {
    if (currentState.auth.id) {
    }
  };

  return (
    <form onSubmit={handleSubmit(handleSave)}>
      <h1>Check Out Form</h1>
      <div>
        <label>First Name</label>
        <input type="text" {...register('firstName')} />

        <div style={{ color: 'red' }}>{errors.firstName?.message}</div>
      </div>
      <div>
        <label>Last Name</label>
        <input type="text" {...register('lastName')} />

        <div style={{ color: 'red' }}>{errors.lastName?.message}</div>

      </div>
      <div>
        <label>Address</label>
        <input type="text" {...register('address')} />

        <div style={{ color: 'red' }}>{errors.address?.message}</div>

      </div>
      <div>
        <label>email</label>
        <input type="text" {...register('email')} />

        <div style={{ color: 'red' }}>{errors.email?.message}</div>

      </div>
      <div>
        <button type="submit">Submit Form</button>
      </div>
    </form>
  );
};

export default CheckoutForm;
