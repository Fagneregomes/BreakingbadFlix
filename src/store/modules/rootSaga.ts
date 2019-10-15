import { all } from 'redux-saga/effects';

import character from './characters/sagas';
import episodes from './episodes/sagas';

export default function* rootSaga() {
  return yield all([character, episodes]);
}
