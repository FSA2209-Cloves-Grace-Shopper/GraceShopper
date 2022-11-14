import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const CheckoutForm = ({ user = {} }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: user,
  });
  const handleSave = (formVal) => {
    // console.log(formVal);
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
