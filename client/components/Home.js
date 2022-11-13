import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getIdThunk } from '../store/orderId';

/**
 * COMPONENT
 */
export const Home = (props) => {
  console.log(props.auth, 'props');
  const { firstName } = props;

  useEffect(() => {
    console.log(props.auth.id);
    props.getId(props.auth.id);
  });

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

const mapDispatch = (dispatch) => {
  return {
    getId: (uid) => dispatch(getIdThunk(uid)),
  };
};

export default connect(mapState, mapDispatch)(Home);
