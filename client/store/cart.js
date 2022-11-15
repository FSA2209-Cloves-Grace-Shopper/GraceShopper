import axios from 'axios';

// ACTIONS
const GET_CART = 'GET_CART';
const SET_CART = 'SET_CART';
const ADD_ITEM = 'ADD_ITEM';
const REMOVE_ITEM = 'REMOVE_ITEM';
const UPDATE_QUANTITY = 'UPDATE_QUANTITY';

//ACTION CREATORS
const addItem = (order) => ({
  type: ADD_ITEM,
  order,
});

export const getCart = (cart) => ({
  type: GET_CART,
  cart,
});

// THUNKS
export const addItemThunk = (orderProduct) => {
  return async (dispatch) => {
    try {
      if (orderProduct.userId) {
        const { data } = await axios.post(
          `/api/products/${orderProduct.productId}`,
          orderProduct
        );
        dispatch(addItem(data));
        return data;
      } else {
        dispatch(addItem(orderProduct));
        const { data } = await axios.get(
          `/api/products/${orderProduct.productId}`
        );
        orderProduct.imageUrl = data.imageUrl;
        orderProduct.name = data.name;
        const cart = JSON.parse(window.localStorage.getItem('cart'));

        let found = false;
        // This map fucntion will look to see if the product already exists in the cart, and will update it if so
        cart.map((currentProduct) => {
          if (currentProduct.productId === orderProduct.productId) {
            currentProduct.quantity += orderProduct.quantity;
            currentProduct.productSubtotal += orderProduct.productSubtotal;
            found = true;
            return currentProduct;
          } else {
            return currentProduct;
          }
        });
        if (!found) cart.push(orderProduct); // if the product was not already in the cart i.e. found = false, we need to add a new order product to the cart
        window.localStorage.setItem('cart', JSON.stringify(cart));
      }
    } catch (err) {
      console.error(err);
    }
  };
};
// - get cart thunk
export const getCartThunk = (orderId) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/cart`, { params: { orderId } });

      dispatch(getCart(data));
      return data;
    } catch (err) {
      console.error(err);
    }
  };
};

// - delete item thunk
export const deleteItemThunk = (productId, orderId) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.delete('/api/cart', {
        data: { productId, orderId },
      });
      dispatch(getCart(orderId));
      return data;
    } catch (err) {
      console.error(err);
    }
  };
};

//update quant thunk
export const updateQtyThunk = (orderId, productId, qty) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.put('/api/cart', {
        productId,
        orderId,
        qty,
      });
      return data;
    } catch (err) {
      console.error(err);
    }
  };
};

// REDUCER

export default function (state = [], action) {
  switch (action.type) {
    case ADD_ITEM:
      return action.order;
    case GET_CART:
      return action.cart;
    default:
      return state;
  }
}
