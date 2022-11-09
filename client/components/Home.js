import React from "react";
import { connect } from "react-redux";

/**
 * COMPONENT
 */
export const Home = (props) => {
  console.log(props.auth, "props");
  const { firstName } = props;

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

export default connect(mapState)(Home);
