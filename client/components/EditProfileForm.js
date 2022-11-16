import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { string, z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { editUserThunk } from '../store/singleUser';

// schema for form validation
const schema = z.object({
  firstName: string().min(1, { message: 'First name is required' }),
  lastName: string().min(1, { message: 'Last name is required' }),
  email: string().email(),
  address: string().min(1, { message: 'Address is required' }),
  password: string(),
});

const EditProfileForm = ({ user = {}, isLoggedIn }) => {
  const { register, handleSubmit, formState } = useForm({
    defaultValues: {
      firstName: user.firstName,
      lastName: user.lastName,
      address: user.address,
      email: user.email,
      password: '',
    },
    resolver: zodResolver(schema),
  });

  const { errors } = formState;
  const dispatch = useDispatch();

  const currentState = useSelector((state) => {
    return state;
  });

  const handleSave = (formVal) => {
    formVal.id = currentState.auth.id;
    if (formVal.password.length < 1) {
      delete formVal.password;
    }

    dispatch(editUserThunk(formVal));
  };

  return (
    <form onSubmit={handleSubmit(handleSave)}>
      <h1>Edit Profile</h1>
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
        <label>Password (Optional)</label>
        <input type="text" {...register('password')} />
        <div style={{ color: 'red' }}>{errors.password?.message}</div>
      </div>

      <div>
        <button type="submit">Confirm Edit</button>
      </div>
    </form>
  );
};

export default EditProfileForm;
