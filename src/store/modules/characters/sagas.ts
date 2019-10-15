import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toastr } from 'react-redux-toastr';

// Services
import api from '~/services/api';

import { CharacterTypes } from './types';
import { characterSuccess, characterFailure } from './actions';

export function* getCharacter(action: any) {
  try {
    const response = yield call(api.get, 'characters');

    const { data } = response;

    yield put(characterSuccess(data));
  } catch (err) {
    toastr.error('Ops', 'Usuário ou senha invalidos');
    yield put(characterFailure());
  }
}

export default all([takeLatest(CharacterTypes.CHARACTERS_REQUEST, getCharacter)]);
