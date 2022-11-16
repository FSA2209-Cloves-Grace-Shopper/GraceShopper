import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import EditProfileForm from './EditProfileForm';

const AdminPage = () => {
  let { auth } = useSelector((state) => state);
  const [view, setView] = useState(true);
  return view ? (
    <>
      <EditProfileForm user={auth} />
      <button onClick={() => setView(!view)} type="submit">
        View{' '}
      </button>
    </>
  ) : (
    <>
      <div>Product</div>
      <button onClick={() => setView(!view)} type="submit">
        View{' '}
      </button>
    </>
  );
};

export default AdminPage;
