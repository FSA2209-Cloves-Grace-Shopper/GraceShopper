import axios from 'axios';

// actions
const GET_CART = 'GET_CART';
const ADD_ITEM = 'ADD_ITEM';
const REMOVE_ITEM = 'REMOVE_ITEM';
const UPDATE_QUANTITY = 'UPDATE_QUANTITY';

//action creator
const addItem = (orderProduct) => ({
  type: ADD_ITEM,
  orderProduct,
});

const getCart = (cart) => ({
  type: GET_CART,
  cart,
});

//thunk
export const addItemThunk = (orderProduct) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(
        `/api/products/${orderProduct.productId}`,
        orderProduct
      );
      dispatch(addItem(data));
      return data;
    } catch (err) {
      console.error(err);
    }
  };
};
//get cart thunk
export const getCartThunk = (orderId) => {
  // need to first get the order number
  return async (dispatch) => {
    try {
      // const { data } = await axios.get(`api/users/${userId}/ordernum`);
      // const orderId = data.id;
      // console.log('***********************', orderId);
      const returnData = await axios.get(`/api/cart`, orderId);
      console.log(returnData.data.cart);
      dispatch(getCart(returnData.data.cart));
      return returnData;
    } catch (err) {
      console.error(err);
    }
  };
};

// Reducer
export default function (state = [], action) {
  switch (action.type) {
    case ADD_ITEM: {
      let found = false;
      const newCart = state.map((product) => {
        if (product.productId === action.orderProduct.productId) {
          found = true;
          return action.orderProduct;
        } else {
          return product;
        }
      });
      if (!found) {
        return [...state, action.orderProduct];
      } else {
        return newCart;
      }
    }
    case GET_CART: {
      return action.cart;
    }
    default:
      return state;
  }
}
