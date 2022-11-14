import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import { getIdThunk } from '../store/orderId';

/**
 * COMPONENT
 */
export const Home = (props) => {
  const curStore = useSelector((state) => state);
  // console.log(props.auth, 'props');
  const { firstName } = props;
  // save to local storage when
  // useEffect(() => {
  //   props.getId(props.auth.id);
  //   window.localStorage.setItem('store', JSON.stringify(curStore));
  // });

  return (
    <div>
      <h3>Welcome, {firstName}</h3>
    </div>
  );
};

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    email: state.auth.email,
    auth: state.auth,
    firstName: state.auth.firstName,
  };
};

// const mapDispatch = (dispatch) => {
//   return {
//     getId: (uid) => dispatch(getIdThunk(uid)),
//   };
// };

export default connect(mapState)(Home);
