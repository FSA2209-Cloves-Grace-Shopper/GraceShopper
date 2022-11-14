import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Login, Signup } from './components/AuthForm';
import Home from './components/Home';
import ViewAllProducts from './components/ViewAllProducts';
import ViewSingleProduct from './components/ViewSingleProduct';
import CheckoutPage from './components/CheckoutPage';
import Footer from './components/Footer';
import Cart from './components/Cart';
import SignupForm from './components/SignupForm';
import { me } from './store';

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData();
  }

  render() {
    const { isLoggedIn } = this.props;

    return (
      <div id="page-container">
        <div id="content-wrap">
          {isLoggedIn ? (
            <Switch>
              <Route path="/home" component={Home} />
              <Route exact path="/products" component={ViewAllProducts} />
              <Route exact path="/checkoutpage" component={CheckoutPage} />
              <Route path="/cart" component={Cart} />
              <Route
                exact
                path="/products/:productid"
                component={ViewSingleProduct}
              />
              <Redirect to="/products" />
            </Switch>
          ) : (
            <Switch>
              <Route path="/" exact component={Login} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={SignupForm} />
              <Route exact path="/products" component={ViewAllProducts} />
              <Route
                exact
                path="/products/:productid"
                component={ViewSingleProduct}
              />
              <Route path="/cart" component={Cart} />
              <Route exact path="/checkoutpage" component={CheckoutPage} />
            </Switch>
          )}
        </div>
        <Footer />
      </div>
    );
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.auth that has a truthy id.
    // Otherwise, state.auth will be an empty object, and state.auth.id will be falsey
    isLoggedIn: !!state.auth.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadInitialData() {
      dispatch(me());
    },
  };
};

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes));
