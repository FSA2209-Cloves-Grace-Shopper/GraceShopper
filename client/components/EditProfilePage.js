import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import EditProfileForm from './EditProfileForm';

import { Link } from 'react-router-dom';
import { getCartThunk } from '../store/cart';

const Cart = (props) => {
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <>
      <EditProfileForm user={auth} />
    </>
  );
};

export default Cart;
