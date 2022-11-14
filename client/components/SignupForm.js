import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { string, z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { addUser } from '../store/users'

// schema for form validation
const schema = z.object({
  firstName: string().min(1, { message: 'First name is required' }),
  lastName: string().min(1, { message: 'Last name is required' }),
  email: string().email(),
  address: string().min(1, { message: 'Address is required' }),
  password: string().min(8, { message: 'Password is required (8 Character Minimum)' }),
});

const SignupForm = ({ user = {}, isLoggedIn }) => {
  const { register, watch, handleSubmit, formState } = useForm({
    defaultValues: user,
    resolver: zodResolver(schema),
  });

  const { errors } = formState;
  const dispatch = useDispatch();

  const onSave = (user) => {
    dispatch(addUser(user));
  };

  return (
    <form className="signup-form" onSubmit={handleSubmit(onSave)}>
      <h1>Signup Form</h1>
    
      <div>
      <h3>Shipping address:</h3>
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
        <label>password</label>
        <input type="text" {...register('password')} />

        <div style={{ color: 'red' }}>{errors.password?.message}</div>
      </div>
      <div>
        <button type="submit">Confirm Signup</button>
      </div>
    </form>
  );
};

export default SignupForm;
