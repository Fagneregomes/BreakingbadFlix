import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toastr } from 'react-redux-toastr';
import qs from 'qs';

// Services
import history from '~/services/history';
import api from '~/services/api';

import { AuthTypes } from './types';
import { signInSuccess, signFailure } from './actions';

export function* signIn(action: any) {
  try {
    const response = yield call(
      api.post,
      'token',
      qs.stringify({ ...action.payload.login, grant_type: 'password' })
    );

    const { token } = response;
    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token));

    history.push('/dashboard');
  } catch (err) {
    toastr.error('Ops', 'Usuário ou senha invalidos');
    yield put(signFailure());
  }
}

export default all([takeLatest(AuthTypes.SIGN_IN_REQUEST, signIn)]);
