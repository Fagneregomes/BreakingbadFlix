import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toastr } from 'react-redux-toastr';

// Services
import api from '~/services/api';

import { EpisodesTypes } from './types';
import { episodesSuccess, episodesFailure } from './actions';

export function* getEpisodes(action: any) {
  try {
    const response = yield call(api.get, 'episodes');

    const { data } = response;

    yield put(episodesSuccess(data));
  } catch (err) {
    toastr.error('Ops', 'Falha ao tentar encontrar episodios');
    yield put(episodesFailure());
  }
}

export default all([takeLatest(EpisodesTypes.EPISODES_REQUEST, getEpisodes)]);
