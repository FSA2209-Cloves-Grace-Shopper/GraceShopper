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
    default:
      return state;
  }
}
