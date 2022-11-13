import axios from 'axios';
// Actions

const GET_ID = 'GET_ID';

// action creators

const getId = (orderId) => {
  return {
    type: GET_ID,
    orderId,
  };
};

// thunk

export const getIdThunk = (userId) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get('/api/home', { params: { userId } });
      dispatch(getId(data.id));
    } catch (error) {
      console.error(error);
    }
  };
};

//reducer

export default function (state = 0, action) {
  switch (action.type) {
    case GET_ID:
      return action.orderId;
    default:
      return state;
  }
}
