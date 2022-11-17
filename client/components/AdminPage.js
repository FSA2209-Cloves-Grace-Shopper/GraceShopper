import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import EditProfileForm from './EditProfileForm';

const AdminPage = () => {
  let { auth } = useSelector((state) => state);
  const [view, setView] = useState(true);
  return (
    <>
      {' '}
      {auth.role === 'admin' ? (
        view ? (
          <>
            <EditProfileForm user={auth} />
            <button onClick={() => setView(!view)} type="submit">
              Go to Edit Product{' '}
            </button>
          </>
        ) : (
          <>
            <div>Product</div>
            <button onClick={() => setView(!view)} type="submit">
              Go to Edit Users{' '}
            </button>
          </>
        )
      ) : (
        <h1 id="warning">YOU SHALL NOT PASS -- BE GONE</h1>
      )}
    </>
  );
};

export default AdminPage;
