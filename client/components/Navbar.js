import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../store';

const Navbar = ({ handleClick, isLoggedIn, auth }) => (
  <div>
    <h1>The Riff Rack</h1>
    <nav>
      {isLoggedIn ? (
        <div>
          <Link to="/home">
            <img
              className="logo"
              src="https://i.imgur.com/Ide3Nie.png"
              alt="Logo"
            />
          </Link>
          {/* The navbar will show these links after you log in */}
          <Link to="/home">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/editprofile">Profile</Link>
          <Link to="/admin">Admin</Link>

          <a href="#" onClick={handleClick}>
            Logout
          </a>
        </div>
      ) : (
        <div>
          <Link to="/home">
            <img
              className="logo"
              src="https://i.imgur.com/Ide3Nie.png"
              alt="Logo"
            />
          </Link>
          {/* The navbar will show these links before you log in */}
          <Link to="/products">Products</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </div>
      )}
    </nav>
    <hr />
  </div>
);

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isLoggedIn: !!state.auth.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(logout());
    },
  };
};

export default connect(mapState, mapDispatch)(Navbar);
