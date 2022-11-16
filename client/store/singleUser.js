import axios from 'axios';
import history from '../history';
const TOKEN = 'token';

const EDIT_USER = 'EDIT_USER';
const editUser = (user) => ({
  type: EDIT_USER,
  user,
});

export const editUserThunk = (user) => {
  const token = window.localStorage.getItem(TOKEN);
  // console.log(token);
  return async (dispatch) => {
    try {
      const { data } = await axios.put(`/api/users/${user.id}`, user, {
        headers: {
          authorization: token,
        },
      });
      dispatch(editUser(data));
    } catch (e) {
      console.error(e);
    }
  };
};

export default function (state = {}, action) {
  switch (action.type) {
    case EDIT_USER:
      return action.user;
    default:
      return state;
  }
}
