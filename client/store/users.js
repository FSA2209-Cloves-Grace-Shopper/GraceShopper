import axios from 'axios';

/**
 * ACTION TYPES
 */

const SET_USER = 'SET_USER';

/**
 * ACTION CREATORS
 */

const setUser = (user) => ({
  type: SET_USER,
  user,
});

/**
 * THUNK CREATORS
 */


export const addUser = (user) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(`/api/users/`, user);
      console.log(`**data.id** ${data.id}`)
      dispatch(setUser(data));
      return data;
    } catch (e) {
      console.error(e);
    }
  };
};

export const fetchUser = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/users/${id}`);
      dispatch(setUser(data));
      return data;
    } catch (e) {
      console.error(e);
    }
  };
};

/**
 * REDUCER
 */
export default function (state = {}, action) {
  switch (action.type) {
    case SET_USER:
      return action.user;
    default:
      return state;
  }
}
