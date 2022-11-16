import axios from 'axios';
import history from '../history';
const TOKEN = 'token';

const EDIT_USER = 'EDIT_USER';

const ADIT_USER = 'ADIT_USER';
const AGIT_USER = 'AGIT_USER';

const editUser = (user) => ({
  type: EDIT_USER,
  user,
});

const aditUser = (user) => ({
  type: ADIT_USER,
  user,
});

const agitUser = (user) => ({
  type: AGIT_USER,
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

export const adminEditUser = (user) => {
  const token = window.localStorage.getItem(TOKEN);
  // console.log(token);
  const { userToEdit } = user;
  return async (dispatch) => {
    try {
      const { data } = await axios.put(`/api/admin/${user.id}`, userToEdit, {
        headers: {
          authorization: token,
        },
      });
      dispatch(aditUser(data));
    } catch (e) {
      console.error(e);
    }
  };
};

export const adminGetUser = (email) => {
  const token = window.localStorage.getItem(TOKEN);
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/admin/search`, {
        params: { email },
        headers: {
          authorization: token,
        },
      });

      dispatch(agitUser(data));
    } catch (e) {
      console.error(e);
    }
  };
};

export default function (state = {}, action) {
  switch (action.type) {
    case EDIT_USER:
      return action.user;
    case ADIT_USER:
      return action.user;
    case AGIT_USER:
      return action.user;
    default:
      return state;
  }
}
