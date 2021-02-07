import * as types from './actions';
export const loginUserAction = (user) => {
  return {
    type: types.LOGIN_USER,
    user
  }
};

export const registerUserAction = (user) => {
  return {
    type: types.REGISTER_USER,
    user
  }
};