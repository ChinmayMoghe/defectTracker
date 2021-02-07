import { takeLatest } from 'redux-saga/effects';
import { loginSaga,registerSaga } from './authenticationSaga';

import * as types from '../actions/actions';


export default function* watchUserAuthentication() {
  yield takeLatest(types.LOGIN_USER, loginSaga);
  yield takeLatest(types.REGISTER_USER,registerSaga);
}