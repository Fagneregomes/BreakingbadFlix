import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toastr } from 'react-redux-toastr';

// Services
import api from '~/services/api';

import { CharacterTypes } from './types';
import { characterSuccess, characterFailure } from './actions';

export function* getCharacter(action: any) {
  const { limit, offset } = action.payload;

  try {
    const respTotalPage = yield call(api.get, 'characters', { params: { limit: 100, offset: 0 } });
    const totalPage = respTotalPage.data.length;

    const response = yield call(api.get, 'characters', { params: { limit, offset } });

    const { data } = response;

    yield put(characterSuccess(data, totalPage));
  } catch (err) {
    toastr.error('Ops', 'Falha ao tentar carregar personagens');
    yield put(characterFailure());
  }
}

export default all([takeLatest(CharacterTypes.CHARACTERS_REQUEST, getCharacter)]);
