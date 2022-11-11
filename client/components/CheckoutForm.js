import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';

const CheckoutForm = ({ user = {}, isLoggedIn }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: user,
  });
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
      </div>
      <div>
        <label>Last Name</label>
        <input type="text" {...register('lastName')} />
      </div>
      <div>
        <label>Address</label>
        <input type="text" {...register('address')} />
      </div>
      <div>
        <label>email</label>
        <input type="text" {...register('email')} />
      </div>
      <div>
        <button type="submit">Submit Form</button>
      </div>
    </form>
  );
};

export default CheckoutForm;
