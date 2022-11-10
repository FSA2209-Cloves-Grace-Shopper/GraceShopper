import axios from 'axios'

// Action Types
const SET_PRODUCTS = 'SET_PRODUCTS'


// Action Creators
export const setProducts = (products) => {
  return {
    type: SET_PRODUCTS,
    products
  }
}

// Thunk Creators
export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get('/api/products')
      // console.log(`****DATA ${data[0].name}`)
      dispatch(setProducts(data));
      return data;
    } catch (e) {
      console.error(e);
    }
  };
};

  export default function allProducts (state = [], action) {
  switch (action.type) {
    case SET_PRODUCTS:
      return action.products;
    default:
      return state
  }
}

